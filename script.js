



function openModal(imageSrc, captionText) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex"; // Modali aç
    modalImage.src = imageSrc; // Görselin kaynağını ayarla
    //modalCaption.innerHTML = "njnojojoıjj"; // Açıklamayı ayarla
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Modali kapat
}









