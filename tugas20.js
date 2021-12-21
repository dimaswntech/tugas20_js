// Buatlah pencarian kata “are”,”words” dalam kalimat :

//  “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.”

// sehingga akan tampil seperti gambar berikut :

function tugas(){
    var x = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable";
    console.log(x.match("are"));
    console.log(x.match("words"));
}
tugas();