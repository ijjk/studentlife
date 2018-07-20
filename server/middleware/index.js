module.exports = function() {
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  const app = this // eslint-disable-line no-unused-vars

  // setup uploads folder
  const express = require('@feathersjs/express')
  const uploadsDir = app.settings.upload.path

  app.use('/uploads', express.static(uploadsDir))

  // below setup requires authentication to access uploads directory
  // const auth = require('feathers-authentication');
  // app.use('/uploads', (req, res, next) => {

  //   auth.express.authenticate('jwt')(req, res, (data) => {
  //     if(data && data.code === 401) {
  //       res.status(401);
  //       res.send(data.name);
  //       return;
  //     }
  //     next();
  //   });

  // }, express.static(uploadsDir));
}
