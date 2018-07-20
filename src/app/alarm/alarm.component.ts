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
  // read(){
  //   $.ajax({
  //   type: "GET",
  //   url: "../assets/demo.txt",
  //   dataType: "text",
  //   success: function (data) {
  //       $("#mySavedModel").append(data);
  //     }  
  //   });
  //    }
  
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
    var f1unit = new Array();
    var f1port = new Array();
    var f2unit = new Array();
    var f2port = new Array();
    var key = new Array();
    // var tpye = new Array();
    var name = new Array();

    var reader:any,
    target:EventTarget;
    reader = new FileReader();        //新建一个FileReader
    reader.readAsText(file, "UTF-8");      //读取文件 
    reader.onload = function(evt:any){         //读取完文件之后会回来这里
      // 获取 linkid f1unit f1port f2unit  f2port
        var list = reader.result.split("\n");
           for(var i=0;i<list.length-1;i++){
          if(list[i].indexOf("riLinkId")==0){
                var key = /\d{1,2}/.exec(list[i]);
                alert(key);
                riLinkId.push(key); 
                }
          if(list[i].indexOf("riPortRef1")==0){
            var unit1 =/\d{1,2}/.exec(/Unit=\d+/.exec(list[i]).toString()); 
            var port1 =list[i].split("=")[4];
            f1unit.push(unit1);
            f1port.push(port1);
                }
          if(list[i].indexOf("riPortRef2")==0){
            var unit2 =/\d{1,2}/.exec(/Unit=\d+/.exec(list[i]).toString()); 
            var port2 =list[i].split("=")[4];
            f2unit.push(unit2);
            f2port.push(port2);
             }
            }
        
             // 获取k 和 name
        for(var j=0;j<list.length-1;j++){
          if(list[j].indexOf("FRU LNH      BOARD    ST FAULT OPER MAINT STAT PRODUCTNUMBER")==0){
            //进行142800开始的行
            for(var k=j+2;k<list.length-1;k++){
              if(list[k].indexOf("---------------------------------------------------------------------------------")==0){
                break;
              }
            list[k]=list[k].replace(/\s+/g,' ');  
            var temp=list[k].split(" ");
            key.push(temp[0]);
            name.push(temp[0]+"      "+temp[1]+"      "+temp[2]);
            alert(name);            
            }
          }
       }
    
      }
 }


ngOnInit(){}  
}