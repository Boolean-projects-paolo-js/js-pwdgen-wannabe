const name = prompt('scrivi il tuo nome');

const surname = prompt('scrivi il tuo cognome');

const color = prompt(' il tuo colore preferito');

document.getElementById('result').innerHTML = ("il tuo nome è: " + name + "<br>" +
                                                "il tuo cognome è: " + surname + "<br>" +
                                                "il tuo colore preferito è: " + color);