const button = document.querySelector('.button-joke');

const containJoke = [ 
,'Pourquoi les poules traversent la route ?', 'Eh bien, je m’appelle Andrew', 'Peter, penses-tu que je suis une mauvaise mère?' 
, 'Quand les cochons voleront !' , 'Mon psychiatre me dit que j’ai un problème avec la vengeance', 'C’est l’histoire d’un sandwich qui rentre dans un bar', 
, 'Deux poissons sont dans un aquarium, l’un dit à l’autre « comment conduis-tu ce truc?', 'Est-ce que ta maman t’a aidé à faire tes devoirs ?', ' Non, elle les a faits toute seule',
'C’est une nouvelle coupe?', 'C’est une perruque que j’ai empruntée.', 'Moi aussi j’aime les pains aux chocolat !', 'Non, mais ma soeur à une poule est deux chiens.'
];

const buttonChange = () => {
 const buttonChange = button.innerHTML = "<h1>😱 😂</h1>";
 return buttonChange;
}

const joke = () => {
  for(let index in containJoke){
    console.log(containJoke[index])
  }
} 

let textFunc = containJoke;

let classChangeB = document.querySelector('.joke-container');
console.log(classChangeB);

let test = `<h1>${textFunc}</h1>` 

button.addEventListener('click', () => {
  let bt = classChangeB.innerHTML = test;
  bt = classChangeB.style.color = 'red';
})




