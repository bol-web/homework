const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.modal__close-btn')
const modal = document.querySelector('.modal')

btnOpen.addEventListener('click', () => {
    modal.classList.add('modal-dispaly')
})

modal.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('modal')) {
        modal.classList.remove('modal-dispaly')
    }
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('modal-dispaly')
})