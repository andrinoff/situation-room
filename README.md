# Situation Room

[![License: ISC](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://opensource.org/licenses/unlicense)
[![Project Status: Active](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

A simple, modern dashboard that provides a real-time "situation report" on various topics, including the number of people in space, live Bitcoin prices, and random activity suggestions. This project is built with a React frontend and a Node.js/Express backend.

---

## Features

* **People in Space:** Displays the current number of astronauts in space and their names.
* **Live Bitcoin Price:** Shows the real-time price of Bitcoin in USD.
* **Activity Suggestions:** Fetches a random activity suggestion when you're feeling bored.
* **Responsive Design:** The dashboard is designed to work on various screen sizes.
* **Modern UI:** A clean and dark-themed user interface.

---

## Technologies Used

### Frontend

* **React:** For building the user interface.
* **ReactDOM:** To render React components in the DOM.
* **Babel:** For in-browser JSX compilation.
* **Tailwind CSS:** For styling the application.

### Backend

* **Node.js:** As the JavaScript runtime environment.
* **Express:** A fast, unopinionated, minimalist web framework for Node.js.
* **Axios:** For making HTTP requests to external APIs.
* **CORS:** To enable Cross-Origin Resource Sharing.

---

## Setup and Installation

### Frontend

The frontend is a single `index.html` file that uses CDNs for all its dependencies. No build step is required. Simply open the `index.html` file in your web browser.

### Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```
    The backend server will be running at `http://localhost:3000`.

---

## API Endpoints

The backend server exposes the following API endpoints:

* `GET /api/astros`: Fetches data about the number of people currently in space.
* `GET /api/activity`: Fetches a random activity suggestion.
* `GET /api/crypto`: Fetches the current price of Bitcoin.

---

## License

This project is licensed under the Unlicense License.
