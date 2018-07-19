// 这里是kget
import { Component, OnInit } from '@angular/core';
import { UploaderService } from './uploader.service';

import * as $ from "jquery";

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
  providers: [ UploaderService ]
})
export class AlarmComponent implements OnInit {
  read(){
    $.ajax({
    type: "GET",
    url: "../assets/demo.txt",
    dataType: "text",
    success: function (data) {
        $("#mySavedModel").append(data);
      }  
    });
     }
  
  // showKget = false;
   
  // showpicture(){
  //   this.showKget= !this.showKget;
  // }
  message: string;

  constructor(private uploaderService: UploaderService) {}
  
  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
    // var splitline='';S
    var riLinkId = new Array();
    var riPortRef1 = new Array();
    var riPortRef2 = new Array();
    

    var reader:any,
    target:EventTarget;
    reader = new FileReader();//新建一个FileReader
    reader.readAsText(file, "UTF-8");//读取文件 
    reader.onload = function(evt:any){ //读取完文件之后会回来这里
        var list = reader.result.split("\n");
        for(var i=0;i<list.length-1;i++){
          // 放在三个数组里面 进行操作
          if(list[i].indexOf("riLinkId")==0){
                alert(list[i]);
              riLinkId.push(list[i]);
                 alert(riLinkId);
                }
          if(list[i].indexOf("riPortRef1")==0){
                alert(list[i]);
            riPortRef1.push(list[i]);
                 alert(riPortRef1);
                }
          if(list[i].indexOf("riPortRef2")==0){
                alert(list[i]);
           riPortRef2.push(list[i]);
                alert(riPortRef2);
              }
           
            //  for(var j=i;i<j+3;j++){
            //   if(list[j].indexOf("riPortRef1")==0){
            //     alert(list[j]);}
            //    if(list[j].indexOf("riPortRef2")==0){
            //       alert(list[j]);
            //     }
            //   i=j;
           }
         //}
       // }
        // list[0] = splitline + list[0];
        // var fileString = evt.target.result; // 文件的内容 在这个地方进行处理。
        // var str ='<p>'+fileString+'</p>';
        // $('#test').append(str);
      
  }
}


  
  ngOnInit(){}  
}