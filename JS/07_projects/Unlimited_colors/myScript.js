const box = document.querySelector('.tbox')

setInterval(function(){
    box.innerHTML = new Date().toLocaleTimeString()
}, 1000);

