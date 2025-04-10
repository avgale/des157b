(function() {
    'use strict';

    const fs = document.querySelector("#fullscreen");
    const vid = document.querySelector("#myVideo");
    const sec = document.querySelector("section");
    let popups = document.querySelector("#popups");

    setTimeout(function(){popups.innerHTML = "2"}, 1000);
    setTimeout(function(){popups.innerHTML = "1"}, 2000);
    setTimeout(startVid, 3000);
    setTimeout(startInterval, 3000);

    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    function checkTime() {
        popups.style.fontSize = "3em";
        if (2 < vid.currentTime && vid.currentTime < 6) {
            sec.className = "showing";
            popups.innerHTML = "Sydney, Australia";
            vid.style.filter = "blur(10px)";
        } else if (10 < vid.currentTime && vid.currentTime < 14) {
            sec.className = "showing";
            popups.innerHTML = "New Years";
            vid.style.filter = "blur(10px)";
        } else if (18 < vid.currentTime && vid.currentTime < 22) {
            sec.className = "showing";
            popups.innerHTML = "2024";
            vid.style.filter = "blur(10px)";
        } else {
            sec.className = "hidden";
            vid.style.filter = "none";
        }
    }

    function startVid() {
        vid.play();
        sec.className = "hidden";
    }

    function startInterval() {
        setInterval(checkTime, 1000);
    }
})();