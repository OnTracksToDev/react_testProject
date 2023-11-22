const Home= () => {
    return(
        <section>
            <h1> Action Climat</h1>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../../images/slidehome1.jpg")}
      class="d-block w-100" alt="terre sèche"/>
    </div>
    <div class="carousel-item">
      <img src={require ("../../images/slidehome2.jpg")}
      class="d-block w-100" alt="forêt"/>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<p>
À l’occasion de leur niche parlementaire du 6 avril, le groupe des écologistes à l’Assemblée va proposer un texte visant à interdire les jets privés. L’objectif : « ramener les riches sur Terre et les faire consentir à l’effort général » de la transition écologique, a déclaré Julien Bayou, député EELV. « C’est la mesure qui pénalise le moins de monde mais qui produit le maximum d’effets pour le climat et l’atmosphère », a fait valoir l’écologiste lors d’une conférence de presse, qui portera la proposition de loi avec sa collègue Christine Arrighi.

Les deux élus ont énuméré les « chiffres vertigineux » de l’impact des jets privés, avec lesquels, pour chaque passager, « un trajet pollue dix fois plus qu’un avion de ligne ». « On a des personnes qui font des vols Cannes-Nice l’été pour éviter les embouteillages sur la côte », a déploré Christine Arrighi. « L’interdiction de circuler pour une personne qui n’a pas pu remplacer son diesel est beaucoup plus contraignante que le fait de contraindre l’ultra-riche de prendre la première classe d’un TGV ou la classe affaires d’un avion », a plaidé Julien Bayou.

De l' « écologie du buzz » pour Christophe Béchu
L’interdiction concernerait les « services de transport aérien non réguliers de passagers ne faisant pas l’objet d’une exploitation commerciale », ainsi que les services non réguliers de transport aérien public « dont le nombre de passagers est inférieur à soixante ».
</p>
        </section>
    )
}

export default Home