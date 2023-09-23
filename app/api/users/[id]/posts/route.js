// Importation des modules nécessaires
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// Définition de la fonction GET pour la route
export const GET = async (request, { params }) => {
    try {
        // Connexion à la base de données
        await connectToDB();

        // Recherche des prompts  créés par l'utilisateur spécifié (params.id)
        const prompts = await Prompt.find({ creator: params.id }).populate('creator');

        // Retourne les prompts sous forme de réponse JSON avec un statut 201 (Réussite)
        return new Response(JSON.stringify(prompts), { status: 201 });
    } catch (error) {
        // En cas d'erreur, retourne une réponse d'erreur avec un statut 500 (Erreur interne du serveur)
        return new Response("Erreur dans le chargement des Prompts", { status: 500 });
    }
};
