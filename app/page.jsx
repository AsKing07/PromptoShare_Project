import Feed from "@components/Feed"

const Home = () => {
  return (
    
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Découvrir & Partager
            <br className="max-md:hidden" />
            <span className="orange_gradient">Des Prompts basés sur l'IA</span>
        </h1>
        <p className="desc text-center">
            PromptoShare est un outil open source de Prompts alimentés par
            l'IA permettant au monde de découvrir, créer et partager de créatifs Prompts.
        </p>

        <Feed />
        
    </section>
  )
}

export default Home