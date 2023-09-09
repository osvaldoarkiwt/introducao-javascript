const ehPar = numero => new Promise((resolve, reject) => 
                            numero>=0 ? resolve("o número é positivo") 
                                      : reject("o número é negativo"));

ehPar(30).then(resposta =>{console.log(resposta);})
        .catch(erro =>{console.log(erro);});

        