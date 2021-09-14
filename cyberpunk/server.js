const express =require('express');
const mongoose =require('mongoose')
const bodyParser=require('body-parser');
const months = require('./models/months');
const cors = require('cors')


const app =express();

const monthsRoutes=require('./routes/months');

const waterbillsRoutes=require('./routes/waterbills');


const emailRoutes=require('./routes/email');

app.use(bodyParser.json());
app.use(cors());
app.use(monthsRoutes);
app.use(waterbillsRoutes);


app.use(emailRoutes);
app.use(bodyParser.urlencoded({extended:true}));
const PORT =8003;



const DB_URL=`mongodb+srv://cyberpunk:cyber123@cluster0.ewhgt.mongodb.net/cyberpunk?retryWrites=true&w=majority`;
mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
    
})
.catch((err)=>console.log('DB connection error',err))

app.listen(PORT,()=>{

    console.log(`App is runnning on ${PORT}`);
});





