"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";  {/*Composant qui gère l'affichage unitaire des prompts */}
import Pagination from "./Pagination";

// Composant pour afficher une liste de PromptCard
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

// Composant principal Feed
const Feed = () => {
  const [allPosts, setAllPosts] = useState([]); // Liste de tous les posts
  const [searchText, setSearchText] = useState(""); // Texte de recherche
  const [searchTimeout, setSearchTimeout] = useState(null); // Timeout de recherche
  const [searchedResults, setSearchedResults] = useState([]); // Résultats de recherche
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const [postsPerPage] = useState(8); // Nombre d'éléments par page

  

  // Fonction pour récupérer tous les posts
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setAllPosts(data);
  };

  // Effect pour récupérer les posts au chargement de la page
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fonction pour filtrer les prompts en fonction du texte de recherche
  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' pour une recherche insensible à la casse
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  // Fonction pour gérer le changement de recherche
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  // Fonction pour gérer le clic sur un tag
  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  // Fonction pour gérer le changement de page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Rechercher un hashtag ou un utilisateur'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      {/* Affiche la liste de PromptCard en fonction du texte de recherche */}
      {searchText ? (
        <PromptCardList 
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={currentPosts} handleTagClick={handleTagClick} />
      )}

       {/* Pagination */}
       <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allPosts.length}
        currentPage={parseInt(currentPage)}
        paginate={paginate}
      />
    </section>
  );
};

export default Feed;