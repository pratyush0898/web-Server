# Web Server

A simple and lightweight web server created using JavaScript, designed to serve static files efficiently and handle HTTP requests. Perfect for small-scale web projects and quick development tasks.

## Features

- **Serve Static Files:** Easily serve HTML, CSS, JavaScript, images, and more.
- **Simple Setup:** Minimal configuration is required to get started.
- **Efficient and Fast:** Lightweight server built using Node.js.

## File Structure

```plaintext
│   .gitattributes
│   .gitignore
│   LICENSE
│   package-lock.json
│   package.json
│   README.md
│
├───public
│       favicon.svg
│       index.html
│
├───server
│       server.js
│
└───src
    │   index.css
    │   index.js
    │
    ├───js
    │       css.js
    │       main.js
    │
    └───style
            style.css
```

- **public:** Contains static files like the main `index.html` and `favicon.svg`.
- **server:** Includes the core server logic (`server.js`).
- **src:** Contains the source code for JavaScript and styles.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd web-server
   ```

3. **Install Dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

4. **Start the Web Server:**
   ```bash
   node server/server.js
   ```

5. **Access the Web Server:**
   - Open your web browser and go to `http://localhost:3000` to view the web server.

## Usage

- Place any additional static files (HTML, CSS, JS, images, etc.) in the `public` directory.
- Modify `server.js` to adjust server settings as needed.

## Contributing

Feel free to contribute by forking the repository, making changes, and submitting a pull request.

## License

This project is licensed under the Apache 2.0 License.
