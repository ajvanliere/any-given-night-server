const { Router } = require('express');
const router = new Router();
const { toJWT } = require('./jwt');

router.post('./logins', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res.status(400).send({
      message: 'Please supply a valid email address!'
    })
  }
  else {
    // 1. find user based on email address
    // 2. use bcrypt.compareSync to check the password against the stored hash
    // 3. if the password is correct, return a JWT with the userId of the user (user.id)

    res.send({
      jwt: toJWT({ userId: 1 })
    })
  }
})

module.exports = router