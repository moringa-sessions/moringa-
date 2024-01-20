const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Specify the base path for your API requests
    createProxyMiddleware({
      target: 'https://test-8j8s.onrender.com', // Specify the URL of your Flask app on Render
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix when forwarding requests
      },
    })
  );
};
