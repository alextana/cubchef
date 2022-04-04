import express from 'express'
import cors from 'cors'
import userRoute from './users/User.js'
import loginRoute from './login/Login.js'
import registerRoute from './register/Register.js'

const app = express()
app.use(cors())
app.use(express.json());

app.use('/users', userRoute)
app.use('/login', loginRoute)
app.use('/register', registerRoute)

const PORT = process.env.PORT || 5001
app.listen(PORT)
console.log(`Listening on http://localhost:${PORT}`)

