(function () {
    'use strict';

    async function loadFonts() {
        try {
            await document.fonts.ready;

            gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

            gsap.set("#stage1", { opacity: 1 });

            // Setup text Transitions
            const splitAnimate = (selector) => {
                const split = new SplitText(selector, { type: "words,chars" });
                gsap.from(split.chars, {
                    opacity: 0,
                    y: 20,
                    stagger: 0.02,
                    duration: 0.5,
                    ease: "power2.out"
                });
            };

            // Setup scroll
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".scroll-stage",
                    start: "top top",
                    end: "+=1600%",
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to("#stage1", { opacity: 0, duration: 0.5 })

                .fromTo("#stage2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .fromTo("#egg-carton", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.5")
                .add(() => splitAnimate("#stage2 p"), "-=0.5")
                .to("#stage2", { opacity: 0, duration: 0.5 })

                .fromTo("#stage3", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage3 p"), "-=0.5")
                .to("#stage3", { opacity: 0, duration: 0.5 })
                .to("#egg-carton", { opacity: 0, duration: 0.5 })

                .fromTo("#stage4", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage4 p"), "-=0.5")
                .to("#stage4", { opacity: 0, duration: 0.5 })

                .fromTo("#stage5", { opacity: 0 }, { opacity: 1, duration: 0 })
                .fromTo("#stage5", { y: 750}, { y: 0, duration: 1, ease: "power2.out" })
                .to("#stage5", { y: -750, duration: 1, ease: "power2.in" })
                .to("#stage5", { opacity: 0, duration: 0 })

                .fromTo("#stage6", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage6 p"), "-=0.5")
                .to("#stage6", { opacity: 0, duration: 0.5 })

                .fromTo("#stage7", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage7 p"), "-=0.5")
                .to("#stage7", { opacity: 0, duration: 0.5 })

                .fromTo("#stage8", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage8 p"), "-=0.5")
                .to("#stage8", { zIndex: 1, duration: 0 }, "-=0.5")
                .to("#stage8", { opacity: 0, duration: 0.5 })

                .fromTo("#stage9", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .to("#stage9", { zIndex: 1, duration: 0 }, "-=0.5")
                .to("#stage9", { opacity: 0, duration: 0.5 })

                .fromTo("#stage10", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage10 p"), "-=0.5")
                .to("#stage10", { opacity: 0, duration: 0.5 })

                .fromTo("#stage11", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage11 p"), "-=0.5")
                .to("#stage11", { opacity: 0, duration: 0.5 })

                .fromTo("#stage12", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage12 p"), "-=0.5")
                .to("#stage12", { opacity: 0, duration: 0.5 })

                .fromTo("#stage13", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage13 p"), "-=0.5")
                .to("#stage13", { zIndex: 1, duration: 0 }, "-=0.5")
                .to("#stage13", { opacity: 0, duration: 0.5 })

                .fromTo("#stage14", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage14 p"), "-=0.5")
                .to("#next-arrow", { left: "93%", duration: 0 }, "-=0.5")
                .to("#stage14", { zIndex: 1, duration: 0 }, "-=0.5")
                .to("#stage14", { opacity: 0, duration: 0.5 })

                .fromTo("#stage15", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .to("#next-arrow", { left: "50%", duration: 0 }, "-=0.5")
                .add(() => splitAnimate("#stage15 p"), "-=0.5")
                .to("#stage15", { opacity: 0, duration: 0.5 })

                .fromTo("#stage16", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage16 p"), "-=0.5")
                .to("#next-arrow", { opacity: 0, duration: 0 }, "-=0.5")

            // Handle interactive slider
            const slider = document.querySelector("#slider");
            const sliderValue = document.querySelector("#slider-value");
            const greenDot = document.querySelector("#green-dot");
            const greenDotLabel = document.querySelector("#green-dot-label");

            // Update value label
            slider.addEventListener("input", function(){
                
                const value = parseInt(slider.value);
                const min = parseInt(slider.min);
                const max = parseInt(slider.max);

                const percent = (value - min) / (max - min);
                const sliderWidth = slider.offsetWidth;
                const thumbOffset = percent * sliderWidth;

                sliderValue.textContent = value;
                sliderValue.style.left = `${thumbOffset}px`;
            });

            // Show correct answer
            slider.addEventListener("change", function(){
                greenDot.style.opacity = "1";
                greenDotLabel.style.opacity = "1";
            });

            // Hover Events
            const instructionsOverlay = document.querySelector("#instructions-overlay");
            const closeHover = document.querySelector("#close-hover");

            closeHover.addEventListener("click", function(event){
                event.preventDefault();
                instructionsOverlay.style.opacity = "0";
                instructionsOverlay.style.zIndex = "-1";
                hoverEvents();
            })

            function hoverEvents() {
                const iceCream = document.querySelector("#ice-cream");
                const iceCreamCaption = document.querySelector("#ice-cream-caption");
                const yogurt = document.querySelector("#yogurt");
                const yogurtCaption = document.querySelector("#yogurt-caption");
                const milk = document.querySelector("#milk");
                const milkCaption = document.querySelector("#milk-caption");

                iceCream.addEventListener("mouseover", function () {
                    iceCreamCaption.style.opacity = "1";
                    yogurt.style.opacity = "0";
                    milk.style.opacity = "0";
                });

                iceCream.addEventListener("mouseout", function () {
                    iceCreamCaption.style.opacity = "0";
                    yogurt.style.opacity = "1";
                    milk.style.opacity = "1";
                });

                yogurt.addEventListener("mouseover", function () {
                    yogurtCaption.style.opacity = "1";
                    iceCream.style.opacity = "0";
                    milk.style.opacity = "0";
                });

                yogurt.addEventListener("mouseout", function () {
                    yogurtCaption.style.opacity = "0";
                    iceCream.style.opacity = "1";
                    milk.style.opacity = "1";
                });

                milk.addEventListener("mouseover", function () {
                    milkCaption.style.opacity = "1";
                    yogurt.style.opacity = "0";
                    iceCream.style.opacity = "0";
                });

                milk.addEventListener("mouseout", function () {
                    milkCaption.style.opacity = "0";
                    yogurt.style.opacity = "1";
                    iceCream.style.opacity = "1";
                });
            }

            //Future slider
            const futureSlider = document.querySelector("#future-slider");
            const futureImage = document.querySelector("#scene");
            const hoverDiv = document.querySelector("#hover-div");
            const textPopup = document.querySelector("#text-popup");

            futureSlider.addEventListener('input', function(){
                let currVal = this.value;

                if (currVal < 1) {
                    futureImage.src = "images/stage1.svg";
                    hoverDiv.style.width = "100px";
                    hoverDiv.style.height = "50px";
                    hoverDiv.style.left = "42%";
                    hoverDiv.style.top = "15%";
                } else if (currVal < 2) {
                    futureImage.src = "images/stage1-outline.svg";
                    hoverDiv.style.width = "100px";
                    hoverDiv.style.height = "50px";
                    hoverDiv.style.left = "42%";
                    hoverDiv.style.top = "15%";
                } else if (currVal < 3) {
                    futureImage.src = "images/stage2.svg";
                    hoverDiv.style.width = "270px";
                    hoverDiv.style.height = "170px";
                    hoverDiv.style.left = "75.5%";
                    hoverDiv.style.top = "74%";
                    textPopup.style.left = "50%";
                    textPopup.style.width = "50%";
                    textPopup.innerHTML = "Animals are not the only victims of rapidly changing ecosystems. Plants, which are crucial to carbon sequestration and oxygen production, experience huge population losses as well."
                } else if (currVal < 4) {
                    futureImage.src = "images/stage2-outline.svg";
                    hoverDiv.style.width = "270px";
                    hoverDiv.style.height = "170px";
                    hoverDiv.style.left = "75.5%";
                    hoverDiv.style.top = "74%";
                    textPopup.style.left = "50%";
                    textPopup.style.width = "50%";
                } else if (currVal < 5) {
                    futureImage.src = "images/stage3.svg";
                    hoverDiv.style.width = "360px";
                    hoverDiv.style.height = "200px";
                    hoverDiv.style.left = "12%";
                    hoverDiv.style.top = "30%";
                    textPopup.style.left = "70%";
                    textPopup.style.top = "50%";
                    textPopup.style.width = "45%";
                    textPopup.innerHTML = "Global temperatures are expected to rise an average of 2.7°C (4.86°F) by the end of the century. Some estimates range as high as 3.7°C (6.66°F)."
                } else if (currVal < 6) {
                    futureImage.src = "images/stage3-outline.svg";
                    hoverDiv.style.width = "360px";
                    hoverDiv.style.height = "200px";
                    hoverDiv.style.left = "12%";
                    hoverDiv.style.top = "30%";
                    textPopup.style.left = "70%";
                    textPopup.style.top = "50%";
                    textPopup.style.width = "45%";
                } else if (currVal < 7) {
                    futureImage.src = "images/stage4.svg";
                    hoverDiv.style.width = "475px";
                    hoverDiv.style.height = "400px";
                    hoverDiv.style.left = "53%";
                    hoverDiv.style.top = "0%";
                    textPopup.style.left = "40%";
                    textPopup.style.top = "65%";
                    textPopup.style.width = "60%";
                    textPopup.innerHTML = "Continued greenhouse gas emission will continue to pollute the atmosphere, resulting in unhealthy living conditions for humans and all of Earth's other inhabitants."
                } else {
                    futureImage.src = "images/stage4-outline.svg";
                    hoverDiv.style.width = "475px";
                    hoverDiv.style.height = "400px";
                    hoverDiv.style.left = "53%";
                    hoverDiv.style.top = "0%";
                    textPopup.style.left = "40%";
                    textPopup.style.top = "65%";
                    textPopup.style.width = "60%";
                }
            });

            hoverDiv.addEventListener("mouseover", function(){
                textPopup.style.opacity = "1";
            });

            hoverDiv.addEventListener("mouseout", function(){
                textPopup.style.opacity = "0";
            });

            //Sources and Images overlays
            const sources = document.querySelector("#sources");
            const images = document.querySelector("#images");
            const closeSources = document.querySelector("#close-sources");
            const closeImages = document.querySelector("#close-images");
            const sourcesOverlay = document.querySelector("#sources-overlay");
            const imagesOverlay = document.querySelector("#images-overlay");

            sources.addEventListener("click", function(event){
                event.preventDefault();
                sourcesOverlay.style.opacity = "1";
                sourcesOverlay.style.zIndex = "1";
            })

            closeSources.addEventListener("click", function(event){
                event.preventDefault();
                sourcesOverlay.style.opacity = "0";
                sourcesOverlay.style.zIndex = "-1";
            })

            images.addEventListener("click", function(event){
                event.preventDefault();
                imagesOverlay.style.opacity = "1";
                imagesOverlay.style.zIndex = "1";
            })

            closeImages.addEventListener("click", function(event){
                event.preventDefault();
                imagesOverlay.style.opacity = "0";
                imagesOverlay.style.zIndex = "-1";
            })

            //Navigation arrow
            const arrow = document.querySelector("#next-arrow");
            let target = timeline.scrollTrigger;
            let currPosition;
            let i = 1;

            arrow.addEventListener('click', function(){
                currPosition = i*(target.end/16);
                if (i == 3) {
                    currPosition = i*(target.end/16)+200;
                }
                if (i == 4) {
                    currPosition = i*(target.end/16)+800;
                }
                if (i == 5) {
                    currPosition = i*(target.end/16)+1000;
                }
                if (i >= 6) {
                    currPosition = i*(target.end/16)+200;
                }
                if (i >= 10) {
                    currPosition = i*(target.end/16);
                }
                gsap.to(window, { duration: 1, scrollTo: currPosition });
            });

            window.addEventListener('scroll', function(){
                i = Math.round(window.scrollY/753)+1;
            });
            
        } catch (error) {
            console.log(`Fonts couldn't load: ${error}`);
        }

    }

    loadFonts();
})();
