import * as mongoose from "mongoose";


export const studentSchema = new mongoose.Schema({
    student: String,
    teacher: String,
  
  });