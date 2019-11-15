import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {

  private cameraPreview = '';
  private imageToUpload = '';

  private cameraOptions: CameraOptions = {
    quality: 15,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(
    private camera: Camera
  ) { }

  ngOnInit() {
  }

  async takePicture() {
    try {
      const imageData = await this.camera.getPicture(this.cameraOptions);
      this.imageToUpload = imageData;
      this.cameraPreview = 'data:image/jpeg;base64,' + imageData;
    } catch (error) {
      console.log(error);
    }
  }

}
