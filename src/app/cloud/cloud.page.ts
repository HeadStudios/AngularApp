import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
})
export class CloudPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Select all checkboxes of the list and add style
    const hosts = document.querySelectorAll('.is-list-vertical-buttons ion-checkbox');
    Array.from(hosts).forEach((host) => {
      const style = document.createElement('style');
      style.textContent = `
        button {
          left: var(--is-checkbox-overlay-left);
        }
      `;
      host.shadowRoot.appendChild(style);
    });
  }

}
