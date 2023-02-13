import { Sequelize } from "sequelize";
import pg from "pg";

const db = new Sequelize('crud_db','postgres','1234567',{
    host: 'localhost',
    dialect: 'postgres'
});

export default db;