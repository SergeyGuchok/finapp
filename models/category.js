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
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['income', 'expenses'],
        defaultValue: 'income',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'Categories',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default Category
