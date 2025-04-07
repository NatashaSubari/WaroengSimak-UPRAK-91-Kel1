document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".ddhorizontal");

    dropdowns.forEach((dropdown) => {
        const content = dropdown.querySelector(".dd-content");

        content.style.opacity = "0";
        content.style.visibility = "hidden";
        content.style.transform = "translateY(-10px)";
        content.style.transition = "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease";

        dropdown.addEventListener("mouseenter", () => {
            content.style.opacity = "1";
            content.style.visibility = "visible";
            content.style.transform = "translateY(0)";
        });

        dropdown.addEventListener("mouseleave", () => {
            content.style.opacity = "0";
            content.style.visibility = "hidden";
            content.style.transform = "translateY(-10px)";
        });
    });
});

window.onscroll = function() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll('.perkenalananggota').forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.classList.add('active');
    });

    member.addEventListener('mouseleave', () => {
        member.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxContainer = document.getElementById("box");
    const closedBox = document.getElementById("closedBox");
    const openBox = document.getElementById("openBox");
    const popup = document.getElementById("popup");

    let isOpen = false;

    boxContainer.addEventListener("click", function () {
        if (!isOpen) {
            closedBox.style.opacity = "0"; 
            openBox.style.opacity = "1"; 
            popup.classList.add("show-popup"); 
        } else {
            closedBox.style.opacity = "1"; 
            openBox.style.opacity = "0";  
            popup.classList.remove("show-popup"); 
        }
        isOpen = !isOpen;
    });
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
        document.getElementById("content").style.display = "block";
    }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    document.addEventListener("mousedown", (e) => {
        const effect = document.createElement("div");
        effect.classList.add("click-effect");
        document.body.appendChild(effect);

        effect.style.left = `${e.pageX}px`;
        effect.style.top = `${e.pageY}px`;

        requestAnimationFrame(() => {
            effect.style.transform = "translate(-50%, -50%) scale(3)";
            effect.style.opacity = "0";
        });

        setTimeout(() => {
            effect.remove();
        }, 500);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("monthYear");
    const daysContainer = document.querySelector(".days");
    const prevBtn = document.getElementById("prevcalendar");
    const nextBtn = document.getElementById("nextcalendar");

    let date = new Date();
    const today = new Date();

    function renderCalendar() {
        const month = date.getMonth();
        const year = date.getFullYear();
        monthYear.innerText = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
        daysContainer.innerHTML = "";

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement("div");
            daysContainer.appendChild(emptyDiv);
        }

        for (let i = 1; i <= lastDate; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = i;

            if ((firstDay + i - 1) % 7 === 0) {
                dayElement.classList.add("red-day");
            }

            if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                dayElement.classList.add("today");
            }

            dayElement.addEventListener("click", () => {
                document.querySelectorAll(".day").forEach(day => day.classList.remove("selected"));
                dayElement.classList.add("selected");
            });

            daysContainer.appendChild(dayElement);
        }

        daysContainer.classList.remove("show");
        setTimeout(() => daysContainer.classList.add("show"), 100);
    }

    prevBtn.addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});

window.addEventListener("scroll", function() {
    let scrollValue = window.scrollY;
    let leftImage = document.getElementById("leftimage");
    let rightImage = document.getElementById("rightimage");
    let bannerHeight = document.querySelector(".banner").offsetHeight;

    let movePercentage = Math.min(scrollValue / bannerHeight, 1);

    leftImage.style.transform = `translate(${movePercentage * (window.innerWidth - leftImage.offsetWidth)}px, -50%)`;
    rightImage.style.transform = `translate(-${movePercentage * (window.innerWidth - rightImage.offsetWidth)}px, -50%)`;
});

document.addEventListener("DOMContentLoaded", () => {
    let angle = 0;
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;
    const carousel = document.querySelector('.carousel');

    if (!carousel || items.length === 0) return; // Prevents errors if the carousel is missing on some pages

    function updateItems() {
        items.forEach((item, index) => {
            const rotation = (360 / totalItems) * index + angle;
            item.style.transform = `rotateY(${rotation}deg) translateZ(250px)`;
        });
    }

    function rotateCarousel(direction) {
        angle += direction * (360 / totalItems);
        updateItems();
    }

    items.forEach(item => {
        item.style.transition = 'transform 0.5s ease-in-out';
    });

    updateItems();

    document.querySelector('.next')?.addEventListener('click', () => rotateCarousel(-1));
    document.querySelector('.prev')?.addEventListener('click', () => rotateCarousel(1));

    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentIndex = 0;

        function nextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }

        setInterval(nextSlide, 3000);
    }
});


