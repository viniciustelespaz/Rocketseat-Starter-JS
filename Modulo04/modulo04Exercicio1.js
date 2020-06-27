function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            resolve("Maior que 18");
         } else {
            reject("Menor que 18");
         }
        }
    )}

checaIdade(1)
    .then(function(response) {
    console.log(response);
    })
    .catch(function(error) {
    console.log(error);
    });
   