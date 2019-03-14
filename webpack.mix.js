// let mix = require('laravel-mix');
//
// var tailwindcss = require('tailwindcss');
//
// mix.sass('css/pricing.scss', 'dist/').options({//node_modules\.bin\webpack --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js
// // reference https://tailwindcss.com/docs/installation for the reason of adding options for Tailwind
//     processCssUrls: false,
//     postCss: [ tailwindcss('twconfig.js') ]
// }).setPublicPath('./');//by adding this line will solve stuck at the 95% emitting issue.


//alternative way to the above one; you need install laravel-mix-tailwind through npm, be note: you need keep the default tailwind.js as tailwind config file when using tailwind() to compile scss to css.
let mix = require('laravel-mix');

require('laravel-mix-tailwind');


mix.sass('css/pricing.scss', 'distt/').tailwind();//typing node_modules\.bin\webpack --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js to compile

// mix.sass('css/ActionBanner.sass', 'distt/').tailwind();