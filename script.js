function hitungLuas() {
    var sisiluas = document.getElementById('sisi-luar').Value;
    var result;

    if (sisiluas == ""){
        alert("Maaf anda belum mengisi nilai sisi");
    }
    else {
        result = parseFloat(sisiluas) * parseFloat(sisiluas);

        document.getElementById('rumusLuas').Value = "L = s x s";
    }
}