// import * as mongoose from "mongoose";


// export const teacherSchema = new mongoose.Schema({
    
//     name: String,
  
//   });
import { Schema } from 'dynamoose';

export const teacherSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
 
});
export interface UserKey {
  id: string;
}

export interface User extends UserKey {
  title: string;
  body: string;

}