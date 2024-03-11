function light(show){
    var pic;
    if(show == 0){
        pic= "pic_bulboff.gif";
    }
    else{
        pic= "pic_bulbon.gif";
    }
    document.getElementById('image').src=pic;
}

