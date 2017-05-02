module.exports = {
  database: 'mongodb://root:Supp0rt@ds147900.mlab.com:47900/ecommerce',
  port: 3000,
  secretKey: 'AbC$%^$87',

  facebook: {
    clientID: process.env.FACEBOOK_ID || '1234846026612620',
    clientSecret: process.env.FACEBOOK_SECRET || '79bc108915552b75f99f3af82858e54a',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  }
}