project.onmouseover = function( event ){
    let target = event.target;
    if (target.tagName == 'VIDEO'){
        target.play();
    }

}

project.onmouseout = function( event ){
    let target = event.target;
    if (target.tagName == 'VIDEO'){
        target.pause();
    }
}

 