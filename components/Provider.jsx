// Importation du module "use client" (si nécessaire)
"use client";

// Importation du composant SessionProvider de next-auth/react
import { SessionProvider } from 'next-auth/react'

// Définition du composant Provider avec des commentaires explicatifs
const Provider = ({ children, session }) => {
  return (
    // Utilisation du SessionProvider pour gérer la session
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

// Exportation du composant Provider
export default Provider
