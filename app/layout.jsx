// Importez le fichier CSS global
import '@styles/globals.css';

// Importez les composants nécessaires
import Nav from '@components/Nav';
import Copywrite from '@components/Copywrite';
import Provider from '@components/Provider';

// Métadonnées pour la page
export const metadata = {
    title: "PromptoShare",
    description: "Découvrir & Partager des Prompts AI",
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple:['/apple-touch-icon.png?v=4'],
        shortcut: ['/apple-touch-icon.png']
    },
    charset: "UTF-8"
    
}

// Définition du composant RootLayout
const RootLayout = ({ children }) => {
  return (
    // Début de la structure HTML de la page
    <html lang='fr'>
        
      <body>
        {/* Composant Provider (peut-être un contexte de données) */}
        <Provider>

          {/* Section principale de la page */}
          <div className='main'>
            <div className='gradient'/>
          </div>

          {/* Section principale de l'application */}
          <main className='app'>
           
            <Nav />
           
            { children }
           
            <Copywrite />
          </main>
        </Provider>
      </body>
    </html> // Fin de la structure HTML
  )
}

export default RootLayout;
