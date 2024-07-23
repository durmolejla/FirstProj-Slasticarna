
function prikaziVise() { // button za prikazivanje i skrivanje teksta
    var skriveniTekst = document.getElementById("skriveniTekst");

    if (skriveniTekst.style.display === "none") { //ako je display svojstvo none, element nije vidljiv, prikazuje ga
        skriveniTekst.style.display = "block"; 
        document.getElementById("procitajVise").textContent = "Sakrij";
    } else {
        skriveniTekst.style.display = "none"; //ako je element bio vidljiv, sakriva ga
        document.getElementById("procitajVise").textContent = "Pročitaj više";
    }
}

document.addEventListener("DOMContentLoaded", function() { // js se ucitava tek nakon sto se cijeli sadrzaj ucita
    const scrollContainer = document.querySelector('.galerija');
    const backBtn = document.getElementById('backBtn'); 
    const nextBtn = document.getElementById('nextBtn');

    scrollContainer.addEventListener('wheel', (evt) => { 
        evt.preventDefault(); //blokira defaultno ponasanje scrolla na misu
        scrollContainer.scrollLeft += evt.deltaY; // horizontalno pomijeranje, na pomijeranje tockica vertikalno
    });

    function scrollToNext() { //smooth pomijeranje za 900px desno
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft += 900;  
    }

    function scrollToBack() { //lijevo
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft -= 900;
    }

    nextBtn.addEventListener('click', scrollToNext);
    backBtn.addEventListener('click', scrollToBack);
});

const images = document.querySelectorAll('.kafaslike');
const modal = document.getElementById('enlarged-image-modal');
const modalImg = document.getElementById('enlarged-img');
const closeModal = document.querySelector('.close');

function enlargeImage(event) { //funkcija se poziva kada se klikne na sliku
  const clickedImageSrc = event.target.src; //dohvaca sliku
  modal.style.display = 'block'; 
  modalImg.src = clickedImageSrc; 
}

images.forEach(img => { //postavljanje iste funkcije na svaku sliku
  img.addEventListener('click', enlargeImage);
});

closeModal.addEventListener('click', function () { //izlazak iz slike
  modal.style.display = 'none';
});



