const CACHE_NAME = 'coptic-learn-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Sans+Coptic&display=swap'
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
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // If both cache and network fail, show offline page for navigation requests
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
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
