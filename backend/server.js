import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config() //dotenv configuration 

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send("API is running") //Route Request for the backend 
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode port ${PORT}`.yellow.bold))
