phonetype();
console.log(window.USERTYPE)

function phonetype(){
    let type = window.USERTYPE;

    if(type == 'ios'){
        document.querySelector('#ios').style.display = "inline-block";
        document.querySelector('#doc').style.display = "block";
    }else{
        document.querySelector('#android').style.display = "inline-block";
        
    }
}
