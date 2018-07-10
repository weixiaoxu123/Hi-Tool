import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import * as $ from "jquery";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  
  constructor() {}

  ngOnInit() {
  
  } 

  // 读取xml 
  weixu(){
    $.ajax({
      url: "/assets/sleeping cell.xml",
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
}
