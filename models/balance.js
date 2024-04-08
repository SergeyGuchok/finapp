import { DataTypes } from 'sequelize'
import sequelize from "#database/index";

const Balance = sequelize.define('Balances', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    balance: {
        type: DataTypes.DECIMAL(15, 2),
        defaultValue: 0.00,
        allowNull: false,
    },
}, {
    tableName: 'Balances',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default Balance
