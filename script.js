/* =========================================================
   DRIP OR DROWN IRRIGATION
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton = document.querySelector(".mobile-menu-button");
    const navigation = document.querySelector(".main-nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("mobile-open");

            const isOpen =
                navigation.classList.contains("mobile-open");

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";

        });


        /* Close mobile menu after clicking a link */

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("mobile-open");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });

    }


    /* =====================================================
       NAVIGATION SHADOW ON SCROLL
    ===================================================== */

    const header = document.querySelector(".main-header");

    if (header) {

        function updateHeader() {

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 5px 20px rgba(0, 0, 0, 0.10)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        }

        window.addEventListener(
            "scroll",
            updateHeader
        );

        updateHeader();

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


});
// =========================================
// FAQ ACCORDION
// =========================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem = question.parentElement;
        const answer = faqItem.querySelector(".faq-answer");

        const isOpen = faqItem.classList.contains("active");


        // Close other FAQ questions

        document.querySelectorAll(".faq-item").forEach(function (item) {

            item.classList.remove("active");

            const itemQuestion = item.querySelector(".faq-question");
            const itemAnswer = item.querySelector(".faq-answer");

            itemQuestion.setAttribute("aria-expanded", "false");

            itemAnswer.style.maxHeight = null;

        });


        // Open selected question

        if (!isOpen) {

            faqItem.classList.add("active");

            question.setAttribute("aria-expanded", "true");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});
