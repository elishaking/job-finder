const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    proxy({
      target: "http://localhost:8000",
      changeOrigin: true
    })
  );

  app.use(
    '/positions.json',
    proxy({
      target: "https://jobs.github.com",
      changeOrigin: true
    })
  );
};