# Ionic Stencil Essential
Ionic Essential Stencil is a UI kit that contains beautifully crafted, frequently used screens allowing developers to build gorgeous and highly customizable mobile apps with minimal effort.

## Dependecies, Run and Build

### Install Ionic CLI
To build and run this app you need to have Ionic CLI installed

```bash
$ sudo npm install -g @ionic/cli
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g @ionic/cli@{ionic_version}
```

eg:
```bash
$ sudo npm install -g @ionic/cli@5.0.0
```

### Install NodeJS dependencies
Run `$ npm install` to install all needed dependencies.

### Install plugins from package.json
Run `$ ionic cordova prepare ios` to install all Cordova plugins included in the package.json and add iOS platform to your project.

Run `$ ionic cordova prepare android` to install all Cordova plugins included in the package.json and add Android platform to your project.

### Run the app
Use `$ ionic serve -l` to run the app in browser for multiple platforms

or

use `$ ionic serve` to just run the app for a browser preview

### Add a platform
```bash
$ ionic cordova platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

### Build the app
```bash
$ ionic cordova build
```

### Εmulate the app on simulator
iOS:
```bash
$ ionic cordova emulate ios
```

Android:
```bash
$ ionic cordova emulate android
```

### Plugins installation
Use the following commands and install all the plugins required by the app:
```bash
$ ionic cordova plugin add {plugin id or url}
```

eg:
```bash
$ ionic cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-statusbar** - This plugin provides some functions to customize the iOS and Android StatusBar.
* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-ionic-webview** - The Web View plugin for Cordova that is specialized for Ionic apps.
* **cordova-plugin-ionic-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.

## Demo
* [Web Demo](http://appseed.io/ionic-stencil-essential#demo)

## Documentation
* [Ionic Stencil Essential Guide](https://docs.google.com/document/d/1PzbX3R5I2WEPQDsYeDLgGCF2Lu8eNKxEIFnHTjilvZM/edit?usp=sharing)

## Changelog
```
5.0 - Jul 16, 2020
- Initial release

1.6 - Mar 12, 2020
- Create pages related to Conference/Event:
- Agenda
- Session Details
- Speakers
- Speaker Details
- Sponsors

1.5 - Nov 11, 2019
- Add more "Product Details" pages
- Create "Cart" page
- Create "Delivery" page
- Create "Payment" page
- Create "Confirmation" page
- Create "Order Finish" page
- Create "Recipes" page
- Create "Payment" page
- Create "Friends" page
- Create "Followers" page
- Create "Subscribers" page

1.4 - August 5, 2019
- Introduce the new "Awesome" theme
- Create "Products Grid" page
- Create "Product Details" page
- Create "Commerce Home" page
- Create "Products List" page

1.3 - May 10, 2019
- Add more Empty State screens
- Update app with Ionic 4.3.0

1.2 - Jan 10, 2019
- Create Dark theme
- Create Empty State screens

1.1 - Dec 12, 2018
- Create "Selectors" page
- Create "Dropdowns" page
- Create "Toggle and Sliders" page
- Create "Inputs and Validation" page
- Create "Login with Background" page
- Create "Login with Footer" page
- Update app with Ionic 4 beta 17 and Angular 7.x

1.0 - Nov 28, 2018
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
