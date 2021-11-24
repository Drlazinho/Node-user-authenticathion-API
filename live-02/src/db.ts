import { Pool } from "pg";

//conectando um banco de dados
const connectionString = 'postgres://fbtzcmap:8QuaNIc-OpitgD9MeZi9gUqaTuoQlFg4@kesavan.db.elephantsql.com/fbtzcmap';
const db = new Pool({ connectionString })

export default db;