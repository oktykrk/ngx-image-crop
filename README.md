# ImageCrop ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)
Ngx image cropper module.

## Installation
```
npm install ngx-image-crop
```

app.module.ts
```
import { ImageCropModule } from 'ngx-image-crop'; 

... 
imports: [
    ...
    ImageCropModule
    ...
] 
... 
```

## Usage
```
import { ImageCropService } from 'ngx-image-crop';

...
constructor(private _imageCropService: ImageCropService) { }
...

...
const dataUrl = this._imageCropService(image, {
    x: <cropX>,
    y: <cropY>,
    width: <cropWidth>,
    height: <cropHeight>,
    quality: <quality-(between 0 - 1)>,
    angle: <rotation angle in degree>
});
...

```

## Configuration

```
/**
* Iamge crop options interface.
*/
export interface ImageCropConfig {
    /**
    * 'x' coordinate of crop area on source image.
    */
    x?: number;
    /**
    * 'y' coordinate of crop area on source image.
    */
    y?: number;
    /**
    * Crop Width.
    */
    width?: number;
    /**
    * Crop height.
    */
    height?: number;
    /**
    * Rotation angle.
    */
    angle?: number;
    /**
    * Output image quality.
    */
    quality?: number;
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
