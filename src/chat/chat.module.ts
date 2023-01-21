import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CloudinaryModule } from 'src/cloudinary/cloud.module';
import { chatController } from './chat.controler';
import { chatSchema } from './chat.schema';
import { chatService } from './chat.service';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'message', schema: chatSchema }]), CloudinaryModule],
  controllers: [chatController],
  providers: [ chatService],
})
export class chatModule {}
