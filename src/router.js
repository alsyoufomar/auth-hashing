const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
const key = '87764d1a-92dc-4ced-a758-9c898c31d525'
const saltRounds = 10;

router.post('/register', async (req, res) => {
  let { username, password } = req.body
  bcrypt.hash(password, saltRounds, async function (err, hash) {
    password = hash
    const createdUser = await prisma.user.create({
      data: { username, password }
    })
    res.json({ data: createdUser });
  });

});

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await prisma.user.findUnique({ where: { username } })
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      console.log('maaaatch')
      const token = jwt.sign(username, key);
      res.json({ token });
    }
    else {
      console.log('Wrong Password!!')
      res.status(404)
      res.json({ error: 'Wrong Password!!' })
    }
  }
  else {
    res.status(404)
    res.json({ error: 'User Not Found' })
  }
});

module.exports = router;

