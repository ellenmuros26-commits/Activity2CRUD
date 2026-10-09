import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicationYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    }
});