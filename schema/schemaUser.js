const mongoose = require('mongoose');
const passwordHash = require('password-hash');
const jwt = require('jwt-simple');
const config = require('../config/config');


// Création du Schéma type d'un utilisateur et de ses attributs
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at'
        }
    }
);

// Méthode d'authentification et d'attribution de token de connexion généré à partir de notre modèle dans le fichier /config/config.js
userSchema.methods = {
    authenticate: function(password) {
        return passwordHash.verify(password, this.password);
    },
    getToken: function() {
        return jwt.encode(this, config.secret);
    }
};

module.exports = mongoose.model('User', userSchema);