(function () {
    'use strict';

    async function loadFonts() {
        try {
            await document.fonts.ready;

            gsap.registerPlugin(ScrollTrigger, SplitText);

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
                .add(() => hoverEvents(), "-0.5")
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
                .to("#stage14", { opacity: 0, duration: 0.5 })

                .fromTo("#stage15", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage16 p"), "-=0.5")
                .to("#stage15", { opacity: 0, duration: 0.5 })

                .fromTo("#stage16", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .add(() => splitAnimate("#stage16 p"), "-=0.5")

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

        } catch (error) {
            console.log(`Fonts couldn't load: ${error}`);
        }

    }

    loadFonts();
})();
