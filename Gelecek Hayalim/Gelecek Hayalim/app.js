let zoomedImageVisible = {};

function showZoomedImage(previewId) {
    const zoomPreview = document.getElementById(previewId);

    zoomPreview.style.display = 'block';
    zoomedImageVisible[previewId] = true;

    document.querySelector('.world-map').classList.add('blurred');

    console.log('Zoom preview showing for image: ', previewId);
}

function hideZoomedImage(previewId) {
    const zoomPreview = document.getElementById(previewId);
    if (!zoomedImageVisible[previewId]) {
        zoomPreview.style.display = 'none';
        console.log('Zoom preview hidden ', previewId);

        document.querySelector('.world-map').classList.remove('blurred');
    }
}

// Her resme tıklayınca ilgili modali açacak
document.getElementById('zoomed-na').addEventListener('click', function() {
    openModal('modal-na');
});

document.getElementById('zoomed-sa').addEventListener('click', function() {
    openModal('modal-sa');
});

document.getElementById('zoomed-af').addEventListener('click', function() {
    openModal('modal-af');
});

document.getElementById('zoomed-av').addEventListener('click', function() {
    openModal('modal-av');
});

document.getElementById('zoomed-as').addEventListener('click', function() {
    openModal('modal-as');
});

document.getElementById('zoomed-o').addEventListener('click', function() {
    openModal('modal-o');
});

// Modal açma fonksiyonu
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';

    // Arka planı bulanıklaştır
    document.querySelector('.world-map').classList.add('blurred-background');
}

// Modal kapatma fonksiyonu
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';

    // Arka planın bulanıklığını kaldır
    document.querySelector('.world-map').classList.remove('blurred-background');
}


// Fare ikinci görüntüye geldiğinde de açık kalmasını sağla
document.querySelectorAll('.zoom-preview').forEach(preview => {
    preview.addEventListener('mouseenter', function() {
        const previewId = preview.id;
        zoomedImageVisible[previewId] = true;
    });

    preview.addEventListener('mouseleave', function() {
        const previewId = preview.id;
        zoomedImageVisible[previewId] = false;
        hideZoomedImage(previewId);
    });
});


document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
         ${ buttonsHtml.join("") }
        </div>
        `);
    const buttons = carousel.querySelectorAll(".carousel__button");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});


  
  




