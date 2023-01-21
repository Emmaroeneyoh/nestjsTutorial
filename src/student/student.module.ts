import { Module } from '@nestjs/common';
import { studentController  } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './schema/student.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'student', schema: studentSchema }])],
  controllers: [studentController],
  providers: [StudentService],
})
export class StudentModule {}
