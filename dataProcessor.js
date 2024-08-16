const csv = require("csvtojson");
const fs = require("fs");

const processData = async () => {
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
  fs.writeFileSync("cars.json", JSON.stringify(data));
};

processData();