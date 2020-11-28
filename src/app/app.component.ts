import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9crud';
  alluser: any;
  isedit=false;
  userObj={
    name:"",
    mobile:"",
    email:"",
    password:"",
    id:""
  }
  
  constructor(private commonService:CommonService){}
  ngOnInit(){
               this.getLatestUser()
  }
  adduser(formObj:any){
    console.log(formObj)
    this.commonService.createuser(formObj).subscribe(()=>{

          this.getLatestUser();

    })
  }
  getLatestUser() {
    this.commonService.getalluser().subscribe((Response: any)=>{
      this.alluser = Response
    })
  }
  deleteuser(user: any){
    this.commonService.deleteuser(user).subscribe((Response: any)=>{
      this.getLatestUser();
    })
  }
  edituser(user: any){
    this.isedit=true;
    this.userObj =user;
  }
  updateuser(){
    this.isedit= !this.isedit;
    this.commonService.updateuser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
}
