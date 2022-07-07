var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Razão social1",
            "cidade": "12345670",
            "categoria": "Nº Telefone",
            "email": "exemplo1@mail.com",
            "telefone": "94867-6365",
            "website": "Nome_1"
        },
        {
            "id": 2,
            "nome": "Razão social2",
            "cidade": "12345671",
            "categoria": "Nº Telefone",
            "email": "exemplo2@mail.com",
            "telefone": "95529-1982",
            "website": "Nome_2"
        },
        {
            "id": 3,
            "nome": "Razão social3",
            "cidade": "12345672",
            "categoria": "Site",
            "email": "exemplo3@mail.com",
            "telefone": "98412-5837",
            "website": "Nome_3"
        },
        {
            "id": 4,
            "nome": "Razão social4",
            "cidade": "12345673",
            "categoria": "Site",
            "email": "exemplo4@mail.com",
            "telefone": "96924-4978",
            "website": "Nome_4"
        },
        {
            "id": 5,
            "nome": "Razão social5",
            "cidade": "12345674",
            "categoria": "Email",
            "email": "exemplo5@mail.com",
            "telefone": "93978-6173",
            "website": "Nome_5"
        },
        {
            "id": 6,
            "nome": "Razão social6",
            "cidade": "12345675",
            "categoria": "Site",
            "email": "exemplo6@mail.com",
            "telefone": "97158-3632",
            "website": "Nome_6"
        },
        {
            "id": 7,
            "nome": "Razão social7",
            "cidade": "12345676",
            "categoria": "Nº Telefone",
            "email": "exemplo7@mail.com",
            "telefone": "97165-9768",
            "website": "Nome_7"
        },
        {
            "id": 8,
            "nome": "Razão social8",
            "cidade": "12345677",
            "categoria": "Email",
            "email": "exemplo8@mail.com",
            "telefone": "97165-9768",
            "website": "Nome_8"
        },
        {
            "id": 9,
            "nome": "Razão social9",
            "cidade": "212345678",
            "categoria": "Nº Telefone",
            "email": "exemplo9@mail.com",
            "telefone": "95211-8763",
            "website": "Nome_9"
        },
        {
            "id": 10,
            "nome": "Razão social10",
            "cidade": "12345679",
            "categoria": "Nº Telefone",
            "email": "exemplo10@mail.com",
            "telefone": "98158-3532",
            "website": "Nome_10"
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