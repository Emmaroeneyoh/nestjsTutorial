import { Controller , Get, Post , Put, Delete} from "@nestjs/common";


@Controller('teacher/:id/student')
export class teacherStudentController {
   
    @Get()
    getTeacherforsteudent() {
       return 'single teachers for each student'
   }
    

    @Put('/:studentId')
    editTeacherStudent() {
       return 'edit teachers for student'
   }
    
    
}