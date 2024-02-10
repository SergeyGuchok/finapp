import { DataTypes } from "sequelize";
import sequelize from "#database/index";

const Category = sequelize.define('Category', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    parent_id: {
        type: DataTypes.INTEGER,
    },
    type: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '#000000'
    }
}, {
    tableName: 'Categories',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default Category