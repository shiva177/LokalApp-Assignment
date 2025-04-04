# Job Listing App

![Expo](https://img.shields.io/badge/Expo-React--Native-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey)

This is a **React Native** application built with **Expo** for Android and iOS platforms. The app fetches job listings from an API and allows users to bookmark jobs for offline viewing.

## 📌 Features

- **Bottom Navigation**: Users can navigate between "Jobs" and "Bookmarks" sections.
- **Infinite Scroll**: The Jobs screen fetches data from the API as the user scrolls.
- **Job Details Screen**: Clicking on a job opens a detailed view.
- **Bookmarking Feature**: Users can save jobs to their bookmarks.
- **Offline Support**: Bookmarked jobs are stored in a local database for offline access.
- **State Management**: Proper handling of loading, error, and empty states.

## 🛠 Tech Stack

- **React Native** (with Expo)
- **React Navigation** (for screen navigation)
- **Axios** (for API calls)
- **AsyncStorage / SQLite** (for offline storage)
- **React Query** (for caching & API management)
- **React Native Paper** (for UI components)

## 🚀 Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/job-listing-app.git
cd job-listing-app

# Install dependencies
npm install  # or yarn install

# Start the development server
expo start

# Run on a device
# Android: Press `a` in the terminal
# iOS: Press `i` (requires macOS & Xcode)
