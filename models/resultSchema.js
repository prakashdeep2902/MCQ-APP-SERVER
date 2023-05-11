
import mongoose from "mongoose";
const {Schema}=mongoose;

// **********questions models

const resultModel=new Schema({

    username:{type:String},
    result:{type:Array,default:[]},
    attempts:{type:Number,default:0},
    points:{type:Number,default:0},
    achived:{type:String,default:''},
    createdAt:{type:Date,default:Date.now},
    
})

export const results=mongoose.model('result',resultModel);