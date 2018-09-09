import { NgModule } from "@angular/core";
import { ImageCropService } from "./services/image-crop/image-crop.service";

@NgModule({
    providers: [
        ImageCropService
    ]
})
export class ImageCropModule { }
