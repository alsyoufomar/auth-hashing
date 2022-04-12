# User Login

1. Implement the `/login` controller function in `src/router.js`.
   1. The route must accept a `username` and `password` in the request body.
   2. Get the user from the database, searching for it by username. If a user cannot be found, send an error message response.
   3. Compare the password provided in the request body to the password saved in the database for the user. If the passwords don't match, send an error message response.
   4. Create a JWT with the username as the payload, send this back in the response.

https://github.com/kelektiv/node.bcrypt.js#with-promises
