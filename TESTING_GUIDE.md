# Testing Guide - CopticLearn Mobile App

This guide explains how to test your app as a Progressive Web App (PWA) and as native iOS/Android apps.

## Method 1: Test as Progressive Web App (PWA) - Easiest

The PWA can be tested immediately without any additional setup. This is the quickest way to test the mobile experience.

### Steps:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access from your mobile device:**
   - Make sure your phone and computer are on the same Wi-Fi network
   - Find your computer's local IP address:
     - **Mac/Linux**: Run `ifconfig | grep "inet "` or `ipconfig getifaddr en0`
     - **Windows**: Run `ipconfig` and look for IPv4 Address
   - On your mobile device, open a browser and navigate to: `http://YOUR_IP_ADDRESS:9583`
   - Example: `http://192.168.1.100:9583`

3. **Install as PWA:**
   - **iOS (Safari)**: Tap the Share button → "Add to Home Screen"
   - **Android (Chrome)**: You'll see an "Install App" banner or find it in the menu → "Install App"
   - **Desktop (Chrome/Edge)**: Look for the install icon in the address bar

4. **Test PWA features:**
   - App works offline (after first load)
   - App appears as standalone (no browser UI)
   - App icon on home screen

### Testing PWA on Desktop Browser:

1. Run `npm run dev`
2. Open Chrome/Edge and navigate to `http://localhost:9583`
3. Open DevTools (F12) → Application tab → Service Workers
4. Check "Offline" to test offline functionality
5. Look for install prompt in address bar

---

## Method 2: Test as Native Android App

### Option A: Using Android Emulator (No physical device needed)

1. **Install Android Studio:**
   - Download from: https://developer.android.com/studio
   - Install Android SDK and create an emulator device

2. **Build and sync the app:**
   ```bash
   npm run cap:build
   ```

3. **Open Android Studio:**
   ```bash
   npm run android
   ```
   Or manually: Open Android Studio → Open → Select `android/` folder

4. **Run on emulator:**
   - In Android Studio, click the green "Run" button
   - Select an emulator device (create one if needed)
   - App will build and launch automatically

### Option B: Using Physical Android Device

1. **Enable Developer Mode on your phone:**
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back → Developer Options
   - Enable "USB Debugging"

2. **Connect device:**
   ```bash
   npm run cap:build
   npm run android
   ```

3. **In Android Studio:**
   - Your device should appear in device list
   - Click Run to install and launch the app

### Testing on Android - Quick Command:
```bash
npm run build
npx cap sync
npm run android
# Then click Run in Android Studio
```

---

## Method 3: Test as Native iOS App

### Option A: Using iOS Simulator (No physical device needed, but requires Mac)

1. **Install Xcode:**
   - Download from Mac App Store (large download ~10GB+)
   - Install Command Line Tools: `xcode-select --install`

2. **Install CocoaPods:**
   ```bash
   sudo gem install cocoapods
   ```

3. **Install iOS dependencies:**
   ```bash
   cd ios/App
   pod install
   cd ../..
   ```

4. **Build and sync:**
   ```bash
   npm run cap:build
   ```

5. **Open Xcode:**
   ```bash
   npm run ios
   ```
   Or manually: Open `ios/App/App.xcworkspace` (NOT .xcodeproj!)

6. **Run on simulator:**
   - In Xcode, select a simulator (iPhone 14, iPhone 15, etc.)
   - Click the Play button or press Cmd+R
   - App will build and launch in simulator

### Option B: Using Physical iOS Device

**Note:** This requires an Apple Developer account ($99/year) for release builds, but free accounts can test for 7 days.

1. **Follow steps 1-5 from Option A**

2. **In Xcode:**
   - Connect your iPhone/iPad via USB
   - Select your device in the device dropdown
   - Go to Signing & Capabilities
   - Select your Apple ID for "Team"
   - Click Run → Device will prompt to trust developer certificate
   - App will install and launch

### Testing on iOS - Quick Command:
```bash
npm run build
cd ios/App && pod install && cd ../..
npx cap sync ios
npm run ios
# Then click Run in Xcode
```

---

## Comparison: PWA vs Native Apps

| Feature | PWA | Native iOS | Native Android |
|---------|-----|------------|-----------------|
| **Setup Time** | ✅ Instant | ⚠️ Requires Xcode | ⚠️ Requires Android Studio |
| **Testing Speed** | ✅ Fastest | ⚠️ Slower (Xcode build) | ⚠️ Slower (Gradle build) |
| **Offline Support** | ✅ Yes (Service Worker) | ✅ Yes (Built-in) | ✅ Yes (Built-in) |
| **App Store** | ❌ No | ✅ Yes | ✅ Yes |
| **Native APIs** | ⚠️ Limited | ✅ Full Access | ✅ Full Access |
| **Performance** | ✅ Good | ✅ Excellent | ✅ Excellent |
| **Updates** | ✅ Instant (auto) | ⚠️ Requires store update | ⚠️ Requires store update |

---

## Recommended Testing Order

1. **Start with PWA** (fastest way to test mobile experience)
   - Test UI/UX on mobile browser
   - Verify offline functionality
   - Check install behavior

2. **Test Android Native** (if you have Android device)
   - Better performance
   - Full native features

3. **Test iOS Native** (if you have Mac + iOS device)
   - Complete native experience
   - App Store preparation

---

## Troubleshooting

### PWA Issues:
- **No install prompt**: Make sure you're using HTTPS or localhost (Chrome requirement)
- **Service worker not working**: Check browser console for errors
- **Offline not working**: Clear cache and reload

### Android Issues:
- **Build fails**: Make sure Android SDK is installed
- **Device not detected**: Check USB debugging is enabled
- **Gradle errors**: Run `cd android && ./gradlew clean`

### iOS Issues:
- **CocoaPods errors**: Run `pod repo update` then `pod install`
- **Build fails**: Open `.xcworkspace` not `.xcodeproj`
- **Signing errors**: Select your team in Xcode Signing & Capabilities

---

## Next Steps After Testing

Once you've tested and everything works:

1. **For Production:**
   - Update version numbers in `package.json`, `Info.plist`, and `build.gradle`
   - Configure app signing certificates
   - Build release versions
   - Submit to App Store / Google Play

2. **For Distribution:**
   - Create app icons for all required sizes
   - Prepare screenshots for stores
   - Write app descriptions
   - Set up developer accounts if needed

---

## Quick Commands Reference

```bash
# Development
npm run dev                    # Start dev server (PWA testing)

# Build
npm run build                  # Build web app
npm run cap:build              # Build + sync to native platforms

# Sync
npx cap sync                   # Sync to all platforms
npx cap sync ios              # Sync to iOS only
npx cap sync android          # Sync to Android only

# Open IDEs
npm run ios                    # Open Xcode
npm run android               # Open Android Studio
```

