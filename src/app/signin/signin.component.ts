import { Component, Input } from '@angular/core';

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
  click_register(): void {
  if (this.ok_user==true &&this.ok_phone && this.ok_psd && this.ok_psdex && this.ok_mes )
    {  alert("注册成功");
    } 
    alert("注册成功");
       
  }

  examine_user():void{
   var user_text=document.getElementById("user_text");
   var value=user_text.getAttribute("value");
   //alert(value);
  
   var num_word = /[0-9a-z]/i; //true,说明有英文字母或数字
   if (value.length>=3 && value.length<=10 && num_word.test(value))
     {this.ok_user=true;
      document.getElementById("user_warning").hidden=true;
     }
   else 
     {
      document.getElementById("user_warning").hidden=false;
     }
  }
  examine_psd():void{
   var psd_text=document.getElementById("psd_text");
   var value=psd_text.getAttribute("value");
   //alert(value);
   var num_word = /[0-9a-z]/i; //true,说明有英文字母或数字
   if (value.length>=6 && value.length<=18 && num_word.test(value))
     {this.ok_psd=true;
      document.getElementById("psd_warning").hidden=true;
     }
   else 
     {
      document.getElementById("psd_warning").hidden=false;
     }
     
  }
  examine_psdex():void{
    var psdex_text=document.getElementById("psdex_text");
    var psd_text=document.getElementById("psd_text");
   var value1=psdex_text.getAttribute("value");
   var value2=psd_text.getAttribute("value");
   //alert(value);
   var num_word = /[0-9a-z]/i; //true,说明有英文字母或数字
   if (value1==value2)
     {this.ok_psdex=true;
      document.getElementById("psdex_warning").hidden=true;
     }
   else 
     {
      document.getElementById("psdex_warning").hidden=false;
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
