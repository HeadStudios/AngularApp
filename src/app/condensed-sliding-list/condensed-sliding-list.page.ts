import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condensed-sliding-list',
  templateUrl: './condensed-sliding-list.page.html',
  styleUrls: ['./condensed-sliding-list.page.scss'],
})
export class CondensedSlidingListPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Select all option elements of the sliding list items and add style
    const hosts = document.querySelectorAll('.is-list-condensed ion-item-option');
    Array.from(hosts).forEach((host) => {
      const style = document.createElement('style');
      style.textContent = `
        button.button-native {
          font-weight: var(--is-button-native-font-weight);
        }
      `;
      host.shadowRoot.appendChild(style);
    });
  }

}
