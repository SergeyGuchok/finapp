import { DataTypes } from 'sequelize'
import sequelize from "#database/index";

const SubcategorySort = sequelize.define('SubcategorySort', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    sort: {
        allowNull: false,
        type: DataTypes.JSON,
        defaultValue: [],
    }
}, {
    tableName: 'SubcategorySort',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

export default SubcategorySort
