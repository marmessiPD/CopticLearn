import React from 'react';
import ReactDOM from 'react-dom/client';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Keyboard } from '@capacitor/keyboard';
import './src/index.css';
import AppComponent from './App';

// Get root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create root and render immediately - don't wait for async operations
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);

// Initialize Capacitor plugins after React is rendered
// Only initialize plugins if running natively (not in browser)
if (Capacitor.isNativePlatform()) {
  (async () => {
    try {
      // Configure Status Bar
      await StatusBar.setStyle({ style: Style.Default });
      await StatusBar.setBackgroundColor({ color: '#003366' });
      
      // Configure Splash Screen
      await SplashScreen.hide();
      
      // Handle app state changes
      App.addListener('appStateChange', ({ isActive }) => {
        console.log('App state changed. Is active?', isActive);
      });

      // Handle app URL open (deep links)
      App.addListener('appUrlOpen', (data) => {
        console.log('App opened with URL:', data.url);
      });

      // Handle back button on Android
      App.addListener('backButton', ({ canGoBack }) => {
        if (!canGoBack) {
          App.exitApp();
        } else {
          window.history.back();
        }
      });

      // Handle keyboard events
      Keyboard.addListener('keyboardWillShow', (info) => {
        console.log('keyboard will show with height:', info.keyboardHeight);
      });

      Keyboard.addListener('keyboardWillHide', () => {
        console.log('keyboard will hide');
      });
    } catch (error) {
      console.error('Error initializing Capacitor plugins:', error);
    }
  })();
}
