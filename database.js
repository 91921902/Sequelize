import { Sequelize } from "sequelize";

const Connection = new Sequelize(
    'backend',
    'user',
    '123456',
    {
        dialect:"mysql",
        host: 'localhost',
    }

)

export default Connection;