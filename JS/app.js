const sun = document.querySelector('#sun');
const daySky = document.querySelector('#daySky');
const nightSky = document.querySelector('#nightSky');

if (nightSky && window.NIGHT_SKY_DATA_URL) {
    nightSky.setAttribute('src', window.NIGHT_SKY_DATA_URL);
}

function updateSkyTransition() {
    if (!sun || !daySky || !nightSky) return;

    const sunY = sun.object3D.position.y;
    const nightOpacity = Math.max(0, Math.min(1, (10 - sunY) / 10));

    daySky.setAttribute('material', 'opacity', 1 - nightOpacity);
    nightSky.setAttribute('material', 'opacity', nightOpacity);
}

setInterval(updateSkyTransition, 100);

AFRAME.registerComponent('interactief-object', {
    init: function () {
        let element = this.el;

        element.addEventListener('click', function () {
            let kleuren = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
            let randomKleur = kleuren[Math.floor(Math.random() * kleuren.length)];

            element.setAttribute('color', randomKleur);
            element.setAttribute('scale', '1.2 1.2 1.2');
        });
    }
});
