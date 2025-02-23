```markdown
# Kameroon.Next

A progressive web application (PWA) for QR and barcode scanning, built with Next.js. 
Uses Web Workers for efficient barcode processing and Service Workers for offline functionality.


## ✨ Features
- 📸 Real-time QR/bar code scanning using device camera
- 🔄 Dual decoder support (ZBar + ZXing) via WebAssembly for better accuracy
- ⚡ Web Workers for non-blocking QR/bar code processing
- 🔌 Service Worker enabling offline functionality
- 🔊 Audio feedback on successful scan
- 🌐 Works without internet connection
- 📱 Responsive design
- 💾 Installable as a PWA

## 🛠️ Tech Stack
- ⚛️ Next.js 15
- 🎨 TailwindCSS
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
