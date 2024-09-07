const { createServer } = require('http');
const fs = require('fs').promises;
const path = require('path');

async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    throw new Error(`Error reading the file: ${err.message}`);
  }
}

const hostname = '127.0.0.1';
const port = 3000;

// Construct the absolute path to the index.html file
const filePath = path.join(__dirname, '..', 'public', 'index.html');

const server = createServer(async (req, res) => {
  try {
    const content = await readFileContent(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Server error: ${err.message}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
