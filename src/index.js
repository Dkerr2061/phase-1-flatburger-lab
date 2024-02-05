// index.js

let currentlyDisplayedBurger;

// console.log(spanElement)
// Callbacks
const displayBurgerDetails = (burgers) => {
    // console.log(burgers)
    currentlyDisplayedBurger = burgers
    const foodElement = document.querySelector('#food-detail')
    const foodImageElement = document.getElementById('image')
    const foodNameElement = document.getElementById('name')
    const addToCartElement = document.getElementById('number-in-cart-count')
            foodNameElement.textContent = burgers.name
            foodImageElement.src = burgers.image
            addToCartElement.textContent = burgers.number_in_cart
    
};

const addToCart = () => {
    const addToCartForm = document.getElementById('add-to-cart-form')
    addToCartForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const numberToAddElement = document.getElementById('number-to-add')
        const numberInCartElement = document.getElementById('number-in-cart-count')
        
        numberInCartElement.textContent = Number(numberInCartElement.textContent) + Number(numberToAddElement.value)

    })
}

const addBurgerNamesToMenu = (foods) => {
const burgerNameElement = document.querySelector('#restaurant-menu')
  fetch('http://localhost:3000/burgers')
    .then(response => response.json())
    .then(foods => {
            foods.forEach(burger => {
            const spanElement = document.createElement('span')
                spanElement.textContent = burger.name
                // A Deliverable #2
                const burgerDiv = document.createElement('div')
                const deleteButton = document.createElement('button')
                deleteButton.textContent = 'DELETE'
                deleteButton.addEventListener('click', () => {
                    deleteButton.parentNode.remove()
                })
                
                burgerDiv.appendChild(spanElement)
                deleteButton.appendChild(spanElement)
                burgerNameElement.appendChild(spanElement)   
                spanElement.addEventListener('click', () => {
                    displayBurgerDetails(burger)
                })
            });
            displayBurgerDetails(foods[0])       
        });
};

const main = () => {
     addBurgerNamesToMenu()
    addToCart()
}

main()

