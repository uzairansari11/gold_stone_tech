const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const routes = {
    "/get": "http://localhost:3001",
    "/update": "http://localhost:3002",
    "/add": "http://localhost:3005",
    "/csv": "http://localhost:3003",

};

for (let route in routes) {
    const target = routes[route];
    app.use(route, createProxyMiddleware({ target }));
}

app.listen(8080, () => console.log("Server listening at port 8080"));
