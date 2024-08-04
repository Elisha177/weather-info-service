# Weather Information Service

This project is a simple weather information service that allows users to fetch and display weather data based on a city name. It uses the [Weatherstack API](https://weatherstack.com/) to retrieve weather information and serves it via an Express server. The frontend is built with basic HTML and JavaScript to interact with the backend API.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features
- Fetch current weather information for a given city.
- Display weather details such as temperature, weather description, wind speed, humidity, and more.
- Simple user interface with an input field and a button to get weather information.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps
1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/weather-info-service.git
    ```
    Replace `yourusername` with your GitHub username.

2. **Navigate to the Project Directory**:
    ```sh
    cd weather-info-service
    ```

3. **Install Dependencies**:
    ```sh
    npm install
    ```

4. **Create an `.env` File**:
    Create a file named `.env` in the root directory of the project and add your Weatherstack API key:
    ```env
    WEATHERSTACK_API_KEY=your_api_key_here
    ```
    Replace `your_api_key_here` with your actual API key from Weatherstack.

## Usage

1. **Start the Server**:
    ```sh
    node src/app.js
    ```
    The server will start and listen on port 3000 (or any port specified in the `.env` file).

2. **Open the Application**:
    Open your browser and go to `http://localhost:3000`.

3. **Get Weather Information**:
    - Enter the city name in the input field and click "Get Weather".
    - The weather information for the specified city will be displayed below the input field.

## API Endpoint

- **Endpoint**: `/api/weather/:city`
- **Method**: `GET`
- **Parameters**:
  - `city`: The name of the city for which you want to fetch weather information.
- **Response**: JSON object with weather details or an error message.

### Example Request
