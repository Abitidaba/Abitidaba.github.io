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
