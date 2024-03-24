import { DataTypes } from 'sequelize'
import sequelize from "#database/index";

const Colors = sequelize.define('Colors', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'Colors',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default Colors
