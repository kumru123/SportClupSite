function openModal(src, caption, type = 'image') {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");
    const modalCaption = document.getElementById("modalCaption");

    // Önceki içeriği temizle
    modalContent.innerHTML = "";

    // İçeriği oluştur
    if (type === 'video') {
        const videoElement = document.createElement("video");
        videoElement.src = src;
        videoElement.controls = true; // Video kontrollerini ekle
        modalContent.appendChild(videoElement);
    } else {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        modalContent.appendChild(imgElement);
    }

    modalCaption.innerText = caption;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}