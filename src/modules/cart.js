
const cart = () => {
    //объявляем переменные для корзины, модального окна и крестика закрытия модального окна

    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBnt = cartModal.querySelector('.cart-close')


    //функция открытия модального окна корзины
    const openCart = () => {
        cartModal.style.display = 'flex'
    }

    //функция закрытия модального окна корзины 
    const closeCart = () => {
        cartModal.style.display = ''
    }

    //отлавливаем события клика 
    cartBtn.addEventListener('click', openCart)
    cartCloseBnt.addEventListener('click', closeCart)

}

export default cart

//замкнули переменные в области видимости одной функции