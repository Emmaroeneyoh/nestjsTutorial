import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { fileURLToPath } from 'url';
import { createchatdto } from './dto';

@Injectable()
export class chatService {
    constructor(@InjectModel('message') private model: Model<createchatdto>) { }
    
    async getTeacher() : Promise<createchatdto[]> {
        return await this.model.find()
    }

    async getTeacherbyid(id): Promise<createchatdto>  {
        return await this.model.findById(id)
    }
  
    async createChat(file, type:string): Promise<any>  {
        const newteacher = await new this.model({
            chat: file,
            type
        })
        console.log(newteacher)
        const savedchat = await newteacher.save()
        console.log(savedchat)
        return savedchat
    }


}
