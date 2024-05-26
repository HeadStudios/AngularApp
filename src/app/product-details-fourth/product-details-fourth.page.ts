import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';

@Component({
  selector: 'app-product-details-fourth',
  templateUrl: './product-details-fourth.page.html',
  styleUrls: ['./product-details-fourth.page.scss'],
})
export class ProductDetailsFourthPage implements OnInit {

  mediaUrl: string;
  isVideo: boolean = false;
  isDocument: boolean = false;
  fileName: string;
  fileSize: string;
  fileExtension: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Received mediaUrl:', params['mediaUrl']); // Log for debugging
      if (params['mediaUrl']) {
        this.mediaUrl = params['mediaUrl'];
        this.isVideo = this.mediaUrl.endsWith('.mp4');
        this.isDocument = this.mediaUrl.endsWith('.pdf');

        // Extract file name and extension
        const urlParts = this.mediaUrl.split('/').pop().split('.');
        this.fileName = urlParts[0];
        this.fileExtension = urlParts.length > 1 ? '.' + urlParts.pop() : '';
        this.getFileSize(this.mediaUrl);
      }
    });
  }

  getFileSize(url: string): void {
    this.http.head(url, { observe: 'response' }).toPromise()
      .then(response => {
        const fileSizeBytes = response.headers.get('Content-Length');
        if (fileSizeBytes) {
          this.fileSize = this.formatFileSize(fileSizeBytes);
        } else {
          this.fileSize = 'Unknown size';
        }
      })
      .catch(error => {
        console.error('Error fetching file size:', error);
        this.fileSize = 'Error fetching size';
      });
  }

  formatFileSize(bytes: string): string {
    const size = parseInt(bytes, 10);
    if (isNaN(size)) { return 'Unknown size'; }
    if (size < 1024) { return size + ' bytes'; }
    if (size < 1024 * 1024) { return (size / 1024).toFixed(2) + ' KB'; }
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  }

  async openDocument() {
    try {
      await FileOpener.openFile({
        path: this.mediaUrl,
        mimeType: 'application/pdf'
      });
    } catch (error) {
      console.error('Error opening file:', error);
    }
  }
}