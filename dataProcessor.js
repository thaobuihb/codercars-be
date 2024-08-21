const csv = require("csvtojson");
require("dotenv").config()
// const fs = require("fs");
const Car = require("./models/Car")
const mongoose = require("mongoose")

const processData = async () => {
  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));
  let data = await csv().fromFile("data.csv");
  data = data.map((item) => ({
    make: item["Make"],
    model: item["Model"],
    release_date: item["Year"],
    transmission_type: item["Transmission Type"],
    size: item["Vehicle Size"],
    style: item["Vehicle Style"],
    price: item["MSRP"],
    isDeleted: false,
  }));
  await Car.create(data)
};

processData();