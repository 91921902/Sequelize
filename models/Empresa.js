import { Sequelize } from "sequelize";
import Connection from '../database.js';


const Empresa = Connection.define(
    'empresa',
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull:false,
            validate:{
                isEmail:true,
            }
        },
        endereço:{
            type: Sequelize.STRING,
            allowNull:false,
        }
    }
)

export default  Empresa;