'use client';

import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {

    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setsubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })

    const createPrompt = async (e) =>
    {
        e.preventDefault();

        setsubmitting(true);

        try
        {
            const response = await fetch ('/api/prompt/new', 
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    userId: session?.user.id
                })
            })

            if (response.ok)
            {
                router.push('/')
            }

        } 
        catch(error)
        {
            console.log(error)
            alert(`Une erreur s'est produite: ${error}. \n Veuillez contactez l'administrateur de la page ` )
        } 
        finally
        {
            setsubmitting(false)
        }

    }

  return (

    <Form 
        type="Création"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />

    )
}

export default CreatePrompt