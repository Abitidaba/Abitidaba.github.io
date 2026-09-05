/* =========================================
   DRIP OR DROWN IRRIGATION
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       CURRENT YEAR
    ===================================== */

    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const mainNav =
        document.querySelector(".main-nav");


    if (menuButton && mainNav) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.toggle("mobile-open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =====================================
       MOBILE SERVICES DROPDOWN
    ===================================== */

    const dropdownToggle =
        document.querySelector(".dropdown-toggle");

    if (dropdownToggle) {

        dropdownToggle.addEventListener(
            "click",
            function (event) {

                if (window.innerWidth <= 950) {

                    event.preventDefault();

                    const dropdown =
                        this.closest(".nav-dropdown");

                    dropdown.classList.toggle(
                        "mobile-open"
                    );

                }

            }
        );

    }


    /* =====================================
       HEADER SHADOW ON SCROLL
    ===================================== */

    const header =
        document.querySelector(".main-header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader
    );


    /* =====================================
       FAQ ACCORDION
    ===================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener(
            "click",
            function () {

                const faqItem =
                    question.parentElement;

                const answer =
                    faqItem.querySelector(".faq-answer");

                const isOpen =
                    faqItem.classList.contains("active");


                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        item.classList.remove("active");

                        const itemQuestion =
                            item.querySelector(".faq-question");

                        const itemAnswer =
                            item.querySelector(".faq-answer");

                        if (itemQuestion) {
                            itemQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }

                        if (itemAnswer) {
                            itemAnswer.style.maxHeight = null;
                        }

                    });


                if (!isOpen) {

                    faqItem.classList.add("active");

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";

                }

            }
        );

    });


    /* =====================================
       PAGE TRANSITION
    ===================================== */

    const transition =
        document.createElement("div");

    transition.className =
        "page-transition";

    transition.innerHTML = `

        <div class="page-transition-content">

            <img
                src="images/logo.png"
                alt="Drip or Drown Irrigation"
                class="page-transition-logo"
            >

            <p class="page-transition-text">
                Drip or Drown Irrigation
            </p>

        </div>

    `;

    document.body.prepend(transition);


    window.setTimeout(function () {

        transition.classList.add("hidden");

    }, 350);


    /* =====================================
       PAGE LINK TRANSITIONS
    ===================================== */

    const pageLinks =
        document.querySelectorAll("a");


    pageLinks.forEach(function (link) {

        const destination =
            link.getAttribute("href");


        if (!destination) return;

        if (
            destination.startsWith("tel:") ||
            destination.startsWith("mailto:") ||
            destination.startsWith("http") ||
            destination.startsWith("#") ||
            destination.startsWith("javascript:")
        ) {
            return;
        }


        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                transition.classList.remove(
                    "hidden"
                );


                window.setTimeout(
                    function () {

                        window.location.href =
                            destination;

                    },
                    350
                );

            }
        );

    });


});
