"use client";
// Importations des bibliothèques et des composants nécessaires
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

// Composant UserProfile qui prend params comme prop
const UserProfile = ({ params }) => {
  // Récupération des paramètres de la recherche (query parameters) de l'URL
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  // État local pour stocker les publications de l'utilisateur
  const [userPosts, setUserPosts] = useState([]);

  // Utilisation de useEffect pour effectuer une action lors de la mise à jour de params.id
  useEffect(() => {
    // Fonction asynchrone pour récupérer les publications de l'utilisateur
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    // Vérification si params.id existe, puis appel de fetchPosts
    if (params?.id) fetchPosts();
  }, [params.id]);

  // Rendu du composant Profile avec les données de l'utilisateur
  return (
    <Profile
      name={userName}
      // Description personnalisée en utilisant les données de l'utilisateur
      desc={`Bienvenue sur la page de profil personnalisée de ${userName}. Explorez les prompts exceptionnels de ${userName} et laissez-vous inspirer par le pouvoir de son imagination`}
      data={userPosts}
    />
  );
};

// Exportation du composant UserProfile
export default UserProfile;
