import { Request, Response } from 'express';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
  StreamableFile,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { chatService } from './chat.service';
import { CloudinaryService } from 'src/cloudinary/cloud.service';
import { createReadStream, readFileSync } from 'fs';
import { extname, join } from 'path';
import { diskStorage } from 'multer';

@Controller('chat')
export class chatController {
  constructor(
    private readonly teacherservice: chatService,
    private cloudinary: CloudinaryService,
  ) {}
  //     @Get()
  //   async  getTeachers() : Promise<findTeacherdto[]> {
  //        return this.teacherservice.getTeacher()
  //     }

  // //file upload
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Res() res: Response,
  // ): Promise<any> {
  //   let type;
  //   if (file.mimetype.includes('image')) {
  //     type = 'image';
  //   } else if (file.mimetype.includes('application')) {
  //     type = 'pdf';
  //   } else {
  //     return res.status(400).send('incorect file type');
  //   }
  //   console.log(file);
  //   const cloud = await this.cloudinary.uploadImage(file).catch((err) => {
  //     console.log;
  //     throw new BadRequestException('Invalid file type.');
  //   });
  //   console.log('this is cloudn ', cloud.secure_url);
  //   console.log('this is type', type);
  //   const msg = await this.teacherservice.createChat(cloud.secure_url, type);
  // }

  

  @Post('/text')
  async createTeacher(@Body('text') body: string): Promise<any> {
    let type = 'text';
    await this.teacherservice.createChat(body, type);
  }

  @Get()
  getFile(@Res() response: Response) {
    const file = readFileSync(
      join(process.cwd(), 'images/1668518964311-472755463.mp4'),
    );
    //   response.contentType('application/pdf'); for pdf
    response.contentType('video/mp4'); // for images
    response.attachment();
    // provide a filename
    // response.attachment('notiz.png');
    response.send(file);
  }
}
