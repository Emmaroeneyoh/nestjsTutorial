import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { students } from 'src/db';
import { createStudentDto, findStudentDto , updateStudentDto } from 'src/dto/student.dto';

@Injectable()
export class StudentService {

    constructor(@InjectModel('student') private model:Model<createStudentDto> )  { }
    

   async getstudents() : Promise<findStudentDto[]>  {
      return await this.model.find()
    }
  async  getstudentbyid(id) : Promise<findStudentDto> {
     return  await this.model.findById(id)
    }
  async  createstudent(payload): Promise<findStudentDto> {
      const newstudent = await new this.model({
          student : payload.student,
          teacher:payload.teacher
      })
      console.log( 'this is new student' , newstudent)
      await newstudent.save()
        return 
    }
    // updatestudent(id: string, payload: updateStudentDto): findStudentDto {
    //     let editstudent = this.students.map(e => {
    //         if (e.id === id) {
               
    //        }
    //    })
    // }
}
