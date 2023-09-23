"use client";
// Importations des modules et des composants nécessaires
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  // Récupération de la session de l'utilisateur
  const { data: session } = useSession();

  // État pour stocker les fournisseurs d'authentification
  const [providers, setProviders] = useState(null);

  // État pour gérer l'affichage du menu déroulant mobile
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // Effet pour récupérer les fournisseurs d'authentification disponibles
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    // Section de navigation
    <nav className="flex-between w-full mb-16 pt-3">
      {/* Logo et texte du site */}
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="PromtoShare Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PromptoShare</p>
      </Link>

      {/* Navigation pour les écrans de bureau */}
      <div className="sm:flex hidden">
        {session?.user ? ( // Vérifie si l'utilisateur est connecté
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Créer un prompt
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Déconnexion
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded_full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          // Si l'utilisateur n'est pas connecté, affiche les options de connexion
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Se connecter avec {provider.name}
                </button>
              ))}
          </>
        )}
      </div>

      {/* Navigation pour les appareils mobiles */}
      <div className="sm:hidden flex relative">
        {session?.user ? ( // Vérifie si l'utilisateur est connecté
          <div className="flex hover:cursor-pointer">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded_full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Mon Profil
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Créer un Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className=" mt-5 w-full black_btn"
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        ) : (
          // Si l'utilisateur n'est pas connecté, affiche les options de connexion
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Se connecter avec {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
