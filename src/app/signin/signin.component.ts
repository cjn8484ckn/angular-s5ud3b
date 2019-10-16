import { Component, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})

export class SigninComponent {
  ok_user=false;
  ok_psd=false;
  ok_psdex=false;
  ok_phone=false;
  ok_mes=false;
  initialise(){
     this.ok_user=false;
    this.ok_psd=false;
    this.ok_psdex=false;
    this.ok_phone=false;
    this.ok_mes=false;
  }
  clear_error(){
     if (this.ok_user==false)  {document.getElementById("user_text").value=""};
     if (this.ok_psd==false)  {document.getElementById("psd_text").value=""};
     if (this.ok_psdex==false)  {document.getElementById("psdex_text").value=""};
  }
  datasetin(){
  
   var fso, ts, s ; 
var ForReading = 1; 

fso = new ActiveXObject("Scripting.FileSystemObject"); 
ts = fso.OpenTextFile("./data_set.txt", ForReading); 
s = ts.ReadLine(); 
document.getElementById("aa").innerHTML=s; 
  
  }
  click_register(): void {
  if (this.examine_user()&& this.examine_psd() && this.examine_psdex()  )
    {  //alert("注册成功");
       this.datasetin();
    } 
  else {alert("注册失败");
        this.clear_error();
       }
      this.initialise();
  }
  examine_user():boolean{
   var value=document.getElementById("user_text").value;
   var num_word = /[0-9a-z]/i; //true,说明有英文字母或数字
   if (value.length>=3 && value.length<=10 && num_word.test(value))
     {this.ok_user=true;
      document.getElementById("user_warning").hidden=true;
      return true;
     }
   else 
     {
      document.getElementById("user_warning").hidden=false;
      return false;
     }
  }
  examine_psd():boolean{
   var value=document.getElementById("psd_text").value;
   var num_word = /[0-9a-z]/i; //true,说明有英文字母或数字
   if (value.length>=6 && value.length<=18 && num_word.test(value))
     {this.ok_psd=true;
      document.getElementById("psd_warning").hidden=true;
      return true;
     }
   else 
     {
      document.getElementById("psd_warning").hidden=false;
      return false;
     }
     
  }
  examine_psdex():boolean{
    var value1=document.getElementById("psdex_text").value;
    var value2=document.getElementById("psd_text").value;
   var num_word = /[0-9a-z]/i; //true,说明有英文字母或数字
   if (value1==value2)
     {this.ok_psdex=true;
      document.getElementById("psdex_warning").hidden=true;
      return true;
     }
   else 
     {
      document.getElementById("psdex_warning").hidden=false;
      return false;
     }
  }
  examine_phone():void{
     var phone_text=document.getElementById("phone_text");
     var value=phone_text.getAttribute("value");
     //alert(value);
     var num_word = /[0-9a-z]/i; //true,说明有英文字母或数字
     if (value.length!=11 && num_word.test(value))
     {this.ok_phone=true;
      document.getElementById("phone_warning").hidden=true;
     }
     else 
     {
      document.getElementById("phone_warning").hidden=false;
     }
  }
  examine_mes():void{
    
  }


}
