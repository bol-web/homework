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

(function() {

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
})() 







