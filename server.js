const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const httpProxy = require('http-proxy');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

const proxy = httpProxy.createProxyServer({
  target: 'https://api.asterarealestate.com',
  changeOrigin: true,
  secure: true,
});

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    // 👇 Proxy all /api requests
    if (req.url.startsWith('/api')) {
      proxy.web(req, res, {}, (err) => {
        console.error('Proxy error:', err);
        res.writeHead(500);
        res.end('Proxy error');
      });
      return;
    }

    // 👇 Everything else handled by Next.js
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
