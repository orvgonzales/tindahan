import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config() //dotenv configuration 

connectDB()

const app = express()

app.get('/', (req, res) =>{
    res.send("API is running") //Route Request for the backend 
})

app.get('/api/products', (req, res) =>{
    res.json(products)  //Route Request for the products.js (JSON)
})

app.get('/api/products/:id', (req, res) =>{
    const product = products.find((p) => p._id === req.params.id) //Route request for single product
    res.json(product)  
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode port ${PORT}`.yellow.bold))
