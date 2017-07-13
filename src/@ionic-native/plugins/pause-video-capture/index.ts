import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface MediaFile {
  /**
   * The name of the file, without path information.
   */
  name: string;
  /**
   * The full path of the file, including the name.
   */
  fullPath: string;
  /**
   * The file's mime type
   */
  type: string;

  /**
   * The date and time when the file was last modified.
   */
  lastModifiedDate: Date;

  /**
   * The size of the file, in bytes.
   */
  size: number;

  /**
   * Retrieves the format information of the media file.
   * @param {Function} successCallback
   * @param {Function} [errorCallback]
   */
  getFormatData(successCallback: (data: MediaFileData) => any, errorCallback?: (err: any) => any): any;
}

export interface MediaFileData {
  /**
   * The actual format of the audio and video content.
   */
  codecs: string;
  /**
   * The average bitrate of the content. The value is zero for images.
   */
  bitrate: number;
  /**
   * The height of the image or video in pixels. The value is zero for audio clips.
   */
  height: number;
  /**
   * The width of the image or video in pixels. The value is zero for audio clips.
   */
  width: number;
  /**
   * The length of the video or sound clip in seconds. The value is zero for images.
   */
  duration: number;
}

export interface PauseVideoCaptureOptions {

  /**
   *  Max video duration (leave empty or 0 for no limit)
   */
  duration: number;

  /**
   *  The way you want the timer to look if you have a duration set (either decrementing or incrementing)
   */
  decrement: boolean;

}

/**
 * @name Pause Video Capture
 * @description
 *
 * @usage
 * ```typescript
 * import { PauseVideoCapture } from '@ionic-native/pause-video-capture';
 *
 * constructor(private pauseVideoCapture: PauseVideoCapture) { }
 *
 * // start camera
 * this.pauseVideoCapture.pauseVideoCapture({ duration: 180, decrement: false }}).then(
 *  (medias: MediaFile[]) => console.log(media),
 *  (err) => console.log(err)
 * );
 *
 * ```
 */
@Plugin({
  pluginName: 'PauseVideoCapture',
  plugin: 'cordova-pause-video-capture',
  pluginRef: 'pauseVideoCapture',
  repo: 'https://github.com/sudohalt/cordova-plugin-pause-video-capture.git',
  platforms: ['iOS']
})
@Injectable()
export class PauseVideoCapture extends IonicNativePlugin {

  /**
   * Starts video capture mode
   * @param [options] {PauseVideoCaptureOptions} Configure options
   * @return {Promise<MediaFile[]>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  pauseVideoCapture(options?: PauseVideoCaptureOptions): Promise<MediaFile[]> { return; }

}
