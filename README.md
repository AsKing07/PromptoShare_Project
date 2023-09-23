# PromptoShare
1. [French (Français)](#i-french)
2. [English (Anglais)](#ii-english)



# I- French

PromptoShare est un outil d'IA open-source dédié aux prompts, conçu pour le monde moderne. Il offre aux utilisateurs la possibilité de découvrir, de créer et de partager des prompts créatifs pour stimuler leur écriture, leurs sessions de brainstorming et leurs projets créatifs. Il utilise tailwindcss pour le style. Ce fichier README vous guidera à travers les fonctionnalités, la configuration et le processus de déploiement de l'application Promptopia.

## Fonctionnalité

- **Authentification avec Google:**  Les utilisateurs peuvent se connecter à Promptopia en utilisant leur compte Google, garantissant un processus de connexion sécurisé et sans tracas.
- **Créer, Modifier et Supprimer des Publications:**  Une fois connectés, les utilisateurs peuvent créer de nouveaux prompts, modifier ceux existants ou supprimer des prompts qu'ils ne souhaitent plus conserver. Cela leur donne un contrôle total sur leur collection de prompts.
- **Profils Utilisateur:** Chaque utilisateur dispose de sa propre page de profil où il peut présenter les prompts qu'il a créés. Les autres utilisateurs peuvent visiter ces pages de profil pour voir et s'inspirer des prompts partagés par cet utilisateur.
- **Fonction de Recherche:** La page principale de Promptopia permet aux utilisateurs de rechercher des prompts en utilisant des mots-clés, des tags ou des noms d'utilisateur. Cette fonctionnalité facilite la découverte de prompts liés à des thèmes ou des sujets spécifiques.
- **Copier le Texte du Prompt:**  Un bouton pratique permet aux utilisateurs de copier le texte d'un prompt en un seul clic. Cela facilite le collage du prompt dans un outil d'IA ou toute autre plateforme d'écriture.
- **Pagination:** La fonctionnalité de pagination y est intégrée

## Prérequis

Avant d'exécuter l'application, vous devez avoir les éléments suivants installés sur votre système :

- Next.js (version 13)
- React
- Node.js (version 14 ou ultérieure)
- MongoDB (version 4.0 ou ultérieure)

PromptoShare est déployé sur Vercel, une plateforme cloud pour les sites statiques et les fonctions serverless.

Visitez la démo: [Demo_PromptoShare]('https://promptoshare.vercel.app/')

## Installation

1. Clonez le dépôt sur votre machine locale en utilisant la commande suivante :
```bash
   git clone https://github.com/AsKing07/PromptoShare_Project.git
```
2. Installez les dépendances nécessaires en accédant au répertoire du projet et en exécutant :
```bash
npm install
```
3. Créez un fichier `.env` dans le répertoire racine du projet et ajoutez les variables d'environnement suivantes :

```bash

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
NEXTAUTH_URL=
NEXTAUTH_URL_INTERNAL=
NEXTAUTH_SECRET=

```

4. Exécutez l'application :

```bash
   npm run dev
```
## API Endpoints

Les endpoints d'API suivants sont disponibles :

- POST /api/prompt/new :
Créer un nouveau prompt.

- GET /api/users/${session.user.id}/posts:
Obtenir toutes les publications de l'utilisateur.

- GET /api/users/${params?.id}/posts:
Obtenir toutes les publications de l'utilisateur sur le profil de l'utilisateur.

- GET /api/prompt/${promptId}
Obtenir le prompt.

- PATCH /api/prompt/${promptId}
Mettre à jour le prompt.

- GET  /api/prompts/${project}/prompts
Obtenir tous les prompts.

- DELETE /api/prompt/${post._id.toString()}
Supprimer le prompt


# II-English



PromptoShare is an open-source AI prompting fullstack tool for the modern world. It provides users with the ability to discover, create, and share creative prompts to inspire their writing, brainstorming sessions, and creative projects. It uses tailwindcss for styling. This README file will guide you through the features, setup, and deployment process for the Promptopia app.

## Features

- **Authentication with Google:** Users can sign in to Promptopia using their Google accounts, ensuring a secure and hassle-free login process.
- **Create, Edit, and Delete Posts:** Once logged in, users can create new prompts, edit existing ones, or delete prompts they no longer wish to keep. This gives them complete control over their prompt collection.
- **User Profiles:** Each user has their own profile page where they can showcase their created prompts. Other users can visit these profile pages to view and gain inspiration from the prompts shared by that user.
- **Search Functionality:** The main page of Promptopia allows users to search for prompts using keywords, tags, or usernames. This feature makes it easier for users to discover prompts related to specific themes or topics.
- **Copy Prompt Text:** A handy button allows users to copy the text of a prompt with a single click. This makes it convenient to paste the prompt into an AI tool or any other writing platform.
- **Pagination:** Pagination functionality is integrated.

## Prerequisites

Before running the application, you need to have the following installed on your system:

- Next.js (version 13)
- React
- Node.js (version 14 or later)
- MongoDB (version 4.0 or later)

PromptoShare is deployed on Vercel, a cloud platform for static sites and serverless functions.

Visit the demo: [Demo_PromptoShare]('https://promptoshare.vercel.app/')

## Installation

1. Clone the repository to your local machine using the following command:
```bash
   git clone https://github.com/AsKing07/PromptoShare_Project.git
```
2. Install the necessary dependencies by navigating to the project directory and running:
```bash
npm install
```
3. Create a `.env` file in the root directory of the project and add the following environment variables:

```bash

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
NEXTAUTH_URL=
NEXTAUTH_URL_INTERNAL=
NEXTAUTH_SECRET=

```

4. Run the app:

```bash
   npm run dev
```

## API Endpoints

The following API endpoints are available:

- POST /api/prompt/new :
Create a new prompt.

- GET /api/users/${session.user.id}/posts:
Get all posts for the user.

- GET /api/users/${params?.id}/posts:
Get all posts of the user on the user's profile.

- GET /api/prompt/${promptId}
Get the prompt.

- PATCH /api/prompt/${promptId}
Update the prompt.

- GET  /api/prompts/${project}/prompts
Get all prompts.

- DELETE /api/prompt/${post._id.toString()}
Delete the prompt.
```

