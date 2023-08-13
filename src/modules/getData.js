//функция getData будет получать массив наших товаров

const getData = (str) => {
    //метод fetch для работы с серверными запросами
    return fetch(`https://fir-for-ozon-default-rtdb.firebaseio.com/goods.json`)
        .then((response) => {
            return response.json()
        })

}

export default getData