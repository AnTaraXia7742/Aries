const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");
const caption = document.querySelector(".slider-caption");

const captions = [
  "Dek Dumbo Punyaku.",
  "Halo dek Dumbo.",
  "Cilakdor.",
  // Tambahkan keterangan untuk gambar lainnya sesuai urutan
];

let currentIndex = 0;

function updateCaption() {
  caption.textContent = captions[currentIndex];
}

function showImage(index) {
  images.forEach((image, idx) => {
    const translateValue = (idx - index) * 100;
    image.style.transform = `translateX(${translateValue}%)`;
    image.style.left = `${translateValue}%`;
  });
  currentIndex = index;
  updateCaption();
}

updateCaption();

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 5000); // Ubah nilai ini untuk mengatur kecepatan slider

showImage(currentIndex);
