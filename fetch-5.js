fetch('https://reqres.in/api/users/1000')
    .then(resp => {

        if (resp.ok) {
            return resp.json();

        } else {
            throw new Error('No existe el usuario 1000')
        }


    })
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);

    });