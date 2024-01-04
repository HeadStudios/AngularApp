import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condensed-list',
  templateUrl: './condensed-list.page.html',
  styleUrls: ['./condensed-list.page.scss'],
})
export class CondensedListPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Select all checkboxes of the list and add style
    const hosts = document.querySelectorAll('.is-list-vertical-buttons ion-checkbox');
    Array.from(hosts).forEach((host) => {
      const style = document.createElement('style');
      style.textContent = `
        button {
          left: var(--is-checkbox-overlay-left);
          height: var(--is-checkbox-overlay-height);
        }
      `;
      host.shadowRoot.appendChild(style);
    });
  }

}
