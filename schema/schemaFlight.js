const mongoose = require('mongoose');


// Création du Schéma type d'un vol et de ses attributs
const flightSchema = mongoose.Schema(
    {
        flightCode: {
            type: Number,
            required: true,
            unique: true,
        },

        departure: {
            type: String,
            required: true,
        },

        arrival: {
            type: String,
            required: true,
        },

        date: {
            type: String,
            required: true,
        },

        time: {
            type: Number,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps: {
            createdAt: 'created_at',
        }
    }
);

module.exports = mongoose.model('Flight', flightSchema);