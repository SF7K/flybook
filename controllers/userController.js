const auth = require('./auth/lib.js');


// Création de notre router
module.exports = function(app) {

    // Création d'une route /register sur laquelle on applique la méthode "register" de notre fichier /controllers/auth/lib.js
    app.post('/register', auth.register);
    app.post('/login', auth.login);

}