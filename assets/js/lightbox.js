function openLightbox(imgElement) {
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");

lightbox.style.display = "block";
lightboxImg.src = imgElement.src;
caption.textContent = imgElement.alt;
}

function closeLightbox(event) {
// Prevent close when clicking the image itself
if (event && event.target.id === "lightbox-img") return;
document.getElementById("lightbox").style.display = "none";
}
