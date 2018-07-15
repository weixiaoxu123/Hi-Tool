// 这里是kget
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
=======

import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

>>>>>>> 0193528e3ee41973547c63261b8b1393fbe216b8

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  // styleUrls: ['./alarm.component.css'],
  providers: [UploadService]
})
export class AlarmComponent implements OnInit {
  message: string;
  constructor(private uploadService: UploadService) {}

<<<<<<< HEAD
  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploadService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
  }
=======

  constructor() { }
>>>>>>> 0193528e3ee41973547c63261b8b1393fbe216b8
  ngOnInit() {
  }
 

}
