import Sequelize from 'sequelize';
import connection from '../config/db.js';
import Investimento from './Investimento.js';
import User from './User.js';

const Desempenho = connection.define( 'desempenho',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idInvestimento: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'investimentos',
                key: 'id'
            }
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stars: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

Desempenho.belongsTo(Investimento, {
    foreignKey: 'idInvestimento'
  });
Desempenho.belongsTo(User, {
    foreignKey: 'idUser'
  });

export default Desempenho;