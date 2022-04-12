# User Registration

1. Implement the `/register` controller function in `src/router.js`.
   1. The route must accept a `username` and `password` in the request body.
   2. The password must be hashed.
   3. The user must be created with the hashed password.
   4. The route must send back the created user, including its hashed password, in the response. _(This is purely for checking your work, don't do this in the real world!)_

https://github.com/kelektiv/node.bcrypt.js#with-promises
