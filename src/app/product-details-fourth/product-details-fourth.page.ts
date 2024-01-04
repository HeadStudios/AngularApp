import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details-fourth',
  templateUrl: './product-details-fourth.page.html',
  styleUrls: ['./product-details-fourth.page.scss'],
})
export class ProductDetailsFourthPage implements OnInit {

  mediaUrl: string;
  isVideo: boolean = false;
  isDocument: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Received mediaUrl:', params['mediaUrl']); // Log for debugging
      if (params['mediaUrl']) {
        this.mediaUrl = params['mediaUrl'];
        this.isVideo = this.mediaUrl.endsWith('.mp4');
        this.isDocument = this.mediaUrl.endsWith('.pdf');
      }
    });
  }

}
