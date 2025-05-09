//  Моя реализация бургера
// const burger = document.querySelector('.burger-icon')
// const body = document.querySelector('.body')
// const link = document.querySelectorAll('.nav__link')
// isBurger = 0


// burger.addEventListener('click', () => {
//     if (isBurger) {
//         body.classList.remove('body--opened-menu')
//         isBurger = 0
//     } else {
//         body.classList.add('body--opened-menu')
//         isBurger = 1
//     }
// })

// link.forEach(element => {
//     element.addEventListener('click', () => {
//         if (isBurger) {
//             body.classList.remove('body--opened-menu')
//             isBurger = 0
//         } else {
//             return;
//         }
//     })
// })


// ================================================================

//  Моя реализация модалки

// в css(107-110 строка) добавил pointer-events: none; на path svg rect, чтобы при нажатии на копку он выводил класс modal__cancel(может эт не норм, что он изначально правильно не выводил)

// const body = document.querySelector('.body')
// const aboutButton = document.querySelector('.about__img-button')
// const modal = document.querySelector('.modal')

// aboutButton.addEventListener('click', event => {
//     event.preventDefault()
//     body.classList.add('body--opened-modal')
// })

// modal.addEventListener('click', event => {
//     event.preventDefault()
//     const target = event.target
//     if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) { 
//         body.classList.remove('body--opened-modal')
//     }
// })


// ================================================================

(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')


        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Модалка

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        const target = e.target
        if (target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
            document.body.classList.toggle('body--opened-modal')
        }
    }

    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }

        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

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


    // Слайдер-галерея

    const swiper = new Swiper('.gallery__slider', {

        slidesPerView: 1.5,
        spaceBetween: 15,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,

            },
            801: {
                spaceBetween: 32,

            },
            1101: {
                slidesPerView: 4,
            }
        }

    });

})()

