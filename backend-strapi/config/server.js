// module.exports = ({ env }) => ({
//   host: env('APP_HOST', '0.0.0.0'),
//   port: env.int('NODE_PORT', 1337),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', '83c53a97d7567df38d9e40c4fb4fb4b2'),
//     },
//   },
// });

module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env.int('NODE_PORT', 1337),
});
