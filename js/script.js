
// navbar

// banner home
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Manually call showSlides function to display the first slide
showSlides(slideIndex);
// submit form
function submitForm() {
    // value input
    var nama = document.getElementById("nama").value;
    var tanggal_lahir = document.getElementById("tanggal_lahir").value;
    var jenis_kelamin = document.getElementById("jenis_kelamin").value;
    var pesan = document.getElementById("pesan").value;

    // menampilkan hasil submit
    var hasilHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggal_lahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenis_kelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    // hasil
    document.getElementById("hasilForm").innerHTML = hasilHTML;
}