import { DataTypes } from "sequelize";
import sequelize from "#database/index";

const Transaction = sequelize.define('UserCategory', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['withdrawal', 'deposit', 'expenses']
    },
}, {
    tableName: 'UserCategories',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default Transaction