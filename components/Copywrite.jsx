// components/Copyright.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Fonction qui retourne le composant Copyright
const Copyright = () => {
  // Obtient l'année en cours
  const date = new Date().getFullYear();

  // Retourne le contenu du composant
  return (
    <div className="flex items-center">
      <span className="mr-2">© {date} Charbel SONON. Tous droits réservés.</span>
      <a
        href="https://github.com/AsKing07"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-700"
      >
        <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
      </a>
    </div>
  );
};

export default Copyright;