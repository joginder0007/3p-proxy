const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', createProxyMiddleware({
    target: 'https://www.ubereats.com',
    changeOrigin: true,
    //logLevel: 'debug',
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});