'use strict';
 
var fs = require('fs');
var postcss = require('postcss');
var pxToViewport = require('postcss-px-to-viewport');
var css = fs.readFileSync('topnextnav.scss', 'utf8');
var options = {
    replace: false
};
var processedCss = postcss(pxToViewport(options)).process(css).css;
 try {
  fs.writeFile('topnextnav-converted.css', processedCss, function (err) {
    
      if (err) {
        throw err;
      }
    
    console.log('File with viewport units written.');
  });
}
catch(e){

}