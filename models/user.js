import { DataTypes } from "sequelize";
import sequelize from "#database/index";

const User = sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: 'John',
    },
    surname: {
        type: DataTypes.STRING,
        defaultValue: 'Doe',
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    balance: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
    unseen_categories: {
        type: DataTypes.JSON,
        defaultValue: [],
    },
    balance_sort: {
        type: DataTypes.JSON,
        defaultValue: [],
    },
    categories_sort: {
        type: DataTypes.JSON,
        defaultValue: [],
    }
}, {
    tableName: 'Users',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default User
