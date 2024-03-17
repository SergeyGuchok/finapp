import { DataTypes } from 'sequelize'
import sequelize from "#database/index";

const User = sequelize.define('UserCategory', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
}, {
    tableName: 'UserCategories',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default User
