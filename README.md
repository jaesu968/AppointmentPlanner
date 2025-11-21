# Appointment Planner

This project is a simple appointment planner application built with React. It allows users to manage their contacts and schedule appointments.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as part of a Codecademy challenge.

## Features

*   **Contacts Page (`/contacts`)**
    *   Add new contacts with a name, phone number, and email address.
    *   The form validates for duplicate contact names to prevent adding the same person twice.
    *   Phone numbers are validated to match U.S. formatting.
    *   View a list of all saved contacts.
*   **Appointments Page (`/appointments`)**
    *   Schedule new appointments with a title, date, and time.
    *   Associate appointments with an existing contact from a dropdown list.
    *   View a list of all upcoming appointments.

## Project Overview

This application demonstrates several key concepts in modern React development.

### Core Concepts

*   **Component-Based Architecture**: The application is broken down into small, reusable components located in `src/components`. Page-level components, which assemble the smaller pieces, are in `src/containers`.
*   **React Router (`v6`)**: Client-side routing is handled by `react-router-dom`. The main routes are defined in `src/App.js`, and the `Root` component (`src/components/root/Root.js`) provides the main layout with navigation links.
*   **State Management with Hooks**:
    *   **Centralized State**: The main application state (the list of `contacts` and `appointments`) is managed in the top-level `App.js` component using the `useState` hook.
    *   **Prop Drilling**: This state is passed down to child components through props. For example, `App.js` passes the `addContact` function and `contacts` array to `ContactsPage`.
    *   **Local State**: Individual components also manage their own local state. For instance, `ContactsPage.js` uses `useState` to manage the values in the "Add Contact" form.
*   **Side Effects with `useEffect`**: The `useEffect` hook is used in `ContactsPage.js` to perform a side effect: checking if a contact name is a duplicate whenever the `name` input changes.
*   **Controlled Components**: All forms, such as `ContactForm.js` and `ContactPicker.js`, are controlled components. The state within the React component is the single source of truth for the input element's value.
*   **List and Key Rendering**: The `TileList.js` component demonstrates how to render a list of items from an array using the `.map()` method. It correctly uses the `key` prop to help React identify which items have changed, are added, or are removed.

### Project Structure

```
src
├── App.js                # Main application component, state management, and routing
├── components
│   ├── contactForm       # Form for adding a new contact
│   ├── contactPicker     # Dropdown for selecting a contact
│   ├── root              # Main layout with navigation
│   ├── tile              # Component to display a single item
│   └── tileList          # Component to display a list of tiles
└── containers
    ├── appointmentsPage  # Page for managing appointments
    └── contactsPage      # Page for managing contacts
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
