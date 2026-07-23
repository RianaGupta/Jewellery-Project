// const mongoose = require("mongoose");

const { default: mongoose } = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/newDB");
}

main()
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({ name: "abc", email: "san@gmail.com", age: 20 });
user1.save()


// User.insertMany([
//     {

//     }, {

//     }, {

//     }
// ])