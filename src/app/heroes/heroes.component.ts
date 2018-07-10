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
        $(xml).find("target").each(function(i)
        { 
         
             var destination = $(this).attr("destination");
             var str1 = '<li>'+destination+':'+'</li>';
             $('#abc').append(str1);
             $(this).find('object').each(function (i) {
              var name = $(this).attr("name");
              str='<p>'+name+'</p>';
              $('#abc').append(str);
            });

          
          //读取了xml 文件  可以直接给它 绑定事件，完成下面的步骤。
        });
      }
    });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
