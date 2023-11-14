import express from 'express'
import bodyParser from 'body-parser'
import IndexController from './routes/index'
import ActivityController from './routes/activity'
import UserController from './routes/user'
import 'dotenv/config'

const app = express()
const { PORT } = process.env

// Middlewares
app.use(bodyParser.json())

// Routes
app.get('/', IndexController.getIndex)
app.get('/activity', ActivityController.getActivity)
app.post('/user', UserController.createUser)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
