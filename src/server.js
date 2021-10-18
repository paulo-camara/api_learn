const express = require('express');
const bodyParser = require('body-parser');
const _query = require('./database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8080, () => {
    console.log('API it\'s runing...');
});

app.post('/create_filme', (req, resp) => {
    const { id_filme, name_filme } = req.body;

    const callback = () => resp.send('success');

    _query(`INSERT INTO filme(nome_filme) values($1)`, [name_filme], callback);
});

app.get('/', (req, resp) => {
    const callback = (result) => resp.send(result);

    _query('select * from filme', [], callback);
});

app.delete('/delete_filme', (req, resp) => {
    const callback = () => resp.send('delete success');

    const { id_filme } = req.body;

    _query(`delete from filme where id_filme=$1`, [id_filme], callback);
});

app.post('/update_filme', (req, resp) => {
    const callback = () => resp.send('updated success');

    const { new_name, id_filme } = req.body;

    _query(`update filme set nome_filme=$1 where id_filme=$2`, [new_name, id_filme], callback);
});
