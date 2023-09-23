import PromptCard from "./PromptCard";

// Composant de profil
const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      {/* En-tête du profil avec le nom */}
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profil</span>
      </h1>

      {/* Description du profil */}
      <p className='desc text-left'>{desc}</p>

      {/* Liste de prompts associée au profil */}
      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          // Composant qui gère l'affichage de chaque prompt
          <PromptCard
            key={post._id}
            post={post}
            // Gestion de l'édition du prompt
            handleEdit={() => handleEdit && handleEdit(post)}
            // Gestion de la suppression du prompt
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
