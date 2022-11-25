import Sequelize from 'sequelize';
import connection from '../config/db.js';

const Investimento = connection.define(
    'investimento',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        valor: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

export default Investimento;