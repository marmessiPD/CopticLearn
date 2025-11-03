const CACHE_NAME = 'coptic-learn-v2';
const STATIC_CACHE_URLS = [
  '/',
  '/manifest.json',
  '/icon-192.svg',
  '/icon-512.svg'
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  const requestUrl = event.request.url;
  
  // Skip intercepting:
  // 1. WebSocket connections (Vite HMR)
  // 2. External CDN requests (Tailwind, Google Fonts, etc.)
  // 3. Non-GET requests (POST, PUT, DELETE, etc.)
  if (requestUrl.startsWith('ws://') || 
      requestUrl.startsWith('wss://') ||
      requestUrl.includes('cdn.tailwindcss.com') ||
      requestUrl.includes('fonts.googleapis.com') ||
      requestUrl.includes('fonts.gstatic.com') ||
      event.request.method !== 'GET') {
    // Let the browser handle these requests normally
    return;
  }

  const url = new URL(event.request.url);
  
  // Only intercept same-origin GET requests
  if (url.origin !== self.location.origin) {
    // For other external GET requests, let browser handle them
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // Fetch from network
        return fetch(event.request).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200) {
            return response;
          }

          // Only cache same-origin responses
          if (response.type === 'basic' || response.type === 'cors') {
            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        }).catch(() => {
          // If network fails, show offline page for navigation requests
          if (event.request.destination === 'document' || 
              event.request.mode === 'navigate') {
            return caches.match('/').then((cachedPage) => {
              return cachedPage || new Response('Offline', { 
                status: 200,
                headers: { 'Content-Type': 'text/html' }
              });
            });
          }
          // For non-navigation requests, return a proper error response
          return new Response('Network error', { 
            status: 408,
            statusText: 'Request Timeout'
          });
        });
      })
      .catch(() => {
        // Fallback: try to fetch directly
        return fetch(event.request).catch(() => {
          // Last resort: return error response
          return new Response('Network error', { 
            status: 408,
            statusText: 'Request Timeout'
          });
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Handle background sync for offline progress
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Sync offline progress when back online
      syncOfflineProgress()
    );
  }
});

async function syncOfflineProgress() {
  try {
    const offlineProgress = await getOfflineProgress();
    if (offlineProgress.length > 0) {
      // Send progress to server when online
      await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offlineProgress)
      });
      
      // Clear offline progress after successful sync
      await clearOfflineProgress();
    }
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

async function getOfflineProgress() {
  // Get offline progress from IndexedDB
  return new Promise((resolve) => {
    const request = indexedDB.open('CopticLearnDB', 1);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['progress'], 'readonly');
      const store = transaction.objectStore('progress');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };
      
      getAllRequest.onerror = () => {
        resolve([]);
      };
    };
    
    request.onerror = () => {
      resolve([]);
    };
  });
}

async function clearOfflineProgress() {
  // Clear offline progress from IndexedDB
  return new Promise((resolve) => {
    const request = indexedDB.open('CopticLearnDB', 1);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['progress'], 'readwrite');
      const store = transaction.objectStore('progress');
      const clearRequest = store.clear();
      
      clearRequest.onsuccess = () => {
        resolve();
      };
      
      clearRequest.onerror = () => {
        resolve();
      };
    };
    
    request.onerror = () => {
      resolve();
    };
  });
}
