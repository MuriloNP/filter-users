const numbersAleatory = [5, 2, 8, 15, 30, 4, 25, 18, 9, 10];

const overTen = array => {
  let numbersOverTen = array.filter(element => element >= 10);
  return numbersOverTen.sort();
};

console.log(overTen(numbersAleatory));

//Requisitando usuários
const loadPersons = async () => {
  const require = await fetch('http://jsonplaceholder.typicode.com/users');
  const json = await require.json();
  return json;
};

//Filtrando usuário
const body = document.querySelector('body');

const filterUsers = () => {
  loadPersons()
    .then(data => {
      let users = data.filter(element => element.id > 5);
      for (let index of users) {
        console.log(`Usuário: ${index.name}`);
        //Documento HTML
        const paragraphs = document.createElement('p');
        body.appendChild(paragraphs);
        paragraphs.innerHTML = `Usuário: ${index.name}`;
      }
    })
    .catch(error => console.log(`ERRO: ${error}`));
};

filterUsers();
