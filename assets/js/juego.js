/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

// Variables de barajas
let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


// Esta función crea una nueva baraja de cartas
const crearDeck = () => {
    for ( let i = 2; i <= 10; i++) {
        for ( let tipo of tipos )  {
            deck.push(i + tipo);
        }
        
    }

    for ( let tipo of tipos) {
        for ( let esp of especiales) {
            deck.push (esp + tipo)
        }
    }

    // console.log(deck); // Muestra la baraja de cartas en orden
    deck = _.shuffle(deck); // Mezcla de cartas
    console.log(deck); // Muestra la baraja mezclada
    return deck;

}

crearDeck(); // Llamado a la función para crear la baraja de cartas


// Esta función me permite tomar una carta
const pedirCarta = () => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    
    return carta;
    }



//pedirCarta(); // Llamado a la función para tomar una carta

// pedirCarta(); // Llamado a la función para tomar una carta
const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1); // Elimina el último caracter de la carta
    return ( isNaN( valor)) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;
    

}

const valor = valorCarta (pedirCarta()); // Llamado a la función para tomar una carta
console.log({valor}); // Llamado a la función para tomar el valor de una carta