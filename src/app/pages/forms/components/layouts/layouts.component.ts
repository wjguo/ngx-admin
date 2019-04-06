import {Component} from '@angular/core';
import { UploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:UploaderOptions = {
    // url: 'http://website.com/upload'
    //url: '',
      concurrency: 1,
  };

  public fileUploaderOptions:UploaderOptions = {
    // url: 'http://website.com/upload'
    //url: '',
    concurrency: 1,
  };
  
  constructor() {
  }

  ngOnInit() {
  }
}
