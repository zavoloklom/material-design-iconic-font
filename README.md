# [Material Design Iconic Font 2.0.2](http://zavoloklom.github.io/material-design-iconic-font)
#### Material Design Iconic Font and CSS toolkit

[![Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/img/Material-Design-Iconic-Font.png)](http://zavoloklom.github.io/material-design-iconic-font/)

Material Design Iconic Font is a full suite of material design icons (created and maintained by [Google](https://github.com/google/material-design-icons)) for easy scalable vector graphics on websites.

Material Design Icons are the official open-source [icons](http://www.google.com/design/spec/resources/sticker-sheets.html#sticker-sheets-components) featured in the Google [Material Design](http://www.google.com/design/spec) specification.

**Get started** at [http://zavoloklom.github.io/material-design-iconic-font](http://zavoloklom.github.io/material-design-iconic-font)

**Upgrading** from 1.x to 2.x at [old 1.x docs](http://zavoloklom.github.io/material-design-iconic-font/v1/)

## Install
**Download:**    [2.0.2 (ZIP)](https://github.com/zavoloklom/material-design-iconic-font/releases/download/2.0.2/material-design-iconic-font.zip)   
**Bower:**       `bower install material-design-iconic-font`   
**NPM:**         `npm install material-design-iconic-font`

## Getting started
#### EASY: CSS on [CDNjs](https://github.com/cdnjs/cdnjs)
Thanks to the cdnjs.cloudflare.com, you can use CDNjs to add MD Iconic Font into your website without downloading or installing anything!   
- Paste the following code into the <head> section of your site's HTML.  
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.0.2/css/material-design-iconic-font.min.css">`   
- Check out the [Examples pages](http://zavoloklom.github.io/material-design-iconic-font/examples.html) to start using Material Design Iconic Font!   

#### BASIC: Default CSS
Use this method to get the default Material Design Iconic Font CSS.   
- Download latest version of Material Design Iconic Font.   
- Unpack the entire `material-design-iconic-font` archive into your project.   
- In the <head> of your html, reference the location to your material-design-iconic-font.min.css.   
`<link rel="stylesheet" href="path/to/material-design-iconic-font/css/material-design-iconic-font.min.css">`   
- Check out the [Examples pages](http://zavoloklom.github.io/material-design-iconic-font/examples.html) to start using Material Design Iconic Font!   

#### PRO: Custom LESS/SCSS
Use this method to customize Material Design Iconic Font using LESS or SCSS.   
- Download latest version of Material Design Iconic Font.   
- Unpack the entire `material-design-iconic-font` archive into your project.   
- Open your project's `path/to/material-design-iconic-font/less/variables.less` or `path/to/material-design-iconic-font/scss/_variables.scss` and edit the `@md-font-path` variable to point to your font directory.   

> @md-font-path:   "../font";

- You can change prefix `zmdi` to something else by editing `@md-icon-prefix` in `path/to/material-design-iconic-font/less/variables.less` or `path/to/material-design-iconic-font/scss/_variables.scss`

> @md-icon-prefix:       zmdi;

- Re-compile your LESS if using a static compiler.
- Check out the [Examples pages](http://zavoloklom.github.io/material-design-iconic-font/examples.html) to start using Material Design Iconic Font!

## Licence
The full details of how Material Design Iconic Font is licensed and 'Thanks to' section: [License page](http://zavoloklom.github.io/material-design-iconic-font/license.html).

## Browser Support
- Chrome 21+   
- Firefox 22+   
- Opera 12.1+   
- Safari 6.1+   
- IE 10+   
- Android Browser 4.3+   
- Not supported in Opera Mini   

In fact it can work in earlier versions of browsers accordingly to [caniuse.com](http://caniuse.com/) portal (you can check ttf, woff, transform and animation properties), but i can't test it.

## Changelog 
v2.0.2:   
- some minor changes in less/scss/css files for better icons display    

v2.0.1:   
- remove IE8-9 hooks   
- fix "!default" to used properly way in sass code   
[2.0.1 GitHub milestones](https://github.com/zavoloklom/material-design-iconic-font/issues?milestone=2&page=1&state=closed)

v2.0.0:   
- add new Google icons   
- remove duplicated icons to reduce font size   
- resort and rename icons for better search (no backward compatibility with old icon names)  
- no support for IE7-8 (remove eot and svg font files)   
- change icon-prefix to 'zmdi-' for capability with Angular JS   
- add 'fixed-width', 'list' and 'stack' classes  
- add "!default" to sass variables   
- add vars with glyph codes to less/sass   
- add nested pseudo classes for less/sass   
[2.0.0 GitHub milestones](https://github.com/zavoloklom/material-design-iconic-font/issues?milestone=3&page=1&state=closed)

## Versioning
Material Design Iconic Font will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* New icons from Google or changes that breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions, including new non-Google icons, without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit http://semver.org.

## Author
- Email: s.kupletsky@gmail.com
- Twitter: https://twitter.com/zavoloklom
- GitHub: https://github.com/zavoloklom/
- CodePen: http://codepen.io/zavoloklom/
- Dribble: https://dribbble.com/zavoloklom (waiting for invite)

## Donate
- You can support me via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=s%2ekupletsky%40gmail%2ecom&lc=US&item_name=Material%20Design%20Iconic%20Font&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted), [WebMoney](https://funding.webmoney.ru/material-design-iconic-font/donate) or [Gratipay](http://gratipay.com/zavoloklom/)