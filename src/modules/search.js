import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filters"
import { debounce } from "./helpers" // функция debounce позволяет задать интервал для отправки поисковых запросов на сервер

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    const debonceSearch = debounce((event) => {
        getData().then((data => {
            renderGoods(searchFilter(data, event.target.value))
        }))
    }, 2000)

    searchInput.addEventListener('input', debonceSearch)
}

export default search