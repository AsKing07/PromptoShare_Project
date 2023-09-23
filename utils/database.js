import mongoose from "mongoose";

// Variable pour suivre l'état de la connexion à la base de données
let isConnected = false;

// Fonction pour se connecter à la base de données
export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // Configuration de Mongoose

    // Vérifier si la connexion est déjà établie
    if (isConnected) {
        console.log('MongoDB est déjà connecté');
        return;
    }

    try {
        // Tentative de connexion à la base de données
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt", // Nom de la base de données
            useNewUrlParser: true, // Utilisation du nouveau gestionnaire d'URL
            useUnifiedTopology: true, // Utilisation du moteur de recherche MongoDB
        });

        // Marquer la connexion comme établie
        isConnected = true;
        console.log("MongoDB connecté");
    } catch (error) {
        console.log(error); // Gérer les erreurs de connexion
    }
}
