import { DataTypes } from 'sequelize'
import sequelize from "#database/index";

const User = sequelize.define('UsersCategories', {
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
    tableName: 'UsersCategories',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default User
