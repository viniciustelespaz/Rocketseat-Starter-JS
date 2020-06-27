function buscarRepo() {
    axios.get('https://api.github.com/users/' + document.getElementsByName("user")[0].value + '/repos')
        .then(function(response) {
            console.log(response);

            var lista = document.createElement('ul');

            var containerElement = document.querySelector('#corpo');
            
            containerElement.appendChild(lista);

            for (var i=0;i<response.data.length;i++) {

                var elementos = document.createElement('li');
                
                lista.appendChild(elementos);
                elementos.innerHTML = response.data[i].name;

            }
        })
        .catch(function(error) {
            console.warn(error);
        });
    }