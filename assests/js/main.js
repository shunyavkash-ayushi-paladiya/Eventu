document.addEventListener("DOMContentLoaded", function () {
    const openReportsBtn = document.getElementById("openModals");
    const reportModal = document.getElementById("report-modals");
    const closeReportsBtn = document.querySelector(".close-icon");
    const body = document.body;

    if (openReportsBtn && reportModal && closeReportsBtn) {
        openReportsBtn.addEventListener("click", function () {
            reportModal.classList.add("show");
            body.style.overflow = "hidden";
        });

        closeReportsBtn.addEventListener("click", function () {
            reportModal.classList.remove("show");
            body.style.overflow = "auto";
        });

        reportModal.addEventListener("click", function (e) {
            if (e.target === reportModal) {
                reportModal.classList.remove("show");
                body.style.overflow = "auto";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const openReportsBtn = document.getElementById("openModal");
    const reportModal = document.getElementById("report-modal");
    const closeReportsBtn = document.querySelector(".close-icons");
    const body = document.body;

    if (openReportsBtn && reportModal && closeReportsBtn) {
        openReportsBtn.addEventListener("click", function () {
            reportModal.classList.add("show");
            body.style.overflow = "hidden";
        });

        closeReportsBtn.addEventListener("click", function () {
            reportModal.classList.remove("show");
            body.style.overflow = "auto";
        });

        reportModal.addEventListener("click", function (e) {
            if (e.target === reportModal) {
                reportModal.classList.remove("show");
                body.style.overflow = "auto";
            }
        });
    }
});