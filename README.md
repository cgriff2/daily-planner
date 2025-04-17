# IS 542 Semester Project - Daily Planner App

## Project Description

The Daily Planner App is a simple yet powerful single-page web application built using **React** and **TypeScript**. It allows users to manage their daily tasks with features such as adding, editing, and marking tasks as completed. The app integrates weather information to help users plan their day better, by showing current weather and a 10-day forecast using the **OpenWeather API**.

### Core Features:
- **Task Management**: Users can add tasks for the day, mark them as completed, and edit their tasks.
- **Weather Information**: Fetches the current weather and a 10-day forecast from the OpenWeather API, displaying relevant data such as temperature, wind speed, and conditions.
- **Task Completion**: Tasks can be marked as completed with a strikethrough effect, and a dimming effect is applied for completed tasks.
- **Drag-and-Drop**: (Note: Drag-and-drop functionality was removed from the project due to maintenance concerns).
- **Responsive Design**: The app is fully responsive, ensuring that it works well on both mobile and desktop devices.

## Technologies Used

- **React**: Frontend framework for building the user interface with functional components and hooks.
- **TypeScript**: For type safety and maintaining clean, well-structured code.
- **OpenWeather API**: To fetch real-time weather data based on the user's location or search.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **React Router**: For navigation between different pages in the app.

## Installation

To get started with the project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/daily-planner-app.git
    cd daily-planner-app
    ```

2. Install the project dependencies:

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
    - `/weather`: Provides current weather data for a city or location.
    - `/forecast`: Provides a 10-day weather forecast for a city.
  
- **How Data is Handled**:
    - The app fetches weather data based on the user's current location or a manually entered city.
    - Displays current conditions, including temperature, wind speed, and a summary of the weather.
    - The 10-day weather forecast is also fetched and displayed for better planning.
    - If the weather data fetch fails (e.g., invalid city), an error message is displayed.

### Example Request (Current Weather):
```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API_KEY}`)
