# Weather App

This is a React-based weather application that displays current weather information, hourly forecasts, and daily forecasts. The app fetches data from the OpenWeather API and displays it in a visually appealing way, based on the current weather conditions.

## Features

- Search for weather information by city.
- Get weather based on the user's current location.
- Toggle between Celsius (°C) and Fahrenheit (°F).
- Displays real-time weather data.
- Displays 5-hour and daily forecasts.
- Dynamic background changes based on weather conditions.
- Real-time notifications for fetching weather data using `react-toastify`.

## Tech Stack

- **React**: Frontend framework.
- **OpenWeather API**: Provides the weather data.
- **React Icons**: Icons for a user-friendly UI.
- **Tailwind CSS**: For styling.
- **Luxon**: For date and time formatting.
- **React Toastify**: For showing notifications.

## Components

### 1. `App.js`
- The main component that handles state management for the app.
- Fetches weather data using `getFormattedWeatherData()` and updates the UI.
- Manages the `query` (city or coordinates) and `units` (Celsius/Fahrenheit).
- Applies background based on weather conditions.

### 2. `Forecast.js`
- Displays the forecast (hourly or daily).
- Renders a list of forecasted temperatures, icons, and times/dates.

### 3. `Inputs.js`
- Allows users to search for a city's weather or use their current location.
- Provides buttons to switch between Celsius and Fahrenheit.

### 4. `TimeAndLocation.js`
- Displays current weather details including temperature, wind speed, humidity, and more.
- Shows sunrise and sunset times.

### 5. `weatherService.js`
- Contains functions for fetching weather data from the OpenWeather API.
- Formats the current weather data and forecast data.
- Uses Luxon for time formatting.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hemanthdorepalli/WeatherApp.git

API
The app uses the OpenWeather API for fetching current weather and forecast data.

Endpoints:
Current Weather: /weather
Forecast: /forecast
Parameters:
q: City name
lat: Latitude
lon: Longitude
units: Temperature units (metric for °C, imperial for °F)
Usage
Search for a city using the search bar.
Click on the location icon to get weather data for your current location.
Toggle between °C and °F using the buttons provided.
Dependencies
react: JavaScript library for building user interfaces.
axios: For making HTTP requests.
react-icons: Icons used in the UI.
luxon: For formatting date and time.
react-toastify: For showing notifications.
tailwindcss: Utility-first CSS framework.
Screenshots
Home Page

Author
Your Name - your-github-profile