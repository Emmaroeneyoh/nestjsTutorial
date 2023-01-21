import { Controller, Get, Post, Put, Delete , Body, Param, UseInterceptors, UploadedFile, ConsoleLogger} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";

import { findTeacherdto, createTeacherdto } from '../dto/teacher.dto'
import { User } from "./schema/teacher.schema";
import { TeacherService } from "./teacher.service";


@Controller('teacher')
export class teacherController {
 
   constructor(private readonly teacherservice: TeacherService) {
      
   }
    @Get()
  async  getTeachers() : Promise<findTeacherdto[]> {
       return this.teacherservice.getTeacher()
    }
    
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File,) {
      console.log('user adding')
      if (file.mimetype.includes('image') || file.mimetype.includes('aplication')) {
        console.log(file);
      } else {
        console.log('not good')
      }
    
    }

    @Get('/:id')
   async getTeacher(@Param('id') id:string) :Promise<findTeacherdto>  {
       return this.teacherservice.getTeacherbyid(id)
   }
    

    @Post()
  async  createTeacher(@Body() body:User) : Promise<findTeacherdto>  {
       return this.teacherservice.createTeacher(body)
   }
    

    @Put('/:id')
    editTeacher(){
       return 'edit teachers'
   }

    
}