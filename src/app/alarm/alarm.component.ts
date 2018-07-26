// 这里是kget
import { Component, OnInit } from '@angular/core';
import { UploaderService } from './uploader.service';
import * as go from 'gojs/release/go.js';
import * as $ from "jquery";

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
  providers: [ UploaderService ]
})
export class AlarmComponent implements OnInit {
  showKget = false;
  showpicture(){
    this.showKget= !this.showKget;
  }
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


   // linkline data
    var riLinkId = new Array();
    var f1unit = new Array();
    var f1port = new Array();
    var f2unit = new Array();
    var f2port = new Array();
   // port data
    var key = new Array();
    var type = new Array();
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
                var linkId = /\d{1,2}/.exec(list[i]);
                riLinkId.push(linkId); 
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

        //将位置错误的f1 和 f2 互换位置
          for(var i=0;i<f2unit.length;i++){
          if(f1port[i]=="DATA_1"){
            var temp2 = f1port[i];
            f1port[i]=f2port[i];
            f2port[i]=temp2;
            temp2=f1unit[i];
            f1unit[i]=f2unit[i];
            f2unit[i]=temp2;
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
                    
            }
          }
       }
    //选取type的值
    for(var i=0;i<key.length;i++){
      var temp1=name[i].replace(/\s+/g,' ');  
      temp1=temp1.split(" ");
      if(temp1[2].match("DU")){
        type.push("DU");
      }
      if(temp1[2].match("XMU")){
        type.push("XMU");
      }
      if(temp1[2].match("RU")){
        type.push("RU");
          }
     
    }
    //编辑文本框内容
    var jsontxt;
    jsontxt="{\"class\":\"go.GraphLinksMode\","+"\n"+ "\"nodeCategoryProperty\": \"type\","+"\n"+"\"linkFromPortIdProperty\": \"frompid\","+"\n"+"\"linkToPortIdProperty\": \"topid\","+"\n"+
    "\"nodeDataArray\": ["+"\n";
    for(var i=0;i<key.length;i++){
      if(i===9){
        jsontxt=jsontxt + "{\"key\":"+key[i]+", \"type\":\""+type[i]+"\", \"name\":\""+name[i]+"\"}"+"\n";
        }else{
       jsontxt=jsontxt + "{\"key\":"+key[i]+", \"type\":\""+type[i]+"\", \"name\":\""+name[i]+"\"},"+"\n";
        }
       }
       jsontxt=jsontxt+"],"+"\n"+"\"linkDataArray\": ["+"\n";
       for(var i=0;i<riLinkId.length;i++){
       if(i===9){
        jsontxt=jsontxt + "{\"from\":"+f1unit[i]+", \"frompid\":\""+f1port[i]+"\", \"to\":"+f2unit[i]+", \"topid\":\""+f2port[i]+"\", \"text\":\"riLinkId="+riLinkId[i]+"\"}"+"\n";
        }else{
        jsontxt=jsontxt + "{\"from\":"+f1unit[i]+", \"frompid\":\""+f1port[i]+"\", \"to\":"+f2unit[i]+", \"topid\":\""+f2port[i]+"\", \"text\":\"riLinkId="+riLinkId[i]+"\"},"+"\n";
       }
    }
    jsontxt=jsontxt+"]}";
    $("#mySavedModel").append(jsontxt);
      }
 }

ngOnInit(){}  
}