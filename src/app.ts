import express from 'express';
import routes from './routes/routes';
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => {
    console.log(`Server at port ${PORT}`)
})
app.use(cors())
app.use(express.json())
app.use('/api', routes)


