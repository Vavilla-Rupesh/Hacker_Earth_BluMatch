import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import multer from "multer";
import cors from "cors";
import axios from "axios";
const app = express();
const port = 3000;
app.use(bodyParser.json());
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "hackerearth",
  password: "dbyeager123",
  port: 5432,
});
db.connect();

app.use(cors());
app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});
// app.get("/about", async (req,res) =>{

//    res.render("about")
// })

// app.get("/contact", async (req,res) =>
// {
//     res.render("contact")
// })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/businesscard", async (req, res) => {
  try {
    const data = await db.query(
      "SELECT * FROM business WHERE business_id = $1",
      [req.body.business_id]
    );
    const businesses = data.rows;
    var name = businesses[0].name;
    var location = businesses[0].location;
    var image = businesses[0].image;
    var qualityAssurance = businesses[0].qualityassurance;
    var contact = businesses[0].contact;
    res.json({ name, location, image, qualityAssurance, contact });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



app.post("/login", async (req, res) => {
  //const result = await axios.get("http://localhost:3000/login/",FormData)
  const result = req.body;
  console.log(result);
  try {
    const data = await db.query(
      "SELECT * FROM customers WHERE cust_name = $1",
      [result.username]
    );
    if (result.username !== data.rows[0].cust_name) {
      res.json({ message: "Invalid" });
    } else {
      //res.json({message:"Login Successfull"})
      if (result.password === data.rows[0].cust_password) {
        res.json({ message: true });
      } else {
        res.json({ message: false });
      }
    }
    console.log(data.rows);
    console.log(data.rows[0].cust_name);
  } catch (err) {
    console.log(err);
  }

  //res.json({message:"Login Successfull"})
});
// app.get("/signup", async (req,res) =>{
//     res.render("signup")
// })

// app.post("/signup", async (req, res) => {
//   const result = req.body;
//   console.log(result);
//   try {
//     const data = await db.query(
//       "SELECT * FROM customers WHERE cust_name = $1",
//       [result.username]
//     );
//     if (result.username === data.rows[0].cust_name) {
//       res.json({ message: "User already exists" });
//     } else {
//       if (result.role === "business") {
//         db.query(
//           "INSERT INTO business (email_id, pass_word) VALUES ($1, $2)",
//           [result.username, result.password]
//         );
//         res.json({ message: "Business Added" });
//       } else {
//         db.query(
//           "INSERT INTO customers (cust_name, cust_password) VALUES ($1, $2)",
//           [result.username, result.password]
//         );
//         res.json({ message: "User Added" });
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

app.post("/signup", async (req, res) => {
  const result = req.body;

  if (result.role === "business") {
    try {
      await db.query("INSERT INTO business (email_id, pass_word) VALUES ($1, $2)", [result.username, result.password]);
      res.json({ message: "Business Added" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    try {
      await db.query("INSERT INTO customers (cust_name, cust_password) VALUES ($1, $2)", [result.username, result.password]);
      res.json({ message: "User Added" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.get("/business-products/:business_id", async (req, res) => {
  try {
    const businessId = req.params.business_id;
    const data = await db.query( "SELECT * FROM products WHERE business_id = $1",[businessId]);
    const products = data.rows;
    console.log(products);
    res.json(products.map(product => ({
      image: product.image,          
      name: product.p_name,
      price: product.price,
      qualityAssurance: product.quality_points,
      header : true

    })));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/business-details", async(req, res) => {
 
const data = await db.query("SELECT * FROM business");
const businesses = data.rows;
console.log(businesses);
res.json(businesses.map(business => ({
 
  name: business.business_name,
  location: business.address,
  image: business.image,
  qualityAssurance: business.quality,
  contact: business.mail_id
})));



});


app.get("/product-details", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM products");
    const products = data.rows;
    console.log(products);
    res.json(products.map(product => ({
      image: product.image,
      name: product.p_name,
      price: product.price,
      qualityAssurance: product.quality_points
    })));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/business-dashboard", async (req, res) => {
 
  
});


app.post("/BusinessDescription", upload.single('image'), async (req, res) => {
  const image = req.file;
  const img = image.filename;
  const { name, location, qualityAssurance, contact} = req.body;

  try {
    const result = await db.query("SELECT * FROM business WHERE email_id = $1", [contact]);
    
    if (result.rows.length > 0) {
      await db.query(
        "UPDATE business SET business_name = $1, address = $2, image = $3, quality = $4 WHERE email_id = $5",
        [name, location, img, qualityAssurance,contact]
      );
      res.json({ message: "Business Updated!" });
    } else {
      res.json({ message: "wring email" });
    }
  } catch (err) {
    console.log(err);
 
  }
});

app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}/`);
});