// Importation des modules et composants nécessaires
"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile"; // Composant de profil réutilisable

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession(); // Utilisation de la session d'utilisateur

  const [myPosts, setMyPosts] = useState([]); // État pour stocker les publications de l'utilisateur

  useEffect(() => {
    // Effectue une requête pour récupérer les publications de l'utilisateur
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    // Vérifie si l'utilisateur est connecté, puis récupère ses publications
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  // Fonction pour gérer la modification d'une publication
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  // Fonction pour gérer la suppression d'une publication
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Etes-vous sûr de vouloir supprimer ce prompt?"
    );

    if (hasConfirmed) {
      try {
        // Envoie une requête de suppression de la publication
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        // Filtre les publications pour exclure celle qui vient d'être supprimée
        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts); // Met à jour les publications après la suppression
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    // Rendu du composant de profil avec les données et fonctions appropriées
    <Profile
      name="Mon"
      desc="Bienvenue sur votre page de profil personnalisée. Partagez vos exceptionnels Prompts et inspirez les autres avec le pouvoir de votre imagination"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
