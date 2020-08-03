const Flight = require('../schema/schemaFlight.js');

// Fonction pour checker que l'on reçoit bien un body complet 
function body_is_valid(body) {
    if(!body.flightCode || !body.departure || !body.arrival || !body.date || !body.time || !body.price ) {
        return false;
    } else {
        return true;
    }
};

// Création d'une fonction asynchrone pour enregistrer un nouveau vol
async function addFlight(req, res) {
    
    let body = req.body;
    
    // Gestion de l'envoi d'erreur en cas d'un champ non complété
    if(!body_is_valid(body)) {
        return res.status(400).json({
            text: 'Requête invalide / BODY'
          });
    }

    // Création de l'objet Flight
    const flight = {
        flightCode: body.flightCode,
        departure: body.departure,
        arrival: body.arrival,
        date: body.date,
        time: body.time,
        price: body.price
    }

    // On vérifie si le vol est déjà enregistré
    try {
        const findFlight = await Flight.findOne({
            flightCode: body.flightCode,
        });

        if(findFlight) {
            return res.status(400).json({
                text: "Vol déjà enregistré"
            });
        }
    } catch(error) {
        return res.status(500).json({error});
    }

    // Création du nouveau vol dans notre BDD
    try {
        const flightData = new Flight(flight);
        await flightData.save();
        return res.status(200).json({
            text: `Vol n°${flight.flightCode} enregistré avec succès`,
        });
    } catch(error) {
        return res.status(500).json({error});
    }
}

async function readFlights() {
    return axios.get(`http://192.168.10.20:8800/flights`).then(res => 
        console.log(res.data)
    );
}

module.exports = function(app) {

    app.post('/add', addFlight);
    app.get('/flights', readFlights);

}