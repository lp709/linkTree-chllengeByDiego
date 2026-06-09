
const name = window.prompt('Digite seu nome:');
window.alert(`Olá, ${name}! Seja bem-vindo(a) ao meu perfil!`);
console.log('window.alert funcionou?');
console.log(true);
console.log('window.alert não funcionou?');
console.error(!true);
const lpName = 'Leandro';
const lpSurname = 'Jesus';
const lpFullName = `${lpName} ${lpSurname}`;
console.log('Name is : ' + lpFullName);
console.log(lpFullName == lpFullName);