const express = require('express')
const cors = require('cors')
const port = 3002
const app = express()

const user = { id: 1, name: 'Faham', email: 'faham@mail.com', token: 'sadhjklasdflkjasdfhlkjasdfkj' }


app.use(cors())
app.use(express.json())
app.post('/login', (req, res) => {
  console.log(req);
  if (req.body.email === user.email && req.body.password === '12345') {
    res.send(user)
  }
  res.send(401)
})

app.listen(port)
