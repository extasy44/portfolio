const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

//Middleware
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: "https://dev-73jiw0ep.au.auth0.com/.well-known/jwks.json",
  }),
  audience: "SvRMPhxwYI9I3GpzapVK5RAsGsgeAXIG",
  issuer: "https://dev-73jiw0ep.au.auth0.com/",
  algorithms: ["RS256"],
})

exports.checkRole = role => (req, res, next) => {
    const user = req.user;
   console.log("owenr : ", user[namespace + "role"][0]);

    if(user && user[namespace + 'role'][0] === role ){
     
      next();
    }else {
      return res.status(401).send({title : 'not authorized', detail: 'You are not authorized to access this data'});
    }
  }