const apiAuth = require('../../config/env/api.auth');

function AuthenticateApi(req, res, next) {
  switch (process.env.NODE_ENV) {

    case 'development':
      if (req.get('api-secret') && req.get('api-secret') === apiAuth.apiSecret) {
        next();
      } else if (!req.query['api-secret'] || req.query['api-secret'] !== apiAuth.apiSecret) {
        res.status(403).send('Not Authorized');
      } else {
        next();
      }

      break;

    default:
      if (!req.get('api-secret') || req.get('api-secret') !== apiAuth.apiSecret) {
        res.status(403).send('Not Authorized');
      } else {
        next();
      }

      break;
  }
}

export default AuthenticateApi;
