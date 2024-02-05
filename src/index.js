// index.js

let currentlyDisplayedBurger;

// Callbacks
const displayBurgerDetails = (burgers) => {
    
    currentlyDisplayedBurger = burgers
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

const addBurgerNamesToMenu = () => {
const burgerNameElement = document.querySelector('#restaurant-menu')
  fetch('http://localhost:3000/burgers')
    .then(response => response.json())
    .then(foods => {
            foods.forEach(burger => {
            const spanElement = document.createElement('span')
                spanElement.textContent = burger.name
                // If you want to upload the photos to the website this is how you would do it. Create a variable and store the HTML elements of the pictures to it. Then you use the .src attribute to set the value of the image and you get the URL from the burger.image

            // const imgElement = document.createElement('img')
            //     imgElement.src = burger.image
            //     console.log(imgElement)
               
                // A Deliverable #2
               
                const burgerDiv = document.createElement('div')
                const deleteButton = document.createElement('button')
                deleteButton.textContent = 'DELETE'
                deleteButton.addEventListener('click', () => {
                    deleteButton.parentNode.remove()
                    if(currentlyDisplayedBurger.id === burger.id) {
                        const defaultData = {
                            name: 'Name Of Burger',
                            image: './assets/image-placeholder.jpg',
                            number_in_cart: '[X]'
                        }
                        displayBurgerDetails(defaultData)
                    }
                })
                
               burgerDiv.appendChild(spanElement)
               burgerDiv.appendChild(deleteButton)
                
                burgerNameElement.appendChild(burgerDiv)  
                burgerNameElement.appendChild(imgElement) 
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


// Knowing what to append to what. So whenever you want to append something to the website using the appendChild() method you need to give it a starting point. Example being the parent node. so for this lab we were appending the span element that we created into the burgerDiv that we created. We also appended the buttonElement that we created to the burgerDiv since the burgerDiv is the parent of the span and button element. And finally we appended the burgerDiv to the burgerNameElement because that is the parent to the burgerDiv. 

// burgerNameElement (biggest)
//burgerDiv(smaller than the burgerNameElement so it fits inside of it)
//spanElement and deleteButton(smaller than the burgerDiv so they fit inside of it)
