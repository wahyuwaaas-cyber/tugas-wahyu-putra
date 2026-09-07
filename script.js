function tampilkanNama(){
    document.getElementById("namaAnggota").innerHTML=
    `
    <ol>
       <li>putra(putra@gmail.com)</li>
        <li>wahyu(wahyu@gmail.com)</li>
    </ol>

        <button onclick="location.reload()">
            tutup kembali
        </button>
    `;

}

function validasiForm() {
    var tanggal = document.getElementById("tanggal").value;
    var tanggal2= document.getElementById("tanggal2").value;
    if (new Date(tanggal2) < new Date(tanggal)) {
        alert("Tanggal kembali harus lebih awal dari tanggal berangkat.");
    }
    return true; 
}