const express = require("express");
const next = require("next");
const routes = require("../routes");

const authService = require("./services/auth");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();


const secretData = [
  {
    title: "SecretData 1",
    description: "Plans how to build spaceship",
  },
  {
    title: "SecretData 2",
    description: "My secret password",
  },
];

app.prepare().then(() => {
  const server = express();



  server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
    return res.json(secretData);
  });

  server.get("/api/v1/onlysiteowner", authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
    console.log(req.isAuthenticated);
    return res.json(secretData);
  });


  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized access'});
    }
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`> Ready on Port ${PORT}`);
  });
});
