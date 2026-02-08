# 📱 Expo Activity Tracker

A simple React Native (Expo) application that allows users to log, view, and delete exercise activities throughout the day.

---

## ✨ Features

- Add exercise activities with:
  - Activity name
  - Duration (minutes)
  - Activity date
  - Optional notes
- View a list of logged activities
- Delete activities
- Local data persistence
- Form validation with schema enforcement
- Activities automatically loaded on app startup

---

## 🧱 Architecture Overview

This project uses a **service-first layered architecture** designed for extensibility and maintainability.

UI (Expo Router Screens)<br />
↓<br />
Context + Reducer (State)<br />
↓<br />
Service Layer (Business Logic)<br />
↓<br />
Storage Adapter<br />
↓<br />
AsyncStorage<br />

### Key Principles

- Services own business logic and persistence
- Context manages in-memory UI state
- Reducers remain pure (no business logic or storage calls)
- Storage is abstracted to allow future migration (e.g., SQLite or API)
- Validation is shared between UI and services

---

## 🛠️ Tech Stack

- **Expo / React Native**
- **Expo Router** – Navigation
- **React Context + useReducer** – State management
- **AsyncStorage** – Local persistence
- **React Hook Form** – Form handling
- **Zod** – Schema validation

---

## 🧾 Data Model

Activity

id<br />
userId<br />
name<br />
duration<br />
notes<br />
activityDate<br />
createdAt

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install

npx expo start
```

Run using Expo Go.
