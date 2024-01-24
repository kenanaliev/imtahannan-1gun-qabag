import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
const port = 7000

app.use(cors())
app.use(express.json())

mongoose
.connect("mongodb+srv://kenan:kenan321@cluster0.idnl8ul.mongodb.net/")
.then(console.log("db connected"))
.catch(()=>console.log(err))

const {Schema}=mongoose
const productSchema=new Schema({
    title:String,
    image:String,
    price:Number,
})

const product=mongoose.model("Product",productSchema);


app.get('/',async (req, res) => {
  try {
    const findProduct=await product.find({})
     res.send(findProduct)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

app.get('/:id',async (req, res) => {
    try {
      const findProduct=await product.findById(req.params.id)
       res.send(findProduct)
    } catch (error) {
      res.status(500).json(error.message)
    }
  })

  app.delete('/:id',async (req, res) => {
    try {
      const findProduct=await product.findByIdAndDelete(req.params.id)
       res.send(findProduct)
    } catch (error) {
      res.status(500).json(error.message)
    }
  })

  app.post('/',async (req, res) => {
    try {
      const newProduct=new product(req.body)
       await newProduct.save()
       res.send(newProduct)
    } catch (error) {
      res.status(500).json(error.message)
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})