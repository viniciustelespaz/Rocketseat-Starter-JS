// Buscar informações de um usuário no Github através de uma requisição assíncrona
/*var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/viniciustelespaz')
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState===4) {
        console.log(JSON.parse(xhr.responseText));
    }
}*/
//


// promisses são códigos que não influenciam na linha do tempo
//do JS
/*
var minhaPromise = function () {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/viniciustelespaz');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });*/


// AXIOS é uma biblioteca para fazer requisições asíncronas
axios.get('https://api.github.com/users/viniciustelespaz')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

