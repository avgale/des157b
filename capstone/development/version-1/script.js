(function () {
    'use strict';

    async function loadFonts() {
        try {
            await document.fonts.ready;

            /* Setup scroll */
            gsap.set("#stage1", { opacity: 1 });

            const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-stage",
                start: "top top",
                end: "+=400%",
                scrub: true,
                pin: true,
            }
            });

            timeline
                .to("#stage1", { opacity: 0, duration: 0.5 })
                .fromTo("#stage2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .to("#stage2", { opacity: 0, duration: 1 })
                .fromTo("#stage3", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .to("#stage3", { opacity: 0, duration: 1 })
                .fromTo("#stage4", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .to("#stage4", { opacity: 0, duration: 1 })
                .fromTo("#stage5", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .to("#stage5", { opacity: 0, duration: 1 })
                .fromTo("#stage6", { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .to("#stage6", { opacity: 0, duration: 1 })
                .fromTo("#stage7", { opacity: 0 }, { opacity: 1, duration: 0.5 });
        } catch (error) {
            console.log(`Fonts couldn't load: ${error}`);
        }

    }

    loadFonts();
})();
