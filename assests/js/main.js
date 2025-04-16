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


const targetDate = new Date("2030-01-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(4, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    document.getElementById("days").innerText = "0000";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}

setInterval(updateCountdown, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".schedule-a");
    const forms = document.querySelectorAll(".schedule-items");

    if (tabs.length === 0 || forms.length === 0) {
        return;
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            const target = this.getAttribute("data-target");
            const targetForm = document.getElementById(target);

            if (!targetForm) {
                console.error(`No element found with id: ${target}`);
                return;
            }

            tabs.forEach(t => t.classList.remove("active"));
            forms.forEach(form => form.classList.remove("active"));

            this.classList.add("active");
            targetForm.classList.add("active");
        });
    });
    if (tabs[0] && forms[0]) {
        tabs[0].classList.add("active");
        forms[0].classList.add("active");
    }
});
  
  const counters = document.querySelectorAll(".count");
  const options = {
    threshold: 0.6, 
  };
  const runCounter = (counter) => {
    let startNumber = 0;
    const endNumber = +counter.getAttribute("data-number");
    const interval = setInterval(() => {
      startNumber++;
      counter.innerText = startNumber;
      if (startNumber >= endNumber) {
        clearInterval(interval);
      }
    }, 30); 
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target); 
      }
    });
  }, options);
  counters.forEach((counter) => {
    observer.observe(counter);
  });
  