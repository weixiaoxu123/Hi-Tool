// 这里是kget

import { Component, OnInit } from '@angular/core';
import { UploaderService } from './uploader.service';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
  providers: [ UploaderService ]
})
export class AlarmComponent implements OnInit {

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
  }
  ngOnInit(){

  }
}
