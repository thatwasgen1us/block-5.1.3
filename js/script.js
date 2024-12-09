let btn = document.querySelector('.wrapper__button')
let visually = document.getElementById('mores')
let items = document.querySelectorAll('.wrapper__item')

if (document.documentElement.clientWidth > 1120) {
    for (i = 8; i < items.length; i++) {
        items[i].classList.add('visually-hidden')
    }
} else if (document.documentElement.clientWidth <= 1120 && document.documentElement.clientWidth > 767) {
    for (i = 6; i < items.length; i++) {
        items[i].classList.add('visually-hidden')
    }
} else {
    for (i = 9; i < items.length; i++) {
        items[i].classList.add('visually-hidden')
    }
}

classHidden = document.querySelectorAll('.visually-hidden')

btn.addEventListener('click', function () {
    if (btn.className === 'wrapper__button hide') {
        classHidden.forEach(element => {
        element.classList.add('visually-hidden');
    })
        btn.textContent = 'Показать всё'
        btn.classList.remove('hide')
    } else {classHidden.forEach(element => {
        element.classList.remove('visually-hidden');
    })
    btn.textContent = 'Скрыть'
    btn.classList.add('hide')}
})
