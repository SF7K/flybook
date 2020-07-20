const User = require('../../schema/schemaUser.js');
const passwordHash = require('password-hash');

// Fonction pour checker que l'on reçoit bien un email et un password
function check(email, password, res) {
    if(!email || !password) {
        return res.status(400).json({
            text: 'Requête invalide'
        });
    } 
};

// Création d'une fonction asynchrone pour enregistrer un nouvel utilisateur
async function register(req, res) {
    const { password, email } = req.body;
    check(email, password, res);

    // Création de l'objet user et "hashage" du mot de passe
    const user = {
        email,
        password: passwordHash.generate(password),
    }

    // On vérifie si l'adresse email est déjà enregistrée dans notre BDD
    try {
        const findUser = await User.findOne({
            email
        });

        // si findUser = true alors envoie d'une erreur
        if(findUser) {
            return res.status(400).json({
                text: "L'utilisateur existe déjà"
            });
        }
    } catch(error) {
        return res.status(500).json({ error });
    }

    // Enregistrement de l'utilisateur dans notre BDD + attribution d'un token
    try {
        const userData = new User(user);
        const userObject = await userData.save();
        return res.status(200).json({
            text: 'Vous êtes enregistré(e)',
            token: userObject.getToken()
        });
    } catch(error) {
        return res.status(500).json({ error });
    }
}

// Création d'une fonction asynchrone pour connecter un utilisateur
async function login(req, res) {
    const { password, email } = req.body;
    check(email, password);
    

    try {
        const findUser = await User.findOne({
            email
        });

        // Vérification de l'utilisateur et du mot de passe en même temps pour éviter de valider l'un sant l'autre en cas de "piratage"
        if(!findUser || !findUser.authenticate(password))
            return res.status(401).json({
                text: "L'utilisateur ou le mot de passe ne correspondent pas"
            });
        
        return res.status(200).json({
            token: findUser.getToken(),
            text: 'Vous êtes connecté'
        });
    } catch(error) {
        return res.status(500).json({
            error
        });
    }
}

// Export de nos fonctions
exports.register = register;
exports.login = login;