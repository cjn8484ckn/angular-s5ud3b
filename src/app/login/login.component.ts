import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {
    ok_user=false;
    ok_psd=false;
    a={'1':1,'2':2,'3':3};
   initialise():void{
     this.ok_user=false;
    this.ok_psd=false;
    document.getElementById("warning_user").hidden=true;
    document.getElementById("warning_psd").hidden=true;
  }
   login():void{
        if(this.user_ex()&&this.psd_ex())
        {
          alert("登陆成功");
        }
        else{
          alert("登陆失败");
          this.clear_error();
        }
   }
   read_data_set():voi{

   }
   clear_error(){
     if (this.ok_user==false)  {document.getElementById("account").value=""};
     if (this.ok_psd==false)  {document.getElementById("myPassword").value=""};
    
  }
   user_ex():Boolean{
     var value=document.getElementById("account").value;
     if (!!this.a[value])
        { document.getElementById("warning_user").hidden=true;
          this.ok_user=true;
          return true;
        }
     else {this.ok_user=false;
            document.getElementById("warning_user").hidden=false;
           } 
   }
   psd_ex():Boolean{
     var key=document.getElementById("account").value;
     var value=document.getElementById("myPassword").value;
      if (value==this.a[key])  
       { document.getElementById("warning_psd").hidden=true;
          this.ok_psd=true;
         return true;
         }
      else {this.ok_psd=false;
            document.getElementById("warning_psd").hidden=false;
           }
   }
}
