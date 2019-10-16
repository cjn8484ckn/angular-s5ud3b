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
  ok_email=false;
  ok_mes=false;

  initialise(){
     this.ok_user=false;
    this.ok_psd=false;
    this.ok_psdex=false;
    this.ok_email=false;
    this.ok_mes=false;
  }
  clear_error(){
     if (this.ok_user==false)  {document.getElementById("user_text").value=""};
     if (this.ok_psd==false)  {document.getElementById("psd_text").value=""};
     if (this.ok_psdex==false)  {document.getElementById("psdex_text").value=""};
     if (this.ok_email==false)  {document.getElementById("email_text").value=""};
  }
  datasetin(){
   var input  = document.getElementById("data_set"); //input file
   input.onchange = function(){
    var file = input.files[0];
    if(!!file){
        //读取本地文件，以gbk编码方式输出
        var reader = new FileReader();
        reader.readAsText(file,"utf-8");
        reader.onload = function(){
            //读取完毕后输出结果
            alert(this.result);
        }
    }
}
  }
  click_register(): void {
  if (this.examine_user()&& this.examine_psd() && this.examine_psdex() && this.examine_email() )
    {  alert("注册成功");
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
  examine_email():boolean{
     var value=document.getElementById("email_text").value;
     //alert(value);
    var email_form=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if (email_form.test(value))
     {this.ok_email=true;
      document.getElementById("email_warning").hidden=true;
      return true;
     }
     else 
     {
      document.getElementById("email_warning").hidden=false;
      return false;
     }
  }
  examine_mes():void{
    
  }


}
