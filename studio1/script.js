(function() {
    'use strict';

    const fs = document.querySelector("#fullscreen");
    const vid = document.querySelector("#myVideo");
    const sec = document.querySelector("section");
    let popups = document.querySelector("#popups");

    let three;
    let two;
    let one;
    let go;
    let interval;

    run();
    
    function run() {
        three = setTimeout(function(){popups.innerHTML = "2"}, 1000);
        two = setTimeout(function(){popups.innerHTML = "1"}, 2000);
        one = setTimeout(startVid, 3000);
        go = setTimeout(startInterval, 3000);
    }

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

        if (27 < vid.currentTime) {
            restart();
        }
    }

    function startVid() {
        vid.play();
        sec.className = "hidden";
    }

    function startInterval() {
        interval = setInterval(checkTime, 1000);
    }

    function restart() {
        clearTimeout(three);
        clearTimeout(two);
        clearTimeout(one);
        clearTimeout(go);
        clearInterval(interval);
        popups.innerHTML = "3";
        popups.style.fontSize = "8em";
        sec.className = "showing";
        vid.currentTime = 0;
        vid.pause();
        run();
    }
})();