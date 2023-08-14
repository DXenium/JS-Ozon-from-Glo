/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://ozon-intensive/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\n\n\nconst cart = () => {\n    //объявляем переменные для корзины, модального окна и крестика закрытия модального окна\n\n    const cartBtn = document.getElementById('cart')\n    const cartModal = document.querySelector('.cart')\n    const cartCloseBnt = cartModal.querySelector('.cart-close')\n\n    //получим контейнер всех карточек товаров goods\n    const goodsWrapper = document.querySelector('.goods')\n\n    //получим span подсчёта суммы товаров в корзине\n    const cartTotal = cartModal.querySelector('.cart-total > span')\n\n    //получаем обложку товаров в корзине\n    const cartWrapper = document.querySelector('.cart-wrapper')\n\n    //кнопка \"оформить заказ\" в корзине\n    const cartSendBnt = cartModal.querySelector('.cart-confirm')\n\n\n\n    //функция открытия модального окна корзины\n    const openCart = () => {\n        const cart = localStorage.getItem('cart') ?\n            JSON.parse(localStorage.getItem('cart')) : []\n\n        cartModal.style.display = 'flex'\n\n        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\n\n        //выводим сумму товаров в корзине\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\n            return sum + goodItem.price\n        }, 0)\n    }\n\n    //функция закрытия модального окна корзины \n    const closeCart = () => {\n        cartModal.style.display = ''\n    }\n\n    //отлавливаем события клика \n    cartBtn.addEventListener('click', openCart)\n    cartCloseBnt.addEventListener('click', closeCart)\n\n    goodsWrapper.addEventListener('click', (event) => {\n        if (event.target.classList.contains('btn-primary')) {\n            const card = event.target.closest('.card')\n            const key = card.dataset.key\n            const goods = JSON.parse(localStorage.getItem('goods'))\n            const cart = localStorage.getItem('cart') ?\n                JSON.parse(localStorage.getItem('cart')) : []\n            const goodItem = goods.find((item) => {\n                return item.id === +key\n            })\n\n            //записываем массив товаров корзины в localStorage\n            cart.push(goodItem)\n\n            localStorage.setItem('cart', JSON.stringify(cart))\n        }\n    })\n\n    //отлавливаем события клика на кнопку \"удалить\" в корзине\n    cartWrapper.addEventListener('click', (event) => {\n        if (event.target.classList.contains('btn-primary')) {\n            //получаем весь массив cart или пустой массив\n            const cart = localStorage.getItem('cart') ?\n                JSON.parse(localStorage.getItem('cart')) : []\n            //получаем элемент, который кликнули\n            const card = event.target.closest('.card')\n            const key = card.dataset.key\n\n            //удаляем из массива cart элемент с id key, для этого находим индекс этого элемента\n            const index = cart.findIndex((item) => {\n                return item.id === +key\n            })\n\n            cart.splice(index, 1)\n\n            //записываем с localStorage новый массив даных\n            localStorage.setItem('cart', JSON.stringify(cart))\n            //вызываем функцию рендера корзины\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\n            //пересчитываем итоговую сумму в корзине \n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\n                return sum + goodItem.price\n            }, 0)\n        }\n    })\n\n    //обработчик события по клику на кнопку \"оформить заказ\" в корзине\n    cartSendBnt.addEventListener('click', () => {\n        //получаем весь массив cart или пустой массив\n        const cart = localStorage.getItem('cart') ?\n            JSON.parse(localStorage.getItem('cart')) : []\n\n        //вызываем функцию postData и очищаем localStorage + перерисовываем корзину\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\n            localStorage.removeItem('cart')\n\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\n\n            //обнуляем итоговую сумму\n            cartTotal.textContent = 0\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//замкнули переменные в области видимости одной функции\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst catalog = () => {\n    const bntCatalog = document.querySelector('.catalog-button>button')\n    const catalogModal = document.querySelector('.catalog')\n    const catalogModalItems = document.querySelectorAll('.catalog li')\n\n    let isOpen = false\n\n    bntCatalog.addEventListener('click', () => {\n        isOpen = !isOpen\n\n        if (isOpen) {\n            catalogModal.style.display = 'block'\n        } else {\n            catalogModal.style.display = ''\n        }\n\n    })\n\n    catalogModalItems.forEach(item => {\n        item.addEventListener('click', () => {\n            const text = item.textContent\n\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\n            })\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst filter = () => {\n    //получаем элементы фильтра со страницы (мин и мах значение цены)\n    const minInput = document.getElementById('min')\n    const maxInput = document.getElementById('max')\n\n    //получаем инпут с чекбоксом\n    const checkboxInput = document.getElementById('discount-checkbox')\n\n    //получаем span-квадратик выбора чекбокса\n    const checkboxSpan = document.querySelector('.filter-check_checkmark')\n\n    //повесим обработчики события input \n\n    minInput.addEventListener('input', () => {\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\n        })\n    })\n\n    maxInput.addEventListener('input', () => {\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\n        })\n    })\n\n    //повесим обработчик события \"отмечена галочка чекбокса\"\n    checkboxInput.addEventListener('change', () => {\n\n        //добавляем галочку в чекбокс, если он выбран\n        if (checkboxInput.checked) {\n            checkboxSpan.classList.add('checked')\n        } else {\n            checkboxSpan.classList.remove('checked')\n        }\n\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   hotSaleFilter: () => (/* binding */ hotSaleFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n    return goods.filter((goodsItem) => {\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())\n    })\n}\n\nconst categoryFilter = (goods, value) => {\n    return goods.filter((goodsItem) => {\n        return goodsItem.category === value\n    })\n}\n\n// фильтр по цене\nconst priceFilter = (goods, min, max) => {\n    return goods.filter((goodsItem) => {\n        if (min === '' && max === '') {\n            return goodsItem\n        } else if (min !== '' && max !== '') {\n            return goodsItem.price > +min && goodsItem.price < +max\n        } else if (min !== '' && max === '') {\n            return goodsItem.price > +min\n        } else if (min === '' && max !== '') {\n            return goodsItem.price < +max\n        }\n    })\n}\n\n//фильтр по ярлыку HotSale\nconst hotSaleFilter = (goods, value) => {\n    return goods.filter((goodsItem) => {\n        if (value) {\n            return goodsItem.sale === true\n        } else {\n            return goodsItem\n        }\n    })\n}\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//функция getData будет получать массив наших товаров\n\nconst getData = (str) => {\n    //метод fetch для работы с серверными запросами\n    return fetch(`https://fir-for-ozon-default-rtdb.firebaseio.com/goods.json`)\n        .then((response) => {\n            return response.json()\n        })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\n    let timer\n\n    return (...args) => {\n        clearTimeout(timer)\n        timer = setTimeout(() => { func.apply(undefined, args) }, ms)\n    }\n}\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\n\n\nconst load = () => {\n\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst postData = (cart) => {\n    //метод fetch для работы с серверными запросами\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\n        method: 'POST',\n        body: JSON.stringify(cart),\n        headers: {\n            'Content-type': 'application/json; charset=UTF-8',\n        },\n    })\n        .then(res => res.json())\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//рендер товаров в корзине\nconst renderCart = (goods) => {\n\n\tconst cartWrapper = document.querySelector('.cart-wrapper')\n\n\tcartWrapper.innerHTML = ''\n\n\tif (goods.length === 0) {\n\t\tcartWrapper.insertAdjacentHTML('beforeend', `\n\t\t\t<div id=\"cart-empty\">\n\t\t\t\tВаша корзина пока пуста\n\t\t\t</div>\n\t\t\t`)\n\t} else {\n\t\tgoods.forEach((goodsItem) => {\n\t\t\tcartWrapper.insertAdjacentHTML('beforeend', `\n\t\t\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\n                        ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n\t\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t\t<span class=\"card-img-top\"\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t    <div class=\"card-body justify-content-between\">\n\t\t    \t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\n\t\t\t    \t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\n\t\t\t\t    \t\t<button class=\"btn btn-primary\">Удалить</button>\n\t    \t\t\t\t</div>\n\t\t\t\t\t</div>\n        `)\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\n\n\tconst goodsWrapper = document.querySelector('.goods')\n\n\t//сохраняем массив goods в localStorage\n\n\tlocalStorage.setItem('goods', JSON.stringify(goods))\n\n\tgoodsWrapper.innerHTML = ''\n\n\tgoods.forEach((goodsItem) => {\n\t\tgoodsWrapper.insertAdjacentHTML('beforeend', `\n                <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n\t\t\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\n                        ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n\t\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t\t<span class=\"card-img-top\"\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t    <div class=\"card-body justify-content-between\">\n\t\t    \t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\n\t\t\t    \t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\n\t\t\t\t    \t\t<button class=\"btn btn-primary\">В корзину</button>\n\t    \t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        `)\n\t});\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\n\n // функция debounce позволяет задать интервал для отправки поисковых запросов на сервер\n\nconst search = () => {\n    const searchInput = document.querySelector('.search-wrapper_input')\n\n    const debonceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.debounce)((event) => {\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data => {\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, event.target.value))\n        }))\n    }, 2000)\n\n    searchInput.addEventListener('input', debonceSearch)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozon-intensive/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;