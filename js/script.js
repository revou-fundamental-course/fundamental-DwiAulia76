

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