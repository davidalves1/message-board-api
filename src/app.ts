import 'dotenv/config'
import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'OK' })
})

app.use(router)

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () => console.log(`🔥 Listening on :::${PORT} 🔥`))
