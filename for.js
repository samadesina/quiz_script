// var html ="";
// for (var i =1; i <1000; i++){
//    html += '<div>'+ i +'</div>';
// }

// document.write(html);

// var html ='';

// for ( var i = 0; i < 100; i++) {
//    html += '<div>'+ i + '</div>';
    
// }
// document.write (html);


var html = '';
var red;
var green;
var blue;
var rgbColor;
 for (var i=1; i<10 ;i++){
red = Math.floor(Math.random() *256);
green = Math.floor(Math.random() *256);
blue = Math.floor(Math.random() *256);
rgbColor = 'rgb (' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' +rgbColor +'"></div>';
}
document.write(html);
