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


})() 








