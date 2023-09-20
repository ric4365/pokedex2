const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');


const form = document.querySelector('.form');
const input = document.querySelector('.inpu__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
     const APIRresponse = await fetch
      (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

      if(APIRresponse.status === 200){
          const data = await APIRresponse.json()
          return data;

      }

}

const renderPokemon = async (pokemon) =>{
    pokemonName.innerHTML = 'loading...'
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['spirites']['versions']['generetion-v']
        ['black-white']['animated']['front_default'];
        input.value = '';
        searchPokemon = data.id;
    }else{
        pokemonImage.style.display = 'nome';
        pokemonName.innerHTML = 'not found :c';
        pokemonNumber.innerHTML =''; 
    }

    form.addEventListener(' submit' , (event)=> {
        event.preventDefault();
        renderPokemon(input.value.toLowerCase())
    };
    )  

    
        
         }
        
    

    

