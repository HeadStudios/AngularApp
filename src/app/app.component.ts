import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public env = environment;


  public walletPages = [
    {
      title: 'Control Centre',
      url: '/gridTiles',
      icon: 'list'
    },
    {
      title: 'Peeps',
      url: '/basicList',
      icon: 'list'
    },
    {
      title: 'Contact Form',
      url: '/contactForm',
      icon: 'list'
    },
    
    

  ];

  public organizerPages = [
    
  ];

  public walkthroughPages = [
    {
      title: 'Walkthrough',
      url: '/walkthrough',
      icon: 'list'
    },
    {
      title: 'Walkthrough Alternative',
      url: '/walkthroughAlt',
      icon: 'list'
    },
    {
      title: 'Walkthrough Page Slider',
      url: '/walkthroughSlider',
      icon: 'list'
    }
  ];

  public profilePages = [
    {
      title: 'Profile Settings',
      url: '/profileSettings',
      icon: 'list'
    },
    {
      title: 'Profile Settings Alternative',
      url: '/alternativeProfile',
      icon: 'list'
    }
  ];

  public accountPages = [
    {
      title: 'Add an Account',
      url: '/addAccount',
      icon: 'list'
    },
    {
      title: 'Sign Up',
      url: '/signup',
      icon: 'list'
    },
    {
      title: 'Sign Up Alternative',
      url: '/signupAlt',
      icon: 'list'
    }
  ];

  public formPages = [

    {
      title: 'Contact Form Alternative',
      url: '/contactFormAlt',
      icon: 'list'
    },
    {
      title: 'Inputs and Validation',
      url: '/inputs',
      icon: 'list'
    }
  ];

  public cloudPages = [
    {
      title: 'Cloud',
      url: '/cloud',
      icon: 'list'
    },
    {
      title: 'Mail',
      url: '/mail',
      icon: 'list'
    },
    {
      title: 'Storage',
      url: '/storage',
      icon: 'list'
    }
  ];

  public conference = [
    {
      title: 'Agenda',
      url: '/agenda',
      icon: 'list'
    },
    {
      title: 'Sponsors',
      url: '/sponsors',
      icon: 'list'
    },
    {
      title: 'Speakers',
      url: '/speakers',
      icon: 'list'
    },
    {
      title: 'Speaker Details',
      url: '/speaker-details',
      icon: 'list'
    },
    {
      title: 'Session Details',
      url: '/session-details',
      icon: 'list'
    }
  ];

  public eventPages = [
    {
      title: 'Calendar Event',
      url: '/calendarEvent',
      icon: 'list'
    },
    {
      title: 'Event Details',
      url: '/eventDetails',
      icon: 'list'
    },
    {
      title: 'Events List',
      url: '/eventsList',
      icon: 'list'
    }
  ];

  public commercePages = [
    {
      title: 'Commerce Home',
      url: '/commerce-home',
      icon: 'list'
    },
    {
      title: 'Albums',
      url: '/albums',
      icon: 'list'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'list'
    },
    {
      title: 'Product Details',
      url: '/product-details',
      icon: 'list'
    },
    {
      title: 'Product Details Second',
      url: '/product-details-second',
      icon: 'list'
    },
    {
      title: 'Product Details Third',
      url: '/product-details-third',
      icon: 'list'
    },
    {
      title: 'Product Details Fourth',
      url: '/product-details-fourth',
      icon: 'list'
    },
    {
      title: 'Products Grid',
      url: '/products-grid',
      icon: 'list'
    },
    {
      title: 'Products List',
      url: '/products-list',
      icon: 'list'
    },
    {
      title: 'Order History',
      url: '/order-history',
      icon: 'list'
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'basket'
    },
    {
      title: 'Delivery',
      url: '/delivery',
      icon: 'pin'
    },
    {
      title: 'Payment',
      url: '/payment',
      icon: 'card'
    },
    {
      title: 'Confirmation',
      url: '/confirmation',
      icon: 'checkmark'
    },
    {
      title: 'Order Finish',
      url: '/order-finish',
      icon: 'flag'
    }
  ];

  public socialPages = [
    {
      title: 'Subscribers',
      url: '/subscribers',
      icon: 'list'
    },
    {
      title: 'Friends',
      url: '/friends',
      icon: 'list'
    },
    {
      title: 'Followers',
      url: '/followers',
      icon: 'list'
    }
  ];


  public food = [
    {
      title: 'Recipes Grid',
      url: '/recipes-grid',
      icon: 'list'
    },
    {
      title: 'Recipes List',
      url: '/recipes-list',
      icon: 'list'
    }
  ];

  public emptyStatePages = [
    {
      title: 'No Planned Events',
      url: '/emptyeventsfirst',
      icon: 'list'
    },
    {
      title: 'No Trips',
      url: '/emptyeventssecond',
      icon: 'list'
    },
    {
      title: 'No Events Here',
      url: '/emptyeventsthird',
      icon: 'list'
    },
    {
      title: 'Nothing to do',
      url: '/emptyeventsfourth',
      icon: 'list'
    },
    {
      title: 'No Trips',
      url: '/emptyeventsfifth',
      icon: 'list'
    },
    {
      title: 'No Friends',
      url: '/emptyfriendsfirst',
      icon: 'list'
    },
    {
      title: 'More Fun with Friends',
      url: '/emptyfriendssecond',
      icon: 'list'
    },
    {
      title: 'Noone Around',
      url: '/emptyfriendsthird',
      icon: 'list'
    },
    {
      title: 'Add Some Friends',
      url: '/emptyfriendsfourth',
      icon: 'list'
    },
    {
      title: 'Better with Friends',
      url: '/emptyfriendsfifth',
      icon: 'list'
    },
    {
      title: 'No Messages',
      url: '/emptyinboxfirst',
      icon: 'list'
    },
    {
      title: 'No Chats',
      url: '/emptyinboxsecond',
      icon: 'list'
    },
    {
      title: 'No mail',
      url: '/emptyinboxthird',
      icon: 'list'
    },
    {
      title: 'Inbox Empty',
      url: '/emptyinboxfourth',
      icon: 'list'
    },
    {
      title: 'No Notifications',
      url: '/emptynotificationfirst',
      icon: 'list'
    },
    {
      title: 'All Caught Up',
      url: '/emptynotificationsecond',
      icon: 'list'
    },
    {
      title: 'You Have None',
      url: '/emptynotificationthird',
      icon: 'list'
    },
    {
      title: 'No Notifications',
      url: '/emptynotificationfourth',
      icon: 'list'
    },
    {
      title: 'All Caught Up',
      url: '/emptynotificationfifth',
      icon: 'list'
    },
    {
      title: 'No Photos',
      url: '/emptyphotosfirst',
      icon: 'list'
    },
    {
      title: 'Take Some Pictures',
      url: '/emptyphotossecond',
      icon: 'list'
    },
    {
      title: 'No Photos Here',
      url: '/emptyphotosthird',
      icon: 'list'
    },
    {
      title: 'It\'s Lonely Here',
      url: '/emptyphotosfourth',
      icon: 'list'
    },
    {
      title: 'You have no Pictures',
      url: '/emptyphotosfifth',
      icon: 'list'
    },
    {
      title: 'No Purchases',
      url: '/emptypurchasesfirst',
      icon: 'list'
    },
    {
      title: 'Buy Some Stuff',
      url: '/emptypurchasessecond',
      icon: 'list'
    },
    {
      title: 'Nothing In Here',
      url: '/emptypurchasesthird',
      icon: 'list'
    },
    {
      title: 'No Orders',
      url: '/emptypurchasesfourth',
      icon: 'list'
    },
    {
      title: 'No Orders',
      url: '/emptypurchasesfifth',
      icon: 'list'
    },
    {
      title: 'No Sent Mail',
      url: '/emptysentfirst',
      icon: 'list'
    },
    {
      title: 'No Tasks Here',
      url: '/emptytasksfirst',
      icon: 'list'
    },
    {
      title: 'No Tasks',
      url: '/emptytaskssecond',
      icon: 'list'
    },
    {
      title: 'All Done',
      url: '/emptytasksthird',
      icon: 'list'
    },
    {
      title: 'Nothing to do',
      url: '/emptytasksfourth',
      icon: 'list'
    },
    {
      title: 'All done',
      url: '/emptytasksfifth',
      icon: 'list'
    },
    {
      title: 'No Videos',
      url: '/emptyvideosfirst',
      icon: 'list'
    },
    {
      title: 'Record Some Videos',
      url: '/emptyvideossecond',
      icon: 'list'
    },
    {
      title: 'No Videos Here',
      url: '/emptyvideosthird',
      icon: 'list'
    },
    {
      title: 'No Videos',
      url: '/emptyvideosfourth',
      icon: 'list'
    },
    {
      title: 'Add some videos',
      url: '/emptyvideosfifth',
      icon: 'list'
    },
    {
      title: 'Oops! No Credits',
      url: '/emptywalletfirst',
      icon: 'list'
    },
    {
      title: 'Out of Credit',
      url: '/emptywalletsecond',
      icon: 'list'
    },
    {
      title: 'No Payment Methods',
      url: '/emptywalletthird',
      icon: 'list'
    },
    {
      title: 'No payment providers',
      url: '/emptywalletfourth',
      icon: 'list'
    },
    {
      title: 'Your wallet',
      url: '/emptywalletfifth',
      icon: 'list'
    }
  ];

  public componentPages = [
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'list'
    },
    {
      title: 'Dropdowns',
      url: '/dropdowns',
      icon: 'list'
    },
    {
      title: 'Toggles and Sliders',
      url: '/selectors',
      icon: 'list'
    }
  ];

  public enhancedListPages = [
    {
      title: 'Buttons and Thumb List',
      url: '/thumbButtonsList',
      icon: 'list'
    },
    {
      title: 'Buttons and Thumb List Alternative',
      url: '/thumbButtonsListAlt',
      icon: 'list'
    },
    {
      title: 'Condensed List',
      url: '/condensedList',
      icon: 'list'
    },
    {
      title: 'Condensed Sliding List',
      url: '/condensedSlidingList',
      icon: 'list'
    },
    {
      title: 'Grid Tiles',
      url: '/gridTiles',
      icon: 'list'
    },
    {
      title: 'Ordered List',
      url: '/orderedList',
      icon: 'list'
    },
    {
      title: 'Sliding List',
      url: '/slidingList',
      icon: 'list'
    },
    {
      title: 'Thumbnail List',
      url: '/listThumbStart',
      icon: 'list'
    },
    {
      title: 'Thumbnail List Clean',
      url: '/listThumbCentered',
      icon: 'list'
    },
    {
      title: 'Thumbnail List Reversed',
      url: '/listThumbEnd',
      icon: 'list'
    }
  ];

  public ionicListPages = [
    /*
    {
      title: 'Avatar List',
      url: '/avatarList',
      icon: 'list'
    },
    
    {
      title: 'Dividers List',
      url: '/dividersList',
      icon: 'list'
    },
    {
      title: 'Headers List',
      url: '/headersList',
      icon: 'list'
    },*/
    {
      title: 'Icon List',
      url: '/iconList',
      icon: 'list'
    }
    /*{
      title: 'Inset List',
      url: '/insetList',
      icon: 'list'
    },
    {
      title: 'Multi-line List',
      url: '/multiLineList',
      icon: 'list'
    },
    {
      title: 'No Lines List',
      url: '/noLinesList',
      icon: 'list'
    },
    {
      title: 'Sliding List',
      url: '/altSlidingList',
      icon: 'list'
    },
    {
      title: 'Thumbnail List',
      url: '/altThumbnailList',
      icon: 'list'
    }*/
  ];

  /* public walletPages = [
    {
      title: 'Cards',
      url: '/cards',
      icon: 'list'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'list'
    },
    {
      title: 'Expense Overview',
      url: '/expenseOverview',
      icon: 'list'
    },
    {
      title: 'Payment History',
      url: '/paymentHistory',
      icon: 'list'
    },
    {
      title: 'Wallet',
      url: '/wallet',
      icon: 'list'
    },
    {
      title: 'Wallet Alternative',
      url: '/walletAlt',
      icon: 'list'
    }
  ];

  public organizerPages = [
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'list'
    },
    {
      title: 'Day Overview',
      url: '/dayOverview',
      icon: 'list'
    },
    {
      title: 'Schedule Day',
      url: '/scheduleDay',
      icon: 'list'
    },
    {
      title: 'Schedule Months',
      url: '/scheduleMonth',
      icon: 'list'
    }
  ];
*/
  public introPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Home Alternative',
      url: '/homeAlt',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'list'
    },
    {
      title: 'Login with Background',
      url: '/loginBackground',
      icon: 'list'
    },
    {
      title: 'Login with Footer',
      url: '/loginFooter',
      icon: 'list'
    }
  ];
/*
  public walkthroughPages = [
    {
      title: 'Walkthrough',
      url: '/walkthrough',
      icon: 'list'
    },
    {
      title: 'Walkthrough Alternative',
      url: '/walkthroughAlt',
      icon: 'list'
    },
    {
      title: 'Walkthrough Page Slider',
      url: '/walkthroughSlider',
      icon: 'list'
    }
  ];

  public profilePages = [
    {
      title: 'Profile Settings',
      url: '/profileSettings',
      icon: 'list'
    },
    {
      title: 'Profile Settings Alternative',
      url: '/alternativeProfile',
      icon: 'list'
    }
  ];

  public accountPages = [
    {
      title: 'Add an Account',
      url: '/addAccount',
      icon: 'list'
    },
    {
      title: 'Sign Up',
      url: '/signup',
      icon: 'list'
    },
    {
      title: 'Sign Up Alternative',
      url: '/signupAlt',
      icon: 'list'
    }
  ];

  public formPages = [
    {
      title: 'Contact Form',
      url: '/contactForm',
      icon: 'list'
    },
    {
      title: 'Contact Form Alternative',
      url: '/contactFormAlt',
      icon: 'list'
    },
    {
      title: 'Inputs and Validation',
      url: '/inputs',
      icon: 'list'
    }
  ];

  public cloudPages = [
    {
      title: 'Cloud',
      url: '/cloud',
      icon: 'list'
    },
    {
      title: 'Mail',
      url: '/mail',
      icon: 'list'
    },
    {
      title: 'Storage',
      url: '/storage',
      icon: 'list'
    }
  ];

  public conference = [
    {
      title: 'Agenda',
      url: '/agenda',
      icon: 'list'
    },
    {
      title: 'Sponsors',
      url: '/sponsors',
      icon: 'list'
    },
    {
      title: 'Speakers',
      url: '/speakers',
      icon: 'list'
    },
    {
      title: 'Speaker Details',
      url: '/speaker-details',
      icon: 'list'
    },
    {
      title: 'Session Details',
      url: '/session-details',
      icon: 'list'
    }
  ];

  public eventPages = [
    {
      title: 'Calendar Event',
      url: '/calendarEvent',
      icon: 'list'
    },
    {
      title: 'Event Details',
      url: '/eventDetails',
      icon: 'list'
    },
    {
      title: 'Events List',
      url: '/eventsList',
      icon: 'list'
    }
  ];

  public commercePages = [
    {
      title: 'Commerce Home',
      url: '/commerce-home',
      icon: 'list'
    },
    {
      title: 'Albums',
      url: '/albums',
      icon: 'list'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'list'
    },
    {
      title: 'Product Details',
      url: '/product-details',
      icon: 'list'
    },
    {
      title: 'Product Details Second',
      url: '/product-details-second',
      icon: 'list'
    },
    {
      title: 'Product Details Third',
      url: '/product-details-third',
      icon: 'list'
    },
    {
      title: 'Product Details Fourth',
      url: '/product-details-fourth',
      icon: 'list'
    },
    {
      title: 'Products Grid',
      url: '/products-grid',
      icon: 'list'
    },
    {
      title: 'Products List',
      url: '/products-list',
      icon: 'list'
    },
    {
      title: 'Order History',
      url: '/order-history',
      icon: 'list'
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'basket'
    },
    {
      title: 'Delivery',
      url: '/delivery',
      icon: 'pin'
    },
    {
      title: 'Payment',
      url: '/payment',
      icon: 'card'
    },
    {
      title: 'Confirmation',
      url: '/confirmation',
      icon: 'checkmark'
    },
    {
      title: 'Order Finish',
      url: '/order-finish',
      icon: 'flag'
    }
  ];

  public socialPages = [
    {
      title: 'Subscribers',
      url: '/subscribers',
      icon: 'list'
    },
    {
      title: 'Friends',
      url: '/friends',
      icon: 'list'
    },
    {
      title: 'Followers',
      url: '/followers',
      icon: 'list'
    }
  ];


  public food = [
    {
      title: 'Recipes Grid',
      url: '/recipes-grid',
      icon: 'list'
    },
    {
      title: 'Recipes List',
      url: '/recipes-list',
      icon: 'list'
    }
  ];

  public emptyStatePages = [
    {
      title: 'No Planned Events',
      url: '/emptyeventsfirst',
      icon: 'list'
    },
    {
      title: 'No Trips',
      url: '/emptyeventssecond',
      icon: 'list'
    },
    {
      title: 'No Events Here',
      url: '/emptyeventsthird',
      icon: 'list'
    },
    {
      title: 'Nothing to do',
      url: '/emptyeventsfourth',
      icon: 'list'
    },
    {
      title: 'No Trips',
      url: '/emptyeventsfifth',
      icon: 'list'
    },
    {
      title: 'No Friends',
      url: '/emptyfriendsfirst',
      icon: 'list'
    },
    {
      title: 'More Fun with Friends',
      url: '/emptyfriendssecond',
      icon: 'list'
    },
    {
      title: 'Noone Around',
      url: '/emptyfriendsthird',
      icon: 'list'
    },
    {
      title: 'Add Some Friends',
      url: '/emptyfriendsfourth',
      icon: 'list'
    },
    {
      title: 'Better with Friends',
      url: '/emptyfriendsfifth',
      icon: 'list'
    },
    {
      title: 'No Messages',
      url: '/emptyinboxfirst',
      icon: 'list'
    },
    {
      title: 'No Chats',
      url: '/emptyinboxsecond',
      icon: 'list'
    },
    {
      title: 'No mail',
      url: '/emptyinboxthird',
      icon: 'list'
    },
    {
      title: 'Inbox Empty',
      url: '/emptyinboxfourth',
      icon: 'list'
    },
    {
      title: 'No Notifications',
      url: '/emptynotificationfirst',
      icon: 'list'
    },
    {
      title: 'All Caught Up',
      url: '/emptynotificationsecond',
      icon: 'list'
    },
    {
      title: 'You Have None',
      url: '/emptynotificationthird',
      icon: 'list'
    },
    {
      title: 'No Notifications',
      url: '/emptynotificationfourth',
      icon: 'list'
    },
    {
      title: 'All Caught Up',
      url: '/emptynotificationfifth',
      icon: 'list'
    },
    {
      title: 'No Photos',
      url: '/emptyphotosfirst',
      icon: 'list'
    },
    {
      title: 'Take Some Pictures',
      url: '/emptyphotossecond',
      icon: 'list'
    },
    {
      title: 'No Photos Here',
      url: '/emptyphotosthird',
      icon: 'list'
    },
    {
      title: 'It\'s Lonely Here',
      url: '/emptyphotosfourth',
      icon: 'list'
    },
    {
      title: 'You have no Pictures',
      url: '/emptyphotosfifth',
      icon: 'list'
    },
    {
      title: 'No Purchases',
      url: '/emptypurchasesfirst',
      icon: 'list'
    },
    {
      title: 'Buy Some Stuff',
      url: '/emptypurchasessecond',
      icon: 'list'
    },
    {
      title: 'Nothing In Here',
      url: '/emptypurchasesthird',
      icon: 'list'
    },
    {
      title: 'No Orders',
      url: '/emptypurchasesfourth',
      icon: 'list'
    },
    {
      title: 'No Orders',
      url: '/emptypurchasesfifth',
      icon: 'list'
    },
    {
      title: 'No Sent Mail',
      url: '/emptysentfirst',
      icon: 'list'
    },
    {
      title: 'No Tasks Here',
      url: '/emptytasksfirst',
      icon: 'list'
    },
    {
      title: 'No Tasks',
      url: '/emptytaskssecond',
      icon: 'list'
    },
    {
      title: 'All Done',
      url: '/emptytasksthird',
      icon: 'list'
    },
    {
      title: 'Nothing to do',
      url: '/emptytasksfourth',
      icon: 'list'
    },
    {
      title: 'All done',
      url: '/emptytasksfifth',
      icon: 'list'
    },
    {
      title: 'No Videos',
      url: '/emptyvideosfirst',
      icon: 'list'
    },
    {
      title: 'Record Some Videos',
      url: '/emptyvideossecond',
      icon: 'list'
    },
    {
      title: 'No Videos Here',
      url: '/emptyvideosthird',
      icon: 'list'
    },
    {
      title: 'No Videos',
      url: '/emptyvideosfourth',
      icon: 'list'
    },
    {
      title: 'Add some videos',
      url: '/emptyvideosfifth',
      icon: 'list'
    },
    {
      title: 'Oops! No Credits',
      url: '/emptywalletfirst',
      icon: 'list'
    },
    {
      title: 'Out of Credit',
      url: '/emptywalletsecond',
      icon: 'list'
    },
    {
      title: 'No Payment Methods',
      url: '/emptywalletthird',
      icon: 'list'
    },
    {
      title: 'No payment providers',
      url: '/emptywalletfourth',
      icon: 'list'
    },
    {
      title: 'Your wallet',
      url: '/emptywalletfifth',
      icon: 'list'
    }
  ];

  public componentPages = [
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'list'
    },
    {
      title: 'Dropdowns',
      url: '/dropdowns',
      icon: 'list'
    },
    {
      title: 'Toggles and Sliders',
      url: '/selectors',
      icon: 'list'
    }
  ];

  public enhancedListPages = [
    {
      title: 'Buttons and Thumb List',
      url: '/thumbButtonsList',
      icon: 'list'
    },
    {
      title: 'Buttons and Thumb List Alternative',
      url: '/thumbButtonsListAlt',
      icon: 'list'
    },
    {
      title: 'Condensed List',
      url: '/condensedList',
      icon: 'list'
    },
    {
      title: 'Condensed Sliding List',
      url: '/condensedSlidingList',
      icon: 'list'
    },
    {
      title: 'Grid Tiles',
      url: '/gridTiles',
      icon: 'list'
    },
    {
      title: 'Ordered List',
      url: '/orderedList',
      icon: 'list'
    },
    {
      title: 'Sliding List',
      url: '/slidingList',
      icon: 'list'
    },
    {
      title: 'Thumbnail List',
      url: '/listThumbStart',
      icon: 'list'
    },
    {
      title: 'Thumbnail List Clean',
      url: '/listThumbCentered',
      icon: 'list'
    },
    {
      title: 'Thumbnail List Reversed',
      url: '/listThumbEnd',
      icon: 'list'
    }
  ];

  public ionicListPages = [
    {
      title: 'Avatar List',
      url: '/avatarList',
      icon: 'list'
    },
    {
      title: 'Basic List',
      url: '/basicList',
      icon: 'list'
    },
    {
      title: 'Dividers List',
      url: '/dividersList',
      icon: 'list'
    },
    {
      title: 'Headers List',
      url: '/headersList',
      icon: 'list'
    },
    {
      title: 'Icon List',
      url: '/iconList',
      icon: 'list'
    },
    {
      title: 'Inset List',
      url: '/insetList',
      icon: 'list'
    },
    {
      title: 'Multi-line List',
      url: '/multiLineList',
      icon: 'list'
    },
    {
      title: 'No Lines List',
      url: '/noLinesList',
      icon: 'list'
    },
    {
      title: 'Sliding List',
      url: '/altSlidingList',
      icon: 'list'
    },
    {
      title: 'Thumbnail List',
      url: '/altThumbnailList',
      icon: 'list'
    }
  ]; */

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
