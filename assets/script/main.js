var card = document.getElementsByClassName('opc')[0];
var text = document.getElementsByClassName('text-card')[0];
var divCardsProjetos = document.getElementById('crd-projetos');
var liBottom = document.getElementById('li-bottom');
var textCenter = document.getElementById('text-center');
var cards = document.getElementsByClassName('opc');
var header = document.getElementsByTagName('header')[0];
var textsHead = document.querySelectorAll('a');
var textsHeadh2 = document.querySelectorAll('h2');
var textDesBottom = document.getElementsByTagName('a');
var textMainNome = document.getElementById("text-mainnome");
var textMain = document.getElementById("text-main");
var body = document.getElementsByTagName('body')[0];
var btnCurriculo = document.getElementById('text-rigth-cpl');
var cardsMainServ = document.getElementById('contents');
var cards2Serv = document.getElementById('cardRow');
var bottomCtn = document.querySelector(".bottom-content");
var divRowFeeds = document.querySelector('.row-coments');
var cardRowFeeds = document.querySelector('.card-coments');
var crdServicos = document.querySelectorAll('.crd-img');
let dIntSobre = document.querySelector('.int-sobre');
let elmGtSec = document.querySelector('#githubsec');
let gradFluidBack = document.querySelector('.grad-bottom-fluid');
let txtBefforeServ = document.querySelector('.txt-beff-serv');
let imgProfileSobre = document.querySelector('.img-profile');
let animElsIn = document.querySelectorAll('.anim-els-in');
var icArrowImgProfile = document.querySelector('.mt-ic-arrow');
var icArrowBackDefault = document.querySelector('.ic-forw');
var contSobre = document.querySelector('.container-sobre');
var contSobreInfo = document.querySelector('.sec-ant-fts');
imgProfileSobre.addEventListener('mouseover', () => {
    arrowHov();
    icArrowImgProfile.classList.add('ic-arrow-opc');
});
imgProfileSobre.addEventListener('mouseout', () => {
    icArrowImgProfile.classList.remove('ic-arrow-opc');
});
imgProfileSobre.addEventListener('click', () => {
    outContSobre();
});
icArrowBackDefault.addEventListener('click', () => {
    outContSobInfo();
});

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var numberOfItems = 4;
    var rainbow = new Rainbow();
    rainbow.setNumberRange(0, numberOfItems + 1);
    rainbow.setSpectrum('#F25162', '#F75A8E', '#B23B85', '#5DC8A3', '#3489d8', '#d42853', '#447dbd', '#2a5ac0');
    txtBefforeServ.style.transform = `translateX(${x*2/70}px)`;
    for (var i = 0; i <= numberOfItems; i++) {
        var hexColour = rainbow.colourAt(i / 2 * 2 / 2);
        var hexCol2 = rainbow.colourAt(i / 2 ^ 2 / 2);
        crdServicos[i].style.background = `linear-gradient(${x*y/5900}deg, #${hexColour}, #${hexCol2})`;
    }
}

function mojMoveImg(event) {
    var x = event.clientX;
    var y = event.clientY;
    dIntSobre.style.backgroundPosition = `${x/35*1-250}px ${y/20*1-250}px`;
}
let txtsShowSecSobre = document.querySelectorAll('#dtxts_sec_in_sobre');
window.onload = function() {
    let satelite = document.getElementsByClassName('svg_53');
    var onScroll = (function() {
        var startPos = 1450;

        function run() {
            var fromTop = window.pageYOffset,
                scrollDelta;
            scrollDelta = (fromTop - startPos) * 1;
            elmGtSec.style.backgroundSize = `${scrollDelta}px ${scrollDelta-200}px`;
        }
        run();
        return run;
    })()
    window.addEventListener('scroll', onScroll);
    body.style.background = "rgb(19, 19, 19)";
    var animShake = "shake 6.8s infinite cubic-bezier(0.77, 0, 0.175, 1)";

    function setHeaderElmsAnim(elms) {
        textsHead[elms].style.color = "white";
        textsHead[elms].style.animation = "jello 2s";
    }
    window.onscroll = function() {
        var posY = window.pageYOffset;
        gradFluidBack.style.transform = `translateY(-${posY-100}px)`;
        var txtTitleMainProjSec = document.querySelector('.title-section-proj');
        var imgProjItm = document.querySelectorAll('.img-proj-itm');
        imgProjItm[0].style.height = `${posY*2/129}vh`;
        imgProjItm[1].style.height = `${posY*2/129}vh`;
        imgProjItm[2].style.height = `${posY*2/129}vh`;
        txtBefforeServ.style.top = `${posY*3/200}%`;
        txtTitleMainProjSec.style.top = `${posY*2/200}%`;
        if (posY === 0) {
            startState();
        }
        if (posY > 689) {
            bottomCtn.style.animation = ctnBott.animIn;
            bottomCtn.style.position = ctnBott.posF;
            txtsSobreAnim();
            stopState();
        }
        if (posY < 600) {
            bottomCtn.style.animation = ctnBott.animOut;
            setTimeout(() => {
                bottomCtn.style.position = ctnBott.posR;
            }, 500);
        }
        if (posY > 800) {
            elsSobreAnimImg();
        }
        if (posY > 2500) {
            elsServicosAnim();
            elsServiBeffAnim();
            textsHead[1].style.color = "white";
            textsHeadh2[2].style.background = "#00000042";
            textsHeadh2[2].style.animation = animShake;
            textsHeadh2[1].style.animation = null;
            textsHeadh2[3].style.animation = null;
            textsHead[0].style.color = "rgb(47, 47, 47)";
            textsHead[2].style.color = "rgb(47, 47, 47)";
            boxAnimation();
            cardsMainServ.style.opacity = 1;
            cardsMainServ.style.animation = "fadeIn 1.5s  cubic-bezier(0.77, 0, 0.175, 1)";
        }
        if (posY > 1700) {
            elsSobreAnim(1);
        }
        if (posY < 2500) {
            textsHead[0].style.color = "white";
            textsHeadh2[1].style.animation = animShake;
            textsHeadh2[1].style.background = "#00000042";
            textsHeadh2[2].style.animation = null;
            textsHead[1].style.color = "rgb(47, 47, 47)";
            textsHead[2].style.animation = null;
            textsHead[2].style.color = "rgb(47, 47, 47)";
        }
        if (posY < 1500) {
            textsHead[0].style.color = "rgb(47, 47, 47)";
            textsHeadh2[1].style.animation = null;
        }
        if (posY > 3250) {
            elsAnimGitSec();
            textsHead[2].style.color = "white";
            textsHeadh2[3].style.animation = animShake;
            textsHeadh2[3].style.background = "#00000042";
            textsHeadh2[1].style.animation = null;
            textsHead[1].style.color = "rgb(47, 47, 47)";
            textsHeadh2[2].style.animation = null;
            textsHead[3].style.color = "rgb(47, 47, 47)";
            textsHeadh2[4].style.animation = null;
            satAnimationRun();
        }
        if (posY > 3500) {
            textsHead[3].style.color = "white";
            textsHeadh2[4].style.animation = animShake;
            textsHeadh2[4].style.background = "#00000042";
            textsHeadh2[2].style.animation = null;
            textsHead[1].style.color = "rgb(47, 47, 47)";
            textsHead[0].style.animation = null;
            textsHeadh2[3].style.animation = null;
            textsHead[2].style.color = "rgb(47, 47, 47)";
        }
    }

    function satAnimationRun() {
        for (var i = 0; i <= 9; i++) {
            var calcRandom1 = Math.floor(Math.random() * 100);
            var calcRandom2 = Math.floor(Math.random() * 500);
            var transMultiple = i + 1 * 100;
            satelite[i].style.transform = `translate(${calcRandom1}px, -${calcRandom2+window.pageYOffset/100}px)`;
            satelite[i].style.transition = `${calcRandom2*10}ms`;
            satelite[i].style.animation = "shine 1.2s infinite cubic-bezier(0.77, 0, 0.175, 1)";
        }
    }
}
let tr = false;
var doc = document.getElementsByClassName('in-feed');
var txtFed = document.getElementsByClassName('feed-txt')[0];
var feedComentsDiv = document.getElementsByClassName('feedbacks-coments')[0];
var form = document.getElementsByTagName('form')[0];

function checkSubmit(e) {
    var animConfigZoomOut = "zoomOutRight 1.4s cubic-bezier(0.77, 0, 0.175, 1)";

    function callFlashTxt() {
        txtFed.style.animation = "flash 1.1s cubic-bezier(0.77, 0, 0.175, 1)";
    }
    if (!tr && e.keyCode == 13) {
        doc[0].style.animation = animConfigZoomOut;
        callFlashTxt();
        setTimeout(() => {
            txtFed.innerHTML = "Escreva seu nome";
        }, 200);
        setTimeout(function() {
            doc[0].style.display = "none";
            txtFed.style.animation = null;
            if (!tr) {
                inputConstructor(doc[1]);
                tr = true;
                setTimeout(() => {
                    doc[1].style.animation = null;
                }, 1350);
            }
        }, 1350);
    } else if (tr && e.keyCode == 13) {
        doc[1].style.animation = animConfigZoomOut;
        callFlashTxt();
        setTimeout(() => {
            txtFed.innerHTML = "Feedbacks";
        }, 200);
        setFeeds();
        setTimeout(function() {
            getFeeds();
            doc[1].style.display = "none";
            txtFed.style.transform = "translateY(-6.5em)";
            setInterval(() => {
                feedComentsDiv.style.display = "block";
            }, 300);
            setInterval(() => {
                boxFeedsAnimation();
            }, 250);
        }, 1000);
    }
}

function inputConstructor(el) {
    el.style.animation = "fadeInLeft 1.4s cubic-bezier(0.77, 0, 0.175, 1)";
    el.style.display = null;
}

function getFeeds() {
    var inner;
    xhttpGet('ajax/feed', function() {
        error(() => {
            console.log(xhttp.error);
        });
        success(function() {
            var el = JSON.parse(xhttp.responseText);
            el.forEach(function(element) {
                inner = `<div class='card-coments'><h1> ${element.nome} </h1></br><h2> ${element.feed} </h2></div>`;
                divRowFeeds.innerHTML += inner;
            });
        });
    });
}

function setFeeds() {
    var formD = new FormData(form)
    xhttpPost('ajax/feedSaveData', function() {
        success(function() {
            console.log(xhttp.responseText);
        });
    }, formD);
}