import { Sequelize } from 'sequelize';
import { UserDB, userModel } from './UserDB';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});

const initDb = () => {
    UserDB.init(userModel, {sequelize: db});
}

initDb();

export default db;