

project.onmouseover = function( event ){
    let target = event.target;
    target.play();
}
project.onmouseout = function( event ){
    let target = event.target;
    target.pause();
}
 