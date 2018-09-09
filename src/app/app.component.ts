import { Component, OnInit } from '@angular/core';
import { ImageCropService } from '../lib/image-crop/services/image-crop/image-crop.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  src;
  src1;
  
  constructor(private _cropService: ImageCropService, private _san: DomSanitizer) { }
  
  ngOnInit(): void {
    const image = new Image();
    
    image.onload = () => {
      
      let start = performance.now();
      const img = this._cropService.crop(image, {
        x: 1250,
        y: 750,
        width: 500,
        height: 500,
        quality: .5,
        angle: 15
      });
      console.log(performance.now() - start);
      this.src = this._san.bypassSecurityTrustUrl(img)
      
      let angle = 0;
      setInterval(() => {
        
        const img1 = this._cropService.crop(image, {
          x: 1250,
          y: 750,
          width: 500,
          height: 500,
          angle: angle,
          quality: .1
        });
        this.src1 = this._san.bypassSecurityTrustUrl(img1)
        
        angle = angle + 10;
      }, 10);

      start = performance.now();
      this._cropService.crop(image, {
        x: 1250,
        y: 750,
        width: 50,
        height: 50,
        quality: 1,
        angle: 0
      });
      console.log(performance.now() - start);
      start = performance.now();
      this._cropService.crop(image, {
        x: 1250,
        y: 750,
        width: 100,
        height: 100,
        quality: 1,
        angle: 0
      });
      console.log(performance.now() - start);
      start = performance.now();
      this._cropService.crop(image, {
        x: 1250,
        y: 750,
        width: 500,
        height: 500,
        quality: 1,
        angle: 0
      });
      console.log(performance.now() - start);
      start = performance.now();
      this._cropService.crop(image, {
        x: 250,
        y: 50,
        width: 1750,
        height: 1750,
        quality: 1,
        angle: 0
      });
      console.log(performance.now() - start);
    };
    
    image.src = 'assets/image.jpg';
    
  }
}
