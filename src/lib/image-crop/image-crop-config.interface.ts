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
