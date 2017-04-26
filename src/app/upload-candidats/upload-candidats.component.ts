import {Component, EventEmitter, Inject, NgZone, OnInit} from "@angular/core";
// import {NgUploaderOptions, UploadedFile} from "ngx-uploader";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {NgUploaderOptions, UploadedFile} from "ngx-uploader";

@Component({
    selector: 'app-upload-candidats',
    templateUrl: './upload-candidats.component.html',
    styleUrls: ['./upload-candidats.component.scss']
})
export class UploadCandidatsComponent implements OnInit {

    options: NgUploaderOptions;
    response: any;
    sizeLimit: number = 1000000; // 1MB
    errorMessage: string;
    uploadingFile: string;
    inputUploadEvents: EventEmitter<string>;

    constructor(@Inject(NgZone) private zone: NgZone) {
        this.options = new NgUploaderOptions({
            url: 'http://localhost:4567/populateCandidats',
            filterExtensions: true,
            allowedExtensions: ['xls', 'xlsx'],
            autoUpload: false,
            fieldName: 'candidats_file',
            fieldReset: true,
            maxUploads: 2,
            method: 'POST',
        });
        this.inputUploadEvents = new EventEmitter<string>();
    }

    startUpload() {
        console.log("startUpload: ", this.uploadingFile);
        this.inputUploadEvents.emit('startUpload');
    }

    beforeUpload(uploadingFile: UploadedFile): void {
        console.log("beforeUpload: ", uploadingFile);
        this.uploadingFile = uploadingFile.originalName;
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            this.errorMessage = 'File is too large!';
        }
    }

    handleUpload(data: any) {
        console.log("handleUpload: ", this.uploadingFile);

        setTimeout(() => {
            this.zone.run(() => {
                this.response = data;
                if (data && data.response) {
                    this.response = JSON.parse(data.response);
                    console.log("response : ", this.response);
                    this.uploadingFile = null;
                }
            });
        });
    }

    onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.uploadingFile = files[0].name;
        this.response = null;
    }
    ngOnInit() {
    }

/*
    constructor(private http: Http) {

    }

    ngOnInit() {
    }


    fileChange(event) {
        let fileList: FileList = event.target.files;
        console.log("files: ", fileList);
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('candidats_file', file);
            let headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({headers: headers});
            this.http.post("http://localhost:4567/populateCandidats", formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }
*/


}