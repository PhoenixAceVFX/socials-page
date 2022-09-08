class FluidAnimate {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.paths = Array.from(this.DOM.el.querySelectorAll('path'));
        this.animate();
    }
    animate() {
        this.DOM.paths.forEach((path) => {
            setTimeout(() => {
                anime({
                    targets: path,
                    duration: anime.random(2500, 5000),
                    easing: [0.5, 0, 0.5, 1],
                    d: path.getAttribute('pathdata:id'),
                    loop: true,
                    direction: 'alternate',
                    translateX: 70,
                });
            }, anime.random(0, 2000));
        });
    }
};

function stopState() {
    let paths = document.querySelectorAll('path');
    for (i = 0; i < paths.length; i++) {
        anime.remove(paths[i]);
    }
}

function startState() {
    new FluidAnimate(document.querySelector('svg.scene'));
}
startState();
document.documentElement.className = "js";

function supportsCssVars() {
    var e, t = document.createElement("style");
    return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
};
supportsCssVars() || alert("Esta versão do navegador não suporta as animações do CSS. Por favor, use um navegador moderno");