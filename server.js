import express from "express";
import morgan from "morgan";
import cors from 'cors'
import { config } from "dotenv";
import router from "./Router/route.js";
import connect from "./database/conn.js";
const PORT = process.env.PORT || 8000


const app = express();

// app middlewares 
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json())
config()

// app.use(express.static(path.join(__dirname,'./clinent/build')))

// app.get('*',function(req,res){

//     res.sendFile(path.join(__dirname,'./clinent/build/index.html'))
// });

// port





app.use('/', router)




// ** start server only when we have valid coonection 
connect().then(()=>{

    try {
        app.listen(PORT, () => {

            console.log(`This App Is Running On ${PORT}`)
        })
    } catch (error) {
        
        console.log(error)
    }

}).catch((err)=>{

    console.log(err)
})



