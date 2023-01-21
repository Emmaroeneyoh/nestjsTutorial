import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import { teacherController } from 'src/teacher/teacher.controoler';
import { teacherStudentController } from 'src/teacher/teacherStudent';
import { teacherModule } from 'src/teacher/teacher.module';
import { chatModule } from 'src/chat/chat.module';
import { CloudinaryModule } from 'src/cloudinary/cloud.module';
import { MulterModule } from '@nestjs/platform-express';
import { DynamooseModule } from 'nestjs-dynamoose';

let accesskey = 'AKIAUCOCVKCZAKCVVRPF'
let secretKey = '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'
let region = 'us-east-1'

@Module({
  imports: [StudentModule,
    MulterModule.register({dest:"./image"}),
    CloudinaryModule, chatModule,
    DynamooseModule.forRoot({aws: {
      accessKeyId: accesskey ,
      secretAccessKey: secretKey ,
      region
    }}),
    teacherModule, MongooseModule.forRoot('mongodb+srv://emmaro:1234@tutorial.klpqo.mongodb.net/reactblog?retryWrites=true&w=majority')],

  
})
export class AppModule {}
