const express = require("express");
const PORT = 8000;

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const routes = {
    "/get": "http://localhost:3001",
    "/update": "http://localhost:3002",
};

for (route in routes) {
    const target = routes[route];
    app.use(route, createProxyMiddleware({ target }));
}

app.listen(PORT, () => console.log(`get listening at port ${PORT}`));