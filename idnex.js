const express = require("express"); //Memanggi library express js
const bodyParser = require("body-parser"); //Memanggil Library body-parser
const cors = require("cors"); //Memanggil Library cors
const app = express();

app.use(bodyParser.json()); // penggunaan body-parser untuk ekstrak data request berformat JSON

app.use(bodyParser.urlencoded({ extended: true })); // penggunaan body-parser untuk ekstrak data request dari body
app.use(cors()); // penggunaan cors agar end point dapat diakses oleh cross platform

// endpoint "/test" dengan method GET
app.get("/test", (req, res) => {
  // req merupakan variabel yang berisi data request
  // res merupakan variabel yang berisi data response dari end-point
  // membuat objek yang berisi data yang akan dijadikan response
  let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode,
  };
  // memberikan response dengan format JSON yang berisi objek di atas
  res.json(response);
});

// menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("Server run on port 8000");
});
