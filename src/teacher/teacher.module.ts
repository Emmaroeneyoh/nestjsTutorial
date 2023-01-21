import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { teacherSchema } from './schema/teacher.schema';
import { teacherController } from 'src/teacher/teacher.controoler';
import { TeacherService } from './teacher.service';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'teacher', schema: teacherSchema }]),
    DynamooseModule.forFeature([{ name: 'teacher', schema: teacherSchema }]),
  ],

  controllers: [teacherController],
  providers: [TeacherService],
})
export class teacherModule {}
