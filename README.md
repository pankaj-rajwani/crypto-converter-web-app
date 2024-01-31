# Crypto.converter

This React.js application allows users to convert amounts between different cryptocurrencies and fiat currencies. It uses [Vite](https://vitejs.dev) as its bundler and compiler.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [URL](#url)

## Features

- **Currencies Listing:** Get latest crypto currencies along with their supported fiat currencies.
- **Currency Conversion:** Convert amounts between different cryptocurrencies and supported fiat currencies.
- **User-friendly Interface:** Simple form-based UI for easy input and conversion.

## Getting Started

### Prerequisites

- This project is using [Yarn](https://yarnpkg.com/en/docs/install) as package manager, if you do not have this installed on your machine, please install by looking at the [Yarn docuentation and tutorials](https://classic.yarnpkg.com/en/docs).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pankaj-rajwani/crypto-converter-web-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd crypto-converter-web-app
   ```

3. Install dependencies

   ```bash
   yarn add
   ```

### Usage

1. If you don't have the [crypto-converter-api](https://github.com/pankaj-rajwani/crypto-converter-api) setup at your local, then create a .env file in the root directory and paste the contents of .env.production into it, otherwise paste the contents of .env.development into it.

2. Start the development server

   ```bash
   yarn dev
   ```

3. Open your browser and visit http://localhost:5173 to access the Crypto.converter app.

## Folder Structure

This folder structure follows clean architecture conventions for organizing a React.js application, separating concerns into different directories for clarity and maintainability.

    crypto-converter-web-app/
    |-- public/
    |-- src/
    |   |-- assets/
    |   |-- components/
    |   |-- layout/
    |   |-- pages/
    |   |-- routers/
    |   |-- services/
    |   |-- utils/
    |   |-- App.jsx
    |   |-- index.css
    |   |-- main.jsx
    |-- .env.development
    |-- .env.production
    |-- .gitignore
    |-- CODEOWNERS
    |-- index.html
    |-- jsconfig.json
    |-- LICENSE
    |-- package.json
    |-- README.md
    |-- vite.config.js

- **public/:** This directory contains public assets and the HTML template used by the application.

- **src/:** This is the main source code directory where most of the application logic resides.

- **assets/:** This directory is meant for static assets such as images, fonts, or other media files.

- **components/:** Reusable React components that are used across multiple pages or features.

- **layout/:** Components or styles related to the overall layout or structure of the application.

- **pages/:** Individual React components that represent different pages or views of the application.

- **routers/:** Components or configurations related to the routing of the application.

- **services/:** Logic for interacting with external services, APIs, or data fetching.

- **utils/:** Utility functions or helper modules used throughout the application.

- **App.jsx:** The main React component that serves as the entry point for the application.

- **index.css:** Global styles applied to the entire application.

- **main.jsx:** Entry point for the React application where the ReactDOM's render method is typically used.

- **.env.development:** Configuration file for development environment variables.

- **.env.production:** Configuration file for production environment variables.

- **.gitignore:** Specifies files and directories to be ignored by Git during version control.

- **CODEOWNERS:** A file that specifies individuals or teams responsible for code reviews in the repository.

- **index.html:** The main HTML file that serves as the entry point for the application.

- **jsconfig.json:** Configuration file for JavaScript projects, specifying project settings for tools like IntelliSense.

- **LICENSE:** The license file that specifies the terms under which the code is distributed.

- **package.json:** Manifest file for Node.js projects, containing metadata and dependencies.

- **README.md:** Documentation file providing information about the project, how to set it up, and other relevant details.

- **vite.config.js:** Configuration file for Vite, a build tool for modern web development.

## Dependencies

- React
- React Router
- Vite
- Axios
- Mantine UI

...
Check the package.json file for a complete list of dependencies.

## URL

[https://crypto-converter-nu.vercel.app/](https://crypto-converter-nu.vercel.app/)

`NOTE`: _The backend of this web application is deployed at [render.com](https://render.com) using its free tier, which freezes the server if not used oftenly. So, initially the loader might be present at the screen for a longer time._
