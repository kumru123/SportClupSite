document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".card-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = item.src;
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});


// alert("JavaScript çalışıyor");