var http = require('http');

var configuracoes = {
    hostname:'localhost',
    port:3000,
    method:'post',
    path:'/produtos/form',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
}

var client = http.request(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo: ' + body);
    });
});

var produto = {
    titulo: 'Mais sobre node',
    descricao:'Node Javascript e um pouco sobre http',
    preco: 100
};

client.end(JSON.stringify(produto));