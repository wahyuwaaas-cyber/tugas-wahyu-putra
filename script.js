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
function pesanSekarang(){
    document.getElementById("namapesanan").innerHTML=
    `
    pesanan akan segera diantar ke alamat anda, terimakasih telah memesan
    `;
}