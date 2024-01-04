import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-month',
  templateUrl: './schedule-month.page.html',
  styleUrls: ['./schedule-month.page.scss'],
})
export class ScheduleMonthPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Select all list items and add style
    const itemHosts = document.querySelectorAll('.is-list-square ion-item');
    Array.from(itemHosts).forEach((host) => {
      const style = document.createElement('style');
      style.textContent = `
        .item-inner {
          border-left-width: var(--is-item-inner-border-left);
          border-left-color: var(--ion-color-is-mute-light);
          border-top-width: var(--is-item-inner-border-top);
          border-top-color: var(--ion-color-is-mute-light);
        }
      `;
      host.shadowRoot.appendChild(style);
    });

    // Select all list dividers and add style
    const itemDividerHosts = document.querySelectorAll('.is-list-square ion-item-divider');
    Array.from(itemDividerHosts).forEach((host) => {
      const style = document.createElement('style');
      style.textContent = `
        .item-divider-wrapper {
          display: var(--is-item-divider-wrapper-display);
          text-align: var(--is-item-divider-wrapper-text-align);
        }
      `;
      host.shadowRoot.appendChild(style);
    });
  }

}
