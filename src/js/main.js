import '../sass/main.scss'

document.addEventListener('DOMContentLoaded', function () {
    class Basket {
        constructor() {
            this.basketItems = []
            this.btnInBasket = '<span class="btn__icon-check">В корзине</span>'
            this.btnBuy = 'Купить'
            this.btnLoader =
                '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'
        }
        initBasket() {
            if (localStorage.getItem('basket') !== null) {
                this.basketItems = localStorage.getItem('basket').split(',')
                this.basketItems.map(item => {
                    let element = document
                        .querySelector(`.js-product[data-id='${item}']`)
                    element.classList.add('btn__in-basket')
                    element.innerHTML = this.btnInBasket
                })
            }
        }
        setBasket(id, element) {
            element.innerHTML = this.btnLoader
            fetch('https://reqres.in/api/produts/3', {
                method: 'get',
            })
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp)
                    element.classList.toggle('btn__in-basket')

                    let indexBasket = this.basketItems.findIndex(
                        item => item === id
                    )
                    if (indexBasket === -1) {
                        this.basketItems.push(id)
                    } else this.basketItems.splice(indexBasket, 1)
                    localStorage.setItem('basket', this.basketItems.join())
                })
                .catch(function (err) {
                    console.log('Fetch Error :-S', err)
                })
                .finally(() => {
                    if (element.classList.contains('btn__in-basket')) {
                        element.innerHTML = this.btnInBasket
                    } else {
                        element.innerHTML = this.btnBuy
                    }
                })
        }
    }
    const basket = new Basket()
    basket.initBasket()

    const btnBuy = document.querySelectorAll('.js-product')
    btnBuy.forEach(item => {
        item.addEventListener('click', function (event) {
            let productId = event.currentTarget.dataset.id
            basket.setBasket(productId, event.currentTarget)
        })
    })

    //search
    document.getElementById('search').addEventListener('input', event => {
        const elem = event.currentTarget,
            activeClass = 'is-active'
        if (elem.value !== '' && !elem.classList.contains(activeClass)) {
            elem.classList.add(activeClass)
        } else if (elem.value === '') {
            elem.classList.remove(activeClass)
        }
    })
})
