# React and Nodejs IP Geolocation App

This React application fetches IP and geolocation data and displays it to the user along with a map.
The backend is built with Node.js and is available at this [repo](https://github.com/gtcore902/myIP-backend).

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Install dependencies:

```bash
npm install or yarn
```

3. Start the development server:

```bash
npm start or yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Displays IP address, city, country, latitude, longitude, and region information.
- Shows a map based on the latitude and longitude information.
- Utilizes React hooks for state management.
- Fetches data from various APIs including geolocation, IP lookup, and weather.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [SCSS](https://sass-lang.com/) - CSS preprocessor.
- [ip-api.com](http://ip-api.com/) - Geolocation API for fetching location data based on IP address.
- [OpenWeatherMap](https://openweathermap.org/) - Weather API for reverse geocoding.

## Contributing

You're welcome :sunglasses:

If you wish to use or contribute to the project, follow these steps:point_down::

- Fork the project
- Replace in apiKey.js file the key with you own key:
  > `const API_KEY = 'YOUR_API_KEY'` >`export default API_KEY`
- Create a feature branch
  > git checkout -b feature/NewFeature
- Commit your changes
  > git commit -m 'Add NewFeature'
- Push the branch
  > git push origin feature/AmazingFeature
- Open a pull Request

_[How to use Git?](https://docs.github.com/fr/get-started/using-git/about-git)_

## Contact

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ga%C3%ABtan-tremois-a956a91a3)
