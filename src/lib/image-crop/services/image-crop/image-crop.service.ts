import { Injectable } from "@angular/core";
import { ImageCropConfig } from "../../image-crop-config.interface";

@Injectable()
export class ImageCropService {
    
    /**
    * Crop given image according to given config parameter and returns cropped image.
    * @param image 
    * @param config 
    */
    public crop(image: HTMLImageElement|HTMLVideoElement|HTMLCanvasElement|ImageBitmap, config: ImageCropConfig): string {
        // if config parameter not provided return image.
        if (!config) {
            console.warn(`ImageCropService.crop() => 'config' parameter not provided. Returning raw image.`);
            return;
        }
        
        // init config
        config.x = config.x ? config.x : 0;
        config.y = config.y ? config.y : 0;
        config.width = config.width ? config.width : 0;
        config.height = config.height ? config.height : 0;
        config.angle = config.angle ? config.angle : 0;
        config.quality = config.quality ? config.quality : 1;
        
        // create an offscreen canvas.
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // set canvas dimensions.
        canvas.width = config.width;
        canvas.height = config.height;
        
        // crop image.
        context.save();
        context.translate(config.width / 2, config.height / 2);
        context.rotate(config.angle * 0.0174533);
        context.translate(-(config.x + config.width / 2), -(config.y + config.height / 2));
        context.drawImage(image, 0, 0);
        context.restore();
        
        return canvas.toDataURL('image/jpeg', config.quality);
    }
}
