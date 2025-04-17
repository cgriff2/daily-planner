# IS 542 Semester Project - Weather Dashboard

## Project Description

This Weather Dashboard is a single-page web application built using **React** and **TypeScript**. It allows users to search for cities and view current weather conditions, including temperature, humidity, wind speed, and a 5-day forecast. The data is fetched from the **OpenWeather API** to provide real-time weather information.

The application is designed to be responsive and provides an intuitive, user-friendly interface with dynamic weather updates. It features a search bar where users can input city names to fetch weather data, and the display updates accordingly. The UI adapts to different screen sizes, ensuring a smooth experience on both mobile and desktop devices.

## Features

- Search for cities and view current weather conditions
- 5-day weather forecast with daily temperature, humidity, and wind speed
- Dynamic weather icons based on the current conditions (sunny, cloudy, rainy, etc.)
- Responsive design for both mobile and desktop views
- Error handling for invalid city names or failed API requests

## Technologies Used

- **React**: Frontend framework for building the UI using functional components and hooks.
- **TypeScript**: For type safety and better code maintainability.
- **OpenWeather API**: To fetch weather data based on user input.
- **CSS / Tailwind CSS**: For styling the UI with a mobile-first responsive design.
- **React Router**: For managing routes and navigation within the app.

## Installation

To get started with the project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/weather-dashboard.git
    cd weather-dashboard
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file at the root of the project and add your OpenWeather API key:

    ```
    REACT_APP_WEATHER_API_KEY=your_openweather_api_key_here
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The app will be running at `http://localhost:3000`.

## API(s) Used

### OpenWeather API

- **Base URL**: `https://api.openweathermap.org/data/2.5/`
- **Endpoints**:
    - `/weather`: Provides current weather data for a city.
    - `/forecast`: Provides a 5-day weather forecast.
- **How Data is Handled**:
    - User input (city name) is sent to the OpenWeather API.
    - The app fetches data about the current weather and forecast for that city.
    - The response is parsed and displayed to the user, including details like temperature, humidity, wind speed, and weather icons.
    - Error handling is implemented to manage invalid city names and API failures.

### Example Request (Current Weather):
```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API_KEY}`)
