"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdatePrompt = () => {
  // Récupère l'objet de routage Next.js
  const router = useRouter();

  // Récupère les paramètres de recherche de l'URL
  const searchParams = useSearchParams();

  // Extrait l'ID du prompt à partir des paramètres de recherche
  const promptId = searchParams.get("id");

  // État local pour stocker les données du prompt
  const [post, setPost] = useState({ prompt: "", tag: "" });

  // État local pour gérer la soumission du formulaire
  const [submitting, setIsSubmitting] = useState(false);

  // Effet qui se déclenche lorsque promptId change
  useEffect(() => {
    const getPromptDetails = async () => {
      // Effectue une requête pour obtenir les détails du prompt à partir de l'API
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      // Met à jour l'état local avec les données du prompt
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    // Vérifie si promptId existe, puis obtient les détails du prompt
    if (promptId) getPromptDetails();
  }, [promptId]);

  // Fonction pour mettre à jour le prompt
  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Vérifie si promptId existe
    if (!promptId) return alert("Manque ID du prompt!");

    try {
      // Effectue une requête PATCH pour mettre à jour le prompt
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      // Redirige vers la page d'accueil si la mise à jour est réussie
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rend le composant de formulaire avec les données et les gestionnaires appropriés
  return (
    <Form
      type='Mise à jour'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
