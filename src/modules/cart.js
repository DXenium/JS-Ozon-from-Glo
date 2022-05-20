import renderCart from "./renderCart"
import postData from "./postData"

const cart = () => {
    //объявляем переменные для корзины, модального окна и крестика закрытия модального окна

    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBnt = cartModal.querySelector('.cart-close')

    //получим контейнер всех карточек товаров goods
    const goodsWrapper = document.querySelector('.goods')

    //получим span подсчёта суммы товаров в корзине
    const cartTotal = cartModal.querySelector('.cart-total > span')

    //получаем обложку товаров в корзине
    const cartWrapper = document.querySelector('.cart-wrapper')

    //кнопка "оформить заказ" в корзине
    const cartSendBnt = cartModal.querySelector('.cart-confirm')



    //функция открытия модального окна корзины
    const openCart = () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        cartModal.style.display = 'flex'

        renderCart(cart)

        //выводим сумму товаров в корзине
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }

    //функция закрытия модального окна корзины 
    const closeCart = () => {
        cartModal.style.display = ''
    }

    //отлавливаем события клика 
    cartBtn.addEventListener('click', openCart)
    cartCloseBnt.addEventListener('click', closeCart)

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            //записываем массив товаров корзины в localStorage
            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })

    //отлавливаем события клика на кнопку "удалить" в корзине
    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            //получаем весь массив cart или пустой массив
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            //получаем элемент, который кликнули
            const card = event.target.closest('.card')
            const key = card.dataset.key

            //удаляем из массива cart элемент с id key, для этого находим индекс этого элемента
            const index = cart.findIndex((item) => {
                return item.id === +key
            })

            cart.splice(index, 1)

            //записываем с localStorage новый массив даных
            localStorage.setItem('cart', JSON.stringify(cart))
            //вызываем функцию рендера корзины
            renderCart(cart)
            //пересчитываем итоговую сумму в корзине 
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
        }
    })

    //обработчик события по клику на кнопку "оформить заказ" в корзине
    cartSendBnt.addEventListener('click', () => {
        //получаем весь массив cart или пустой массив
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        //вызываем функцию postData и очищаем localStorage + перерисовываем корзину
        postData(cart).then(() => {
            localStorage.removeItem('cart')

            renderCart([])

            //обнуляем итоговую сумму
            cartTotal.textContent = 0
        })
    })
}

export default cart

//замкнули переменные в области видимости одной функции