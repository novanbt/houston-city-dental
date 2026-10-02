const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5500;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'audio/ogg',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=UTF-8'
};

const requestHandler = (req, res) => {
  const host = req.headers.host || 'localhost';
  const parsedUrl = new URL(req.url, `http://${host}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  if (!pathname || pathname === '/') {
    pathname = '/index.html';
  }

  // Attempt resolving from __dirname first, then process.cwd()
  let safePath = path.resolve(PUBLIC_DIR, '.' + pathname);
  if (!fs.existsSync(safePath)) {
    safePath = path.resolve(process.cwd(), '.' + pathname);
  }

  if (fs.existsSync(safePath) && fs.statSync(safePath).isDirectory()) {
    safePath = path.join(safePath, 'index.html');
  }

  fs.readFile(safePath, (readErr, content) => {
    if (readErr) {
      // Fallback: If not found, attempt serving index.html
      const fallbackIndex = path.resolve(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(fallbackIndex)) {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        return res.end(fs.readFileSync(fallbackIndex));
      }

      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      return res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body style="font-family:sans-serif;padding:40px;text-align:center;"><h2>404 - File Not Found</h2><p>${pathname}</p><a href="/">Return Home</a></body></html>`);
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(content);
  });
};

const server = http.createServer(requestHandler);

// Only listen when executed directly (not when required/imported as Vercel serverless function)
if (require.main === module || !process.env.VERCEL) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n========================================`);
    console.log(`  Local Development Server Running!`);
    console.log(`  Local URL:   http://localhost:${PORT}`);
    console.log(`========================================\n`);
  });
}

module.exports = requestHandler;
