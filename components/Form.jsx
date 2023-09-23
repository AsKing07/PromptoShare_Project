import Link from "next/link";

// Composant Form pour la création et l'édition de prompts
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      {/* Titre de la section */}
      <h1 className="head_text text-lft">
        <span className="blue_gradient">
          {/* Affiche le type de prompt, par exemple "Créer" ou "Éditer" */}
          {type} Prompt
        </span>
      </h1>
      {/* Description de la section */}
      <p className="desc text-left max-w-md">
        {/* Explique le but de la section */}
        {type} et partagez d'incroyables prompts avec le monde, et laissez libre
        cours à votre imagination sur n'importe quelle plateforme alimentée par l'IA
      </p>

      {/* Formulaire pour créer ou éditer un prompt */}
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        {/* Champ de saisie pour le prompt */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {/* Libellé du champ de saisie */}
            Votre Prompt AI
          </span>
        </label>
        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Ecrivez votre prompt ici..."
          required
          className="form_textarea"
        />

        {/* Champ de saisie pour le tag */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {/* Libellé du champ de saisie */}
            Tag
            <span className="font-normal">(#produit, #webdeveolpment, #marketing, #design, ... )</span>
          </span>
        </label>
        <input
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="#tag"
          required
          className="form_input"
        />

        {/* Section pour les boutons Annuler et Soumettre */}
        <div className="flex-end mx-3 mb-5 gap-4">
          {/* Lien pour annuler l'action */}
          <Link href="/" className="text-gray-500 text-sm">
            Annuler
          </Link>

          {/* Bouton pour soumettre le formulaire */}
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={submitting}
          >
            {/* Affiche "En cours..." lorsque la soumission est en cours */}
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
