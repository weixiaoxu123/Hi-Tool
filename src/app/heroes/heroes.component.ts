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
   this.onSelect;
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    var filepath = hero.name;
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
      {
        var str='';
        $(xml).find("platform").each(function(i)
        {   
             var hardward = $(this).attr("hardward");
             var str1 = '<li>'+hardward+':'+'</li>';
               $('#abc').append(str1);
               $(this).find('testcase').each(function (i) {
                   var scenario = $(this).attr("scenario");
                   var strscenario='<p>-'+scenario+'</p>';
                   $('#abc').append(strscenario);
               $(this).find('PrimaryFault').each(function (i) {
                  var Fault =$(this).attr("Fault");
                  var strfault='<p>--'+Fault+'</p>';
                    $('#abc').append(strfault);
               $(this).find('device').each(function (i) {
                   var destination = $(this).attr("destination");
                     var strdestination='<p>---'+destination+'</p>';
                   $('#abc').append(strdestination);
                 $(this).find('check').each(function (i) {
                     var module1 = $(this).attr("module");
                      var strcheck='<p>----'+ module1 +'</p>';
                     $('#abc').append(strcheck);    
                     $(this).find('object').each(function (i) {
                      var name = $(this).attr("name");
                      var group=$(this).attr('group');
                      var strname='<p>-------'+ name+ '--group:' +group+'</p>';
                      $('#abc').append(strname);   
                      });//check object
                  }); //check

                  $(this).find('target').each(function (i) {
                    var module1 = $(this).attr("module");
                     var strtraget=str='<p>----'+ module1 +'</p>';
                    $('#abc').append(strtraget);    
                    $(this).find('object').each(function (i) {
                      var name = $(this).attr("name");
                      var group=$(this).attr('group');
                      var strname='<p>-------'+ name+ '--group:' +group+'</p>';
                      $('#abc').append(strname);  
                    }); //target object
                    $(this).find('command').each(function (i) {
                       var name = $(this).attr("name");
                       var group=$(this).attr('group');
                       if(!group){
                        var strcomname='<p>-------'+ name+'</p>';
                       }else{
                        var strcomname='<p>-------'+ name+ '--group:' +group+'</p>';
                       }
                      $('#abc').append(strcomname);  
                    }); //target command


                     }); //target                
                   });//device
                 
                });   // primaryfault
            }); //testcase
          //读取了xml 文件  可以直接给它 绑定事件，完成下面的步骤。
        });//platform
      }

    });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
