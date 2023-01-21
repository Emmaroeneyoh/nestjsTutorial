import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common'

import {createStudentDto , updateStudentDto , findStudentDto} from '../dto/student.dto'
import { StudentService } from './student.service'




@Controller('student')
export class studentController {
    
    constructor(private readonly studentService:StudentService) {
        
    }
   @Get()
   async getStudents() : Promise<findStudentDto[]> {
        return this.studentService.getstudents()
    }

    
   @Get('/:id')
 async  getStudent(@Param('id') id: string) :Promise<findStudentDto> {
       console.log(id)
       return this.studentService.getstudentbyid(id)
    }

    
   @Post()
  async craeteStudent(@Body() body: createStudentDto) : Promise<findStudentDto> {
       console.log(body)
       return this.studentService.createstudent(body)
    }
    
    
   @Put('/:id')
    updateStudent(@Body() body:updateStudentDto)  {
        return 'edit student'
    }
    
}