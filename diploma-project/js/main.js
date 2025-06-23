// gallery

const gallaryList = document.querySelector('.product-gallery-list')

gallaryList.addEventListener('click', toggleGall)

function toggleGall(e) {

    const imgGallControl = e.target.closest('.product-gallery-link')

    if (!imgGallControl) return
    e.preventDefault()
    if (imgGallControl.classList.contains('product-gallery-link--active')) return

    const imgGallContentID = imgGallControl.getAttribute('href')
    const imgGallContent = document.querySelector(imgGallContentID)
    const activeGallControl = document.querySelector('.product-gallery-link--active')
    const activeImgContent = document.querySelector('.img-show')

    if (activeGallControl) {
        activeGallControl.classList.remove('product-gallery-link--active')
    }

    if (activeImgContent) {
        activeImgContent.classList.remove('img-show')
    }

    imgGallControl.classList.add('product-gallery-link--active')
    imgGallContent.classList.add('img-show')
}

// counter

const counters = document.querySelectorAll('[data-quantity]')

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target

            if (target.closest(".quantity__counter-button")) {
                let value = parseInt(target.closest(".quantity").querySelector('input').value)

                console.log(target.classList.contains('quantity__counter-button--plus'))
                if (target.classList.contains('quantity__counter-button--plus') || target.classList.contains('quantity__plus') || target.classList.contains('quantity__plus-svg') || target.classList.contains('quantity__plus-path')) {
                    value++
                } else {
                    --value
                }

                if (value <= 0) {
                    value = 0
                    target.closest(".quantity").querySelector('.quantity__counter-button--minus').classList.add('disabled')
                } else {
                    target.closest(".quantity").querySelector('.quantity__counter-button--minus').classList.remove('disabled')
                }

                target.closest('.quantity').querySelector('input').value = value
            }
        })
    })
}

// icon-fav

document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.innerHTML = `<svg class="heart-icon-svg" width="52" height="52" viewBox="0 0 37 37" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <desc>
                                        Created with Pixso.
                                    </desc>
                                    <defs />
                                    <rect id="избранное (хедер)" rx="0.000000" width="36.000000" height="36.000000"
                                        transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0" />
                                    <path id="Vector"
                                        d="M5.64 21.98C2.22 18.42 2.44 12.59 6.11 9.31C9.75 6.06 15.27 6.7 18.14 10.69L18.63 11.36L19.11 10.69C21.99 6.7 27.51 6.06 31.15 9.31C34.82 12.59 35.03 18.42 31.62 21.98L19.48 34.61C19.01 35.11 18.25 35.11 17.77 34.61L5.64 21.98Z"
                                        stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000"
                                        stroke-linejoin="round" />
                                </svg>`;

    btn.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});



const swiper = new Swiper('.swiper', {
    // Параметры
    direction: 'vertical', // или 'vertical'
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false, // бесконечный слайдер
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});