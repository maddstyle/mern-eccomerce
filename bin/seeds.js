const mongoose = require('mongoose');
const Product = require('../models/product');
 
// const DB_NAME = 'ecommerce';

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const products = [
  {
    name: "Rolex Daytona",
    description: "18kt Yellow Gold Rolex Daytona 40mm case. Automatic Chronograph",
    price: 48.000,
    category: "",
    quantity: 4,
    sold: 1,
    shipping: false,
    photo: "https://cdn.shopify.com/s/files/1/1889/5061/products/Rolex-Cosmograph-Daytona-116508-10-10-ROL-UNQBVM-09d77ec9849b_ab707474-fde7-44f9-a6dd-d08edcbc00b1_1024x1024@2x.jpg?v=1579882456"
  },
  {
    name: "Rolex Submariner Hulk",
    description: "Rolex Ceramic Stainless Steel Submariner Green Hulk",
    price: 13.600,
    category: "",
    quantity: 10,
    sold: 4,
    shipping: true,
    picture: "https://cdn.swisswatchexpo.com/productphotos/40/22876/rolex-submariner-hulk-green-dial-bezel-steel-mens-watch-116610lv-259310_b.jpg"
  },
  {
    name: "Audemars Piguet Royal Oak Chronograph",
    description: "self-winding automatic watch, features a 41mm stainless steel case surrounding a black Grande Tapisserie dial on a stainless steel bracelet with folding buckle",
    price: 27.900,
    category: "",
    quantity: 3,
    sold: 1,
    shipping: false,
    picture: "https://cdn.shopify.com/s/files/1/0059/6207/2111/products/0E8A1572_2000x.jpg?v=1581365755"
  },
  {
    name: "TAG HEUER Aquaracer",
    description: "Blue Dial Blue Bezel Sports Watch in stainless steel",
    price: 1.750,
    category: "",
    quantity: 20,
    sold: 9,
    shipping: false,
    picture: "https://media-jrdunnjewelers.netdna-ssl.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/a/xway101c-ba0746.jpg.pagespeed.ic.0NHW1xd9lJ.webp"
  },
  {
    name: "Breitling Superocean",
    description: "The SuperOcean defines the classic dive watch. Stainless steel.",
    price: 3.000,
    category: "",
    quantity: 35,
    sold: 20,
    shipping: true,
    picture: "https://www.prestigetime.com/images/watches/a17366021b1a1-%20Superocean.jpg"
  },
  {
    name: "Cartier Roadster",
    description: "Automatic Self Wind Watch Rose Gold Brown 43 MM",
    price: 20.000,
    category: "",
    quantity: 5,
    sold: 1,
    shipping: true,
    picture: "https://a.1stdibscdn.com/cartier-roadster-w6206001-brown-dial-certified-and-warranty-for-sale/1121189/j_92181721586507175419/9218172_master.jpg?disable=upscale&auto=webp&quality=60&width=960"
  },
  {
    name: "Rolex Perpetual",
    description: "Rolex Oyster Perpetual Date 34 Black Dial. Stainless steel",
    price: 7.000,
    category: "",
    quantity: 8,
    sold: 3,
    shipping: true,
    picture: "https://s.yimg.com/aah/movadobaby/rolex-perpetual-34mm-fluted-bezel-115234-396.jpg"
  },
  {
   name: "Patek Philippe Nautilus",
    description: "Rounded octagonal shape of its bezel, the ingenious porthole construction of its case, and its horizontally embossed dial",
    price: 77.000,
    category: "",
    quantity: 1,
    sold: 0,
    shipping: false,
    description: "Rounded octagonal shape of its bezel, the ingenious porthole construction of its case, and its horizontally embossed dial",
    picture: "https://cdn.shopify.com/s/files/1/1889/5061/products/Rolex-Cosmograph-Daytona-116508-10-10-ROL-UNQBVM-09d77ec9849b_ab707474-fde7-44f9-a6dd-d08edcbc00b1_1024x1024@2x.jpg?v=1579882456"
  },

];

Product.create(products, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${products.length} watches`);
  mongoose.connection.close();
});

// mongodb://heroku_pswf3s11:oktptdve36r6onrmekjhglni48@ds149268.mlab.com:49268/heroku_pswf3s11