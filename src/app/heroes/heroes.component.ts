import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import * as $ from "jquery";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
    // this.onSelect;
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   var filepath = hero.name;
  //   var alarminput=$('#alarmInput').val();
  //   var flag =true;
  //   $.ajax({
  //     url: "/assets/"+filepath+".xml",
  //     dataType: 'xml',
  //     type: 'GET',
  //     timeout: 2000,
  //     error: function(xml)
  //     {
  //       alert("加载XML 文件出错！");
  //     },
  //     success: function(xml)
  //     {  //检测用户是否输入alarm
  //       if(alarminput!=""){
  //       $(xml).find('PrimaryFault').each(function (i) {
  //         var Fault =$(this).attr("Fault");
  //         //判断fault和alarminput的值
  //         if(alarminput==Fault){
  //         flag=false;
  //         var strfault='<p>--'+Fault+'</p>';
  //         $('#abc').append(strfault);
  //         $(this).find('device').each(function (i) {
  //         var destination = $(this).attr("destination");
  //         var strdestination='<p>---'+destination+'</p>';
  //         $('#abc').append(strdestination);
  //         $(this).find('check').each(function (i) {
  //          var module1 = $(this).attr("module");
  //           var strcheck='<p>----'+ module1 +'</p>';
  //          $('#abc').append(strcheck);    
  //          $(this).find('object').each(function (i) {
  //           var name = $(this).attr("name");
  //           var group=$(this).attr('group');
  //           var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
  //           var strgroup="";
  //           for(var i=0;i<group1.length;i++){
  //               if(/[0-9]/.test(group1[i])){
  //                 strgroup=strgroup+"trace"+group1[i]+" ";
  //                 }else{
  //                 strgroup=strgroup+group1[i]+" ";
  //                 }
  //         }
  //             var strname='<p>-------'+'te e '+ strgroup + name+'</p>';
  //             $('#abc').append(strname);   
  //         });//check object
  //         $(this).find('command').each(function (i) {
  //           var name = $(this).attr("name");
  //           var group=$(this).attr('group');
  //           if(!group){
  //            var strcomname='<p>-------'+ name+'</p>';
  //           }else{
  //            var strcomname='<p>-------'+ name+ '--group:' +group+'</p>';
  //           }
  //          $('#abc').append(strcomname);  
  //          });
  //       }); //check


  //       $(this).find('target').each(function (i) {
  //         var module1 = $(this).attr("module");
  //          var strtraget='<p>----'+ module1 +'</p>';
  //         $('#abc').append(strtraget);    
  //         $(this).find('object').each(function (i) {
  //           var name = $(this).attr("name");
  //           var group=$(this).attr('group');
  //           var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
  //           var strgroup="";
  //           for(var i=0;i<group1.length;i++){
  //               if(/[0-9]/.test(group1[i])){
  //                 strgroup=strgroup+"trace"+group1[i]+" ";
  //                 }else{
  //                 strgroup=strgroup+group1[i]+" ";
  //                 }
  //           }
  //             var strname='<p>-------'+'te e '+ strgroup + name+'</p>';
  //             $('#abc').append(strname);   
  //         }); //target object
  //         $(this).find('command').each(function (i) {
  //            var name = $(this).attr("name");
  //            var group=$(this).attr('group');
  //            if(!group){
  //             var strcomname='<p>-------'+ name+'</p>';
  //            }else{
  //             var strcomname='<p>-------'+ name+ '--group:' +group+'</p>';
  //            }
  //           $('#abc').append(strcomname);  
  //           }); //target command
  //          }); //target                
  //        });//device
  //       }//if-alarm
  //      }); 
  //     if(flag){
  //       alert("no find alarm");
  //      } 
  //     }else{  //alarm 为空
  //       $(xml).find("platform").each(function(i)
  //       {   
  //            var platform = $(this).attr("hardward");
  //            var str1 = '<li>'+platform+':'+'</li>';
  //             $('#abc').append(str1);
  //             $(this).find('testcase').each(function (i) {
  //                  var scenario = $(this).attr("scenario");
  //                  var strscenario='<p>-'+scenario+'</p>';
  //                  $('#abc').append(strscenario);
  //                  $(this).find('PrimaryFault').each(function (i) {
  //                  var Fault =$(this).attr("Fault");         
  //                   var strfault='<p>--'+Fault+'</p>';
  //                   $('#abc').append(strfault);
  //                   $(this).find('device').each(function (i) {
  //                   var destination = $(this).attr("destination");
  //                   var strdestination='<p>---'+destination+'</p>';
  //                   $('#abc').append(strdestination);
  //                   $(this).find('check').each(function (i) {
  //                    var module1 = $(this).attr("module");
  //                     var strcheck='<p>----'+ module1 +'</p>';
  //                    $('#abc').append(strcheck);    
  //                    $(this).find('object').each(function (i) {
  //                     var name = $(this).attr("name");
  //                     var group=$(this).attr('group');
  //                     var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
  //                     var strgroup="";
  //                     for(var i=0;i<group1.length;i++){
  //                         if(/[0-9]/.test(group1[i])){
  //                           strgroup=strgroup+"trace"+group1[i]+" ";
  //                           }else{
  //                           strgroup=strgroup+group1[i]+" ";
  //                           }
  //                   }
  //                       var strname='<p>-------'+'te e '+ strgroup + name+'</p>';
  //                       $('#abc').append(strname);   
  //                   });//check object
  //                   $(this).find('command').each(function (i) {
  //                     var name = $(this).attr("name");
  //                     var group=$(this).attr('group');
  //                     if(!group){
  //                      var strcomname='<p>-------'+ name+'</p>';
  //                     }else{
  //                      var strcomname='<p>-------'+ name+ '--group:' +group+'</p>';
  //                     }
  //                    $('#abc').append(strcomname);  
  //                    });
  //                 }); //check
  //                 $(this).find('target').each(function (i) {
  //                   var module1 = $(this).attr("module");
  //                    var strtraget='<p>----'+ module1 +'</p>';
  //                   $('#abc').append(strtraget);    
  //                   $(this).find('object').each(function (i) {
  //                     var name = $(this).attr("name");
  //                     var group=$(this).attr('group');
  //                     var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
  //                     var strgroup="";
  //                     for(var i=0;i<group1.length;i++){
  //                         if(/[0-9]/.test(group1[i])){
  //                           strgroup=strgroup+"trace"+group1[i]+" ";
  //                           }else{
  //                           strgroup=strgroup+group1[i]+" ";
  //                           }
  //                     }
  //                       var strname='<p>-------'+'te e '+ strgroup + name+'</p>';
  //                       $('#abc').append(strname);   
  //                   }); //target object
  //                   $(this).find('command').each(function (i) {
  //                      var name = $(this).attr("name");
  //                      var group=$(this).attr('group');
  //                      if(!group){
  //                       var strcomname='<p>-------'+ name+'</p>';
  //                      }else{
  //                       var strcomname='<p>-------'+ name+ '--group:' +group+'</p>';
  //                      }
  //                     $('#abc').append(strcomname);  
  //                     }); //target command
  //                    }); //target                
  //                  });//device
  //               });  
  //               // primaryfault
  //           }); //testcase
  //         //读取了xml 文件  可以直接给它 绑定事件，完成下面的步骤。
  //       });//platform
  //     }
  //   }
  //   });
  // }
f1(addr,hero: Hero){
  var a =window.open(addr,"_blank","toolbar=no, location=no,titlebar=yes,directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
  this.selectedHero = hero;
  var filepath = hero.name;
  var alarminput=$('#alarmInput').val();
  var flag =true;
  $.ajax({
    url: "/assets/"+filepath+".xml",
    dataType: 'xml',
    type: 'GET',
    timeout: 2000,
    error: function(xml)
    {
      alert("加载XML 文件出错！");
    },
    success: function(xml)
    {  //检测用户是否输入alarm
      if(alarminput!=""){
      $(xml).find('PrimaryFault').each(function (i) {
        var Fault =$(this).attr("Fault");
        //判断fault和alarminput的值
        if(alarminput==Fault){
        flag=false;
        var strfault='<p>--'+Fault+'</p>';
        a.document.writeln(strfault);
        $(this).find('device').each(function (i) {
        var destination = $(this).attr("destination");
        var strdestination='<p>---'+destination+'</p>';
        a.document.writeln(strdestination);
        $(this).find('check').each(function (i) {
         var module1 = $(this).attr("module");
          var strcheck='<p>----'+ module1 +'</p>';
          a.document.writeln(strcheck);    
         $(this).find('object').each(function (i) {
          var name = $(this).attr("name");
          var group=$(this).attr('group');
          var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
          var strgroup="";
          for(var i=0;i<group1.length;i++){
              if(/[0-9]/.test(group1[i])){
                strgroup=strgroup+"trace"+group1[i]+" ";
                }else{
                strgroup=strgroup+group1[i]+" ";
                }
        }
            var strname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+'te e '+ strgroup + name+'</p>';
            a.document.writeln(strname);   
        });//check object
        $(this).find('command').each(function (i) {
          var name = $(this).attr("name");
          var group=$(this).attr('group');
          if(!group){
           var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+'</p>';
          }else{
           var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+ '--group:' +group+'</p>';
          }
          a.document.writeln(strcomname);  
         });
      }); //check


      $(this).find('target').each(function (i) {
        var module1 = $(this).attr("module");
         var strtraget='<p>----'+ module1 +'</p>';
         a.document.writeln(strtraget);    
        $(this).find('object').each(function (i) {
          var name = $(this).attr("name");
          var group=$(this).attr('group');
          var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
          var strgroup="";
          for(var i=0;i<group1.length;i++){
              if(/[0-9]/.test(group1[i])){
                strgroup=strgroup+"trace"+group1[i]+" ";
                }else{
                strgroup=strgroup+group1[i]+" ";
                }
          }
            var strname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+'te e '+ strgroup + name+'</p>';
            a.document.writeln(strname);   
        }); //target object
        $(this).find('command').each(function (i) {
           var name = $(this).attr("name");
           var group=$(this).attr('group');
           if(!group){
            var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+'</p>';
           }else{
            var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+ '--group:' +group+'</p>';
           }
           a.document.writeln(strcomname);  
          }); //target command
         }); //target                
       });//device
      }//if-alarm
     }); 
    if(flag){
      alert("no find alarm");
     } 
    }else{  //alarm 为空
      $(xml).find("platform").each(function(i)
      {   
           var platform = $(this).attr("hardward");
           var str1 = '<li>'+platform+':'+'</li>';
           a.document.writeln(str1);
            $(this).find('testcase').each(function (i) {
                 var scenario = $(this).attr("scenario");
                 var strscenario='<p>-'+scenario+'</p>';
                 a.document.writeln(strscenario);
                 $(this).find('PrimaryFault').each(function (i) {
                 var Fault =$(this).attr("Fault");         
                  var strfault='<p>--'+Fault+'</p>';
                  a.document.writeln(strfault);
                  $(this).find('device').each(function (i) {
                  var destination = $(this).attr("destination");
                  var strdestination='<p>---'+destination+'</p>';
                  a.document.writeln(strdestination);
                  $(this).find('check').each(function (i) {
                   var module1 = $(this).attr("module");
                    var strcheck='<p>----'+ module1 +'</p>';
                    a.document.writeln(strcheck);    
                   $(this).find('object').each(function (i) {
                    var name = $(this).attr("name");
                    var group=$(this).attr('group');
                    var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
                    var strgroup="";
                    for(var i=0;i<group1.length;i++){
                        if(/[0-9]/.test(group1[i])){
                          strgroup=strgroup+"trace"+group1[i]+" ";
                          }else{
                          strgroup=strgroup+group1[i]+" ";
                          }
                  }
                      var strname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+'te e '+ strgroup + name+'</p>';
                      a.document.writeln(strname);   
                  });//check object
                  $(this).find('command').each(function (i) {
                    var name = $(this).attr("name");
                    var group=$(this).attr('group');
                    if(!group){
                     var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+'</p>';
                    }else{
                     var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+ '--group:' +group+'</p>';
                    }
                    a.document.writeln(strcomname);  
                   });
                }); //check
                $(this).find('target').each(function (i) {
                  var module1 = $(this).attr("module");
                   var strtraget='<p>----'+ module1 +'</p>';
                   a.document.writeln(strtraget);    
                  $(this).find('object').each(function (i) {
                    var name = $(this).attr("name");
                    var group=$(this).attr('group');
                    var group1=group.match(/\[(.+?)\]/g).toString().replace(/\[|]/g,'').split(",");
                    var strgroup="";
                    for(var i=0;i<group1.length;i++){
                        if(/[0-9]/.test(group1[i])){
                          strgroup=strgroup+"trace"+group1[i]+" ";
                          }else{
                          strgroup=strgroup+group1[i]+" ";
                          }
                    }
                      var strname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+'te e '+ strgroup + name+'</p>';
                      a.document.writeln(strname);   
                  }); //target object
                  $(this).find('command').each(function (i) {
                     var name = $(this).attr("name");
                     var group=$(this).attr('group');
                     if(!group){
                      var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+'</p>';
                     }else{
                      var strcomname='<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ name+ '--group:' +group+'</p>';
                     }
                     a.document.writeln(strcomname);  
                    }); //target command
                   }); //target                
                 });//device
              });  
              // primaryfault
          }); //testcase
        //读取了xml 文件  可以直接给它 绑定事件，完成下面的步骤。
      });//platform
    }
  }
  });
  
  
 

}

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
