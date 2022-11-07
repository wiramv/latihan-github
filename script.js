// masukan input
const inputData = document.querySelector(".container input")
// hasil data
const hasilData = document.querySelector(".container .hasil")

// menampilkan angka hasil hitung
const hitung = () => {
    const angka = parseInt(inputData.value)
    hasilData.textContent = Math.pow(angka, 2)
}


