const pizzas = [ 
  { id: 1, name: "4 Quesos", precio: 800, imagen:"./img/4quesos.png" }, 
  { id: 2, name: "Cebollada", precio: 800, imagen: "./img/cebolla.png" },
  { id: 3, name: "Anana", precio: 750, imagen: "./img/anana.png" },
  { id: 4, name: "Especial", precio: 700, imagen: "./img/especial.png" },
  { id: 5, name: "Muzza", precio: 650, imagen: "./img/muzzarella.png" },
  { id: 6, name: "Napolitana", precio: 700, imagen: "./img/napolitana.jpeg" }
];

const taskForm = document.querySelector ('.add-form');
const createCard = document.querySelector ('#container-pizzas')





const createProductCard = (pizza) => {
  const { imagen, precio, name } = pizza;
  return `
      <div class="product-card">
          <h2>${name}</h2>
          <img src="${imagen}" width="150"/>
          <p>Precio: $${precio}</p>
      </div>
  `
};


const renderProductCard = (pizza) => {
  createCard.innerHTML = createProductCard(pizza);
};


// Funcion submit del product 
const handleFormSubmit = (e) => {
  e.preventDefault();


  //
  const pizzaId = parseInt(document.getElementById ('pizza-id').value);

  // Buscar pizza 
  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === pizzaId);


  // Se renderiza

  if (pizzaEncontrada) {
      renderProductCard(pizzaEncontrada);

  // localStorage 
  localStorage.setItem('ultimaPizza', JSON.stringify(pizzaEncontrada));


  } else {
      createCard.innerHTML = `<h3>No se encontro ninguna pizza con ese ID</h3>`;
  }



  // Limpiador de busquedas 
  
  document.getElementById ('pizza-id').value = '';
}




// Ultima pizza 
  const renderUltPizza = () => {
      const ultimaPizza = localStorage.getItem('ultimaPizza');
      if (ultimaPizza) {
          const pizza = JSON.parse(ultimaPizza);
          renderProductCard(pizza);
      }
  }

// funcion iniciadora
const init = () => {
  taskForm.addEventListener('submit', handleFormSubmit);
}


init ()