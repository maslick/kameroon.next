# Kameroon.Next

A progressive web application (PWA) for QR and barcode scanning, built with Next.js. 
Uses Web Workers for efficient barcode processing and Service Workers for offline functionality.

## 💡 Demo
https://kameroon.vercel.app

<p align="center" >
  <img src="./screenshot.png" />
</p>

## ✨ Features
- 📸 Real-time QR/bar code scanning using device camera
- 🔄 Dual decoder support (ZBar + ZXing) via WebAssembly for better accuracy
- ⚡ Web Workers for non-blocking QR/bar code processing
- 🔌 Service Worker via [serwist](https://serwist.pages.dev) enabling offline functionality
- 🔊 Audio feedback on successful scan
- 🌐 Works without internet connection
- 📱 Responsive design
- 💾 Installable as a PWA

## 🛠️ Tech Stack
- ⚛️ Next.js 15
- 🎨 Tailwind CSS
- 👷 Web Workers for QR/bar code processing
- 🔧 WebAssembly (ZBar and ZXing decoders)
- 🔄 Service Workers for offline support
- 📷 MediaDevices API for camera access

## 🏗️ Architecture
- 🖥️ Main thread handles UI
- ⚙️ Web Workers process frames in parallel using WebAssembly-compiled ZBar and ZXing
- 💾 Service Worker caches assets and enables offline functionality

## 🚀 Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔭 References
* https://github.com/maslick/koder
* https://github.com/maslick/kameroon-lib

## 🙏 Credits
We appreciate the open-source community for their contributions. **Kameroon.next** uses:

- [ZBar v0.23.90](https://github.com/mchehab/zbar/releases/tag/0.23.90) under [LGPLv2+](https://github.com/mchehab/zbar/blob/master/LICENSE.md)
- [ZXing v2.1.0](https://github.com/zxing-cpp/zxing-cpp/releases/tag/v2.1.0) (C++ port of ZXing) under [Apache License 2.0](https://github.com/zxing-cpp/zxing-cpp/blob/master/LICENSE)
