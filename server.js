const app = require("./app");
const mongoose = require('mongoose');

const port = 8000;
mongoose.connect('mongodb://localhost:27017/bmerce',
{
 useNewUrlParser: true,
 useCreateIndex: true,
 useFindAndModify: false,
 useUnifiedTopology: true})
 .then(()=>console.log('DB connected successfully '))
 .catch((e)=>console.log(e));

app.listen(port, () => {

console.log(`App running on ${port}...`);

});