var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Miguel Silva",
            "cidade": "40",
            "categoria": "Nº Telefone",
            "email": "exemplo1@mail.com",
            "telefone": "94867-6365",
            "website": "54951995"
        },
        {
            "id": 2,
            "nome": "Arthur Santos",
            "cidade": "17",
            "categoria": "Nº Telefone",
            "email": "exemplo2@mail.com",
            "telefone": "95529-1982",
            "website": "4366-9195"
        },
        {
            "id": 3,
            "nome": "Gael Oliveira",
            "cidade": "25",
            "categoria": "Site",
            "email": "exemplo3@mail.com",
            "telefone": "98412-5837",
            "website": "sitesuspeito1.com"
        },
        {
            "id": 4,
            "nome": "Heitor Souza",
            "cidade": "27",
            "categoria": "Site",
            "email": "exemplo4@mail.com",
            "telefone": "96924-4978",
            "website": "sitesuspeito2.com"
        },
        {
            "id": 5,
            "nome": "Helena Rodrigues",
            "cidade": "44",
            "categoria": "Email",
            "email": "exemplo5@mail.com",
            "telefone": "93978-6173",
            "website": "exemplo11@mail.com"
        },
        {
            "id": 6,
            "nome": "Alice Ferreira",
            "cidade": "48",
            "categoria": "Site",
            "email": "exemplo6@mail.com",
            "telefone": "97158-3632",
            "website": "sitesuspeito3.com"
        },
        {
            "id": 7,
            "nome": "Theo Alves",
            "cidade": "43",
            "categoria": "Nº Telefone",
            "email": "exemplo7@mail.com",
            "telefone": "97165-9768",
            "website": "7366-9195"
        },
        {
            "id": 8,
            "nome": "Laura Pereira",
            "cidade": "31",
            "categoria": "Email",
            "email": "exemplo8@mail.com",
            "telefone": "97165-9768",
            "website": "exemplo12@mail.com"
        },
        {
            "id": 9,
            "nome": "Davi Lima",
            "cidade": "22",
            "categoria": "Nº Telefone",
            "email": "exemplo9@mail.com",
            "telefone": "95211-8763",
            "website": "9886-6466"
        },
        {
            "id": 10,
            "nome": "Gabriel Gomes",
            "cidade": "23",
            "categoria": "Nº Telefone",
            "email": "exemplo10@mail.com",
            "telefone": "98158-3532",
            "website": "2375-7662"
        }
    ]
}

var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email": contato.email,
        "telefone": contato.telefone,
        "cidade": contato.cidade,
        "categoria": contato.categoria,
        "website": contato.website,
        "reclamação": contato.reclamação
    };

    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].nome = contato.nome,
        db.data[index].email = contato.email,
        db.data[index].telefone = contato.telefone,
        db.data[index].cidade = contato.cidade,
        db.data[index].categoria = contato.categoria,
        db.data[index].website = contato.website,
        db.data[index].reclamação = contato.reclamação

    displayMessage("Contato alterado com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    localStorage.setItem('db_contato', JSON.stringify(db));
}