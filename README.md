# Root Take Home Project - Sam Kissee

---

Thank you for reviewing this project! Project created with Expo and Typescript. I have not used Expo in a long time, so apologies if some things are not 100% up to standard.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Requirements from PDF Document for Easy Reference

### 1. Mock Data Provider

- Implement a mock data provider using in-memory data storage.
- Include hard-coded initial notifications to display upon app startup.
- Use a suitable data structure to manage notifications.

### 2. Notification System

- Design a system to randomly generate mock notifications simulating real-time updates.
- Each notification includes:
  - Notification type (e.g., new mention, friend request, community invite).
  - Timestamp of when the notification was created.

### 3. Notification Display

- Create a user interface to display the list of notifications.
- Display key details such as:
  - Notification type.
  - Timestamp.
  - Read/unread status.

### 4. Mark Notifications as Read

- Implement functionality for users to mark notifications as read.
- Tapping on a notification updates its read status.
- Ensure the UI dynamically reflects changes.

### 5. TypeScript Support

- Define and use TypeScript types for notification data.
- Ensure type safety throughout the application.

## Evaluation Criteria

The project will be assessed based on the following:

### 1. Functionality

- Does the app meet the specified requirements?

### 2. Code Quality

- Is the code well-organized, readable, and maintainable?
- Does it adhere to React Native best practices?

### 3. Architecture

- Is the app designed with good architectural practices?
- Is it flexible, extensible, and updatable?

### 4. State Management

- How effectively is state managed, particularly for notifications?
