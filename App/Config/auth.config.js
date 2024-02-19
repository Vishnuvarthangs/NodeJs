module.exports = {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accessTokenExpiration: '15m', // Example expiration period for access tokens
    refreshTokenExpiration: '1d'  // Example expiration period for refresh tokens

    // accessTokenExpiration: 3600,         // 1 hour
    // refreshTokenExpiration: 86400, // 24 hours

  /* for test */
//   accessTokenExpiration: 60,          // 1 minute
//   refreshTokenExpiration: 120,  // 2 minutes
};
