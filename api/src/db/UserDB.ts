import { DataTypes, Model, ModelAttributes } from 'sequelize';

export class UserDB extends Model {}
export const userModel: ModelAttributes = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
};