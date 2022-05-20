import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter, hotSaleFilter } from "./filters"

const filter = () => {
    //получаем элементы фильтра со страницы (мин и мах значение цены)
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')

    //получаем инпут с чекбоксом
    const checkboxInput = document.getElementById('discount-checkbox')

    //получаем span-квадратик выбора чекбокса
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    //повесим обработчики события input 

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        })
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        })
    })

    //повесим обработчик события "отмечена галочка чекбокса"
    checkboxInput.addEventListener('change', () => {

        //добавляем галочку в чекбокс, если он выбран
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        })
    })
}

export default filter