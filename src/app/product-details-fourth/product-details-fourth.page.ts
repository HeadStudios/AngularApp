import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Ensure HttpClient is imported


@Component({
  selector: 'app-product-details-fourth',
  templateUrl: './product-details-fourth.page.html',
  styleUrls: ['./product-details-fourth.page.scss'],
})
export class ProductDetailsFourthPage implements OnInit {

  mediaUrl: string;
  isVideo: boolean = false;
  isDocument: boolean = false;
  fileName: string; // To store file name
  fileSize: string; // To store file size
  fileExtension: string; // To store file extension

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
        // The 'Content-Length' header contains the file size in bytes
        const fileSizeBytes = response.headers.get('Content-Length');
        if (fileSizeBytes) {
          // If you want to convert it to a more readable format (e.g., KB, MB)
          this.fileSize = this.formatFileSize(fileSizeBytes);
        } else {
          // In case 'Content-Length' is not available
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

}
