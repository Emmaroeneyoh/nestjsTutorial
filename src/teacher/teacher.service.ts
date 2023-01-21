import { Injectable , InternalServerErrorException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { createTeacherdto, findTeacherdto } from 'src/dto/teacher.dto';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { User, UserKey } from './schema/teacher.schema';
import { v4 as uuid } from 'uuid';
import * as AWS from 'aws-sdk';


const dynamoDB = process.env.IS_OFFLINE
  ? new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: process.env.DYNAMODB_ENDPOINT,
    })
  : new AWS.DynamoDB.DocumentClient();

@Injectable()
export class TeacherService {
    constructor(@InjectModel('teacher') private model: Model<User , UserKey>) { }
    
    async getTeacher() : Promise<any> {
        try {
            return dynamoDB
              .scan({
                TableName: "BlogsTable",
              })
              .promise();
          } catch (e) {
            throw new InternalServerErrorException(e);
          }
    }

    async getTeacherbyid(id): Promise<any>  {
        try {
            return await dynamoDB
              .get({
                TableName: process.env.USERS_TABLE_NAME,
                Key: { id },
              })
              .promise();
          } catch (e) {
            throw new InternalServerErrorException(e);
          }
    }
  
    async createTeacher(blog: User): Promise<any>  {
        const blogObj = {
            id: uuid(),
            ...blog,
          };
          try {
            return await dynamoDB
              .put({
                TableName: "BlogsTable",
                Item: blogObj,
              })
              .promise();
          } catch (e) {
            throw new InternalServerErrorException(e);
          }
    }


}
