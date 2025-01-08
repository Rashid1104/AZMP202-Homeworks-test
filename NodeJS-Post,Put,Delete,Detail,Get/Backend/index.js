const express = require('express')
const app = express()
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const port = 8080

app.use(cors());
app.use(express.json());

const fakeApiData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing"
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing"
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son on this Thanksgiving or Christmas Day.",
    category: "men's clothing"
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person; therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing"
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery"
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery"
  }
];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/fakeApiData", (req, res) => {
  if (fakeApiData.length > 0) {
    res.status(200).send({
      fakeApiData: fakeApiData,
    });
  } else {
    res.status(204).send({
      fakeApiData: [],
    });
  }
});
app.get("/fakeApiData/:id", (req,res) =>{
  const {id} = req.params;

  const fakeApiData = fakeApiData.findIndex((p)=> p.id === +id)

  if (fakeApiData !== undefined) {
    res.status(200).send({
      fakeApiData: fakeApiData,
     message: "this is fake Api Data!!!"
    })
  }else{
    res.status(404).send({
      message: "no have this fake Api Data"
    })
  }
})
app.delete("/fakeApiData/:id", (req,res) =>{
  const {id} = req.params;

  const index = fakeApiData.findIndex((p)=> p.id === +id || p.id === id)

  if (index === -1) {
    res.status(404).send({
      message: "no have this fake Api Data"
    })
  }else{
  const del = fakeApiData.splice(index, 1);
  res.status(200).send({
    DelData: del,
    fakeApiData: fakeApiData,
    message: "deleted!!!"
  })
  }
})

app.post("/fakeApiData", (req,res)=>{
 const {description, title,category,price} = req.body;

 const NewfakeApiData = {
  id: uuidv4(),
  title,
  category,
  description,
 price,
 }

 fakeApiData.push(NewfakeApiData)

})

app.put("/fakeApiData/:id", (req,res)=>{
  const { id } = req.params;
  const {description, title,category,price} = req.body;
 
  const index = data.findIndex((p) => p.id === +id);

  if (index !== -1) {
    const UpdatedfakeApiData = {
      id: +id,
      title,
      category,
      description,
     price, 
    };
    fakeApiData[index] = UpdatedfakeApiData;

    res.status(200).send({
      message: "updated!",
      UpdatedfakeApiData,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
 
 })
 app.get("/fakeApiData/details/:id",(req,res)=>{
  const {id} = req.params;

  const FAD = fakeApiData.find((p) => p.id === +id)

  if (FAD) {
    res.status(200).send({
      FAD,
      message: "Product details retrieved successfully!"
    })
  }else{
    res.status(404).send({
      message: "Error for this data!!!"
    })
  }
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})