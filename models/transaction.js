import { DataTypes } from "sequelize";
import sequelize from "#database/index";

const Transaction = sequelize.define('Transaction', {
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
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['transfer', 'deposit', 'expenses']
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    user_created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    recipient_balance_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    balance_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'Transactions',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default Transaction
