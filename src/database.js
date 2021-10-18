const { Client } = require('pg');

const _query = async (query, values, callback) => {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: "postgres",
        password: "011422",
        database: "cinema"
    });

    await client.connect();
    const result = await client.query(query, values);

    callback(result.rows);

    client.end()
};

module.exports = _query;
