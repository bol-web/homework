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

                if (target.classList.contains('quantity__counter-button--plus') || target.classList.contains('quantity__plus') || target.classList.contains('quantity__plus-svg') || target.classList.contains('quantity__plus-path')) {
                    value++
                } else {
                    --value
                }

                if (value <= 1) {
                    value = 1
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
    btn.addEventListener('click', function (event) {
        event.preventDefault()
        this.classList.toggle('active');
    });
});

//swiper-product-card

const swiper = new Swiper('.product-gallery-slider', {
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

//btn-readMore

const dots = document.getElementById("dots")
const more = document.getElementById("more")
const btn = document.getElementById("product-button-more")

function toggleDescription() {
    if (dots.style.display === 'none') {
        dots.style.display = 'inline'
        btn.innerHTML = 'Показать описание'
        more.style.display = 'none'
    } else {
        dots.style.display = 'none'
        btn.innerHTML = 'Скрыть'
        more.style.display = 'inline'
    }
}

function handleResize() {
    if (window.innerWidth > 900) {
        dots.style.display = '';
        more.style.display = '';
        btn.innerHTML = 'Показать описание';
        btn.style.display = 'none';
    } else {
        btn.style.display = '';
    }
}

btn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleDescription();
});

window.addEventListener('resize', handleResize);

handleResize();


// tabs

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')
    const tabControlItem = tabControl.closest('.tab-controls__item')

    if (!tabControl || !tabControlItem) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active') || tabControlItem.classList.contains('tab-controls__item--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeItem = document.querySelector('.tab-controls__item--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
        activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeItem) {
        activeItem.classList.remove('tab-controls__item--active')
    }

    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-controls__link--active')
    tabControlItem.classList.add('tab-controls__item--active')
    tabContent.classList.add('tab-content--show')
}


// form

const btnDelivery = document.querySelector('.button-delivery')

btnDelivery.addEventListener('click', function (e) {
    e.preventDefault()
})

document.getElementById('city').addEventListener('change', function () {
    const otherCityContainer = document.getElementById('otherCityContainer');
    otherCityContainer.style.display = this.value === 'other' ? 'block' : 'none';
    if (this.value !== 'other') {
        document.getElementById('otherCity').value = '';
    }
});



// Аккардеон

const accordionLists = document.querySelectorAll('.accordion-list')


accordionLists.forEach(el => {

    // реализация изначально открытой первой вкладки аккардиона
    // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px'

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling
        e.preventDefault()
        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened')
            accordionOpenedContent.style.maxHeight = null
        }

        accordionItem.classList.toggle('accordion-list__item--opened')

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'

        } else {
            accordionContent.style.maxHeight = null
        }

    })
})




// btn-more

const btnMore = document.querySelector('.similar-products__btn');
const cards = Array.from(document.querySelectorAll('.similar-products__card'));


window.addEventListener('resize', event => {
    if (event.target.window.innerWidth > 1499) response0();
    if (event.target.window.innerWidth <= 1499 && event.target.window.innerWidth > 900) response1();
    if (event.target.window.innerWidth <= 900 && event.target.window.innerWidth > 763) response2();
    if (event.target.window.innerWidth <= 763 && event.target.window.innerWidth > 600) response3();
    if (event.target.window.innerWidth <= 600 && event.target.window.innerWidth > 389) response4();
    if (event.target.window.innerWidth <= 389) response5();
})

function openCatalog() {
    btnMore.addEventListener('click', () => {
        cards.forEach(item => item.classList.remove('hidden'));
        btnMore.classList.add('hidden');
    })
}

function response0() {
    if (window.innerWidth > 1499) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 2) {
                item.classList.remove('hidden')
            } else if (index > 2) {
                btnMore.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response0()

function response1() {
    if (window.innerWidth <= 1499 && window.innerWidth > 900) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 3) {
                item.classList.remove('hidden')
            } else if (index > 3) {
                btnMore.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response1()


function response2() {
    if (window.innerWidth <= 900 && window.innerWidth > 763) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 5) {
                item.classList.remove('hidden')
            } else if (index > 5) {
                btnMore.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response2()


function response3() {
    if (window.innerWidth <= 763 && window.innerWidth > 600) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 3) {
                item.classList.remove('hidden')
            } else if (index > 3) {
                btnMore.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response3()

function response4() {
    if (window.innerWidth <= 600 && window.innerWidth > 389) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 3) {
                item.classList.remove('hidden')
            } else if (index > 3) {
                btnMore.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response4()

function response5() {
    if (window.innerWidth <= 389) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 1) {
                item.classList.remove('hidden')
            } else if (index > 1) {
                btnMore.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response5()

// swiper for one

// const swiperOneImg = new Swiper('.product-gallery-active-list', {
//     // Параметры
//     direction: 'horizontal', // или 'vertical'
//     slidesPerView: 5,
//     spaceBetween: 20,
//     loop: false, // бесконечный слайдер
//     pagination: {
//         el: '.product-gallery-active-list-pagination',
//         clickable: true,
//     },
// });

// const activeList = document.querySelector('.product-gallery-active-list')
// const activeListSwiper = activeList.querySelector('.gallery-active-slider')
// const activeItems = activeList.querySelectorAll('.product-gallery-active-item')

// window.addEventListener('resize', winWidth);

// function winWidth() {
//     if (window.innerWidth <= 625) {
//         activeList.classList.add('swiper')
//         activeListSwiper.classList.add('swiper-wrapper')
//         for (let elem of activeItems) {
//             elem.classList.add('swiper-slide')
//         }
//     }
//     if (window.innerWidth > 625 && activeList.closest('.swiper')) {
//         activeList.classList.remove('swiper')
//         activeListSwiper.classList.remove('swiper-wrapper')
//         for (let elem of activeItems) {
//             elem.classList.remove('swiper-slide')
//         }
//     }
// }




let swiperInstance = null;

function toggleSlider() {
    const isMobile = window.innerWidth <= 625;

    if (isMobile && !swiperInstance) {
        document.querySelector('.slider-for-one__list').classList.add('swiper-wrapper');
        document.querySelectorAll('.slider-for-one__card').forEach(card => {
            card.classList.add('swiper-slide');
        });

        swiperInstance = new Swiper('.product-gallery-slider-for-one', {
            slidesPerView: 1,
            spaceBetween: 10,
            direction: 'horizontal',
            loop: false,

            pagination: {
                el: '.slider-for-one__pagination',
                clickable: true,
            },
        });
    } else if (!isMobile && swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;

        document.querySelector('.slider-for-one__list').classList.remove('swiper-wrapper');
        document.querySelectorAll('.slider-for-one__card').forEach(card => {
            card.classList.remove('swiper-slide');
        });
    }
}

window.addEventListener('load', toggleSlider);
window.addEventListener('resize', toggleSlider);


//dropdown

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
















