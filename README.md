# Webpack and Babel Boilerplate

This is a boilerplate template for setting up a single-page application (SPA) using Webpack 5 and Babel. It provides a basic structure and configuration to get you started quickly with modern JavaScript development, including support for ES6+ features and CSS handling.

## Features

- **Webpack 5**: Module bundler for modern JavaScript applications.
- **Babel**: JavaScript compiler to use the latest JavaScript features.
- **HTML Webpack Plugin**: Simplifies creation of HTML files to serve your bundles.
- **Webpack Dev Server**: Provides a development server with live reloading.
- **CSS Handling**: Supports importing CSS files in JavaScript modules.
- **Environment-Specific Configurations**: Separate configurations for development and production environments.

## Project Structure

```
wp5-boilerplate/
├── dist/                   # Output directory for bundled files
├── src/                    # Source directory
│   ├── index.js            # Entry point for the application
│   └── index.html          # HTML template
├── .babelrc                # Babel configuration
├── package.json            # Project metadata and dependencies
├── webpack.common.js       # Common Webpack configuration
├── webpack.dev.js          # Development-specific Webpack configuration
└── webpack.prod.js         # Production-specific Webpack configuration
```

## Getting Started

Follow these steps to set up and use the boilerplate:

### 1. Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

### 2. Installation

1. Clone the repository or download the zip file and extract it.
2. Navigate to the project directory:
   ```sh
   cd wp5-boilerplate
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### 3. Development

To start the development server with live reloading:
```sh
npm start
```

The application will be available at `http://localhost:8080`. The Webpack Dev Server will automatically reload the page when you make changes to the source files.

### 4. Production

To build the project for production:
```sh
npm run build
```

The bundled files will be generated in the `dist` directory. These files are optimized for production and ready to be deployed.

## Customization

### Babel Configuration

The Babel configuration is defined in the `.babelrc` file. It currently uses the `@babel/preset-env` preset to compile modern JavaScript features.

### Webpack Configuration

The Webpack configuration is split into three files:
- `webpack.common.js`: Contains the common configuration shared between development and production.
- `webpack.dev.js`: Contains the configuration specific to the development environment.
- `webpack.prod.js`: Contains the configuration specific to the production environment.

You can modify these files to add more loaders and plugins as needed.

## Contributing

If you have suggestions for improvements or encounter any issues, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License.

---

This README provides an overview of the boilerplate, explains its purpose, and gives detailed instructions on how to set up and use it.