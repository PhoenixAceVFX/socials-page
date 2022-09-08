var loaderElms = document.querySelector('.loading-elms');
var showElms = document.querySelector('.elms-after-loading');
var loaderElmsCont = document.querySelector('.contElms')
var txtLoader = document.querySelector('.loader-h1');
document.body.classList.add('render');
keyAn = true;
setTimeout(() => {
    txtLoader.style.animation = "fadeOut 1s";
}, 1500);
setTimeout(() => {
    txtLoader.style.animation = "fadeIn 1s";
    txtLoader.style.fontSize = "9vw";
    txtLoader.innerHTML = "Now Loading Content";
    keyAn = false;
}, 1800);
setInterval(() => {
    if (keyAn === true) {
        progAnim();
    }
}, 1000);

function setStart() {
    setTimeout(() => {
        keyAn = false;
        loaderElmsCont.style.animation = "fadeOut 1s";
        setTimeout(() => {
            loaderElms.style.display = "none";
        }, 1000);
        document.body.classList.remove('render');
        setTimeout(() => {
            document.body.classList.add('render');
            showElms.style.display = "block";
            setTimeout(() => {
                animMainText();
            }, 500);
        }, 1500);
    }, 5000);
}
setStart();