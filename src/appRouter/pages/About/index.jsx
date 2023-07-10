import Header from "../../../components/Header"
import Banner from "../../../components/Banner"
import '../../../styles/about.scss'
import landscapeAbout from "../../../assets/pictures/landscape-about.png"
import Collapse from "../../../components/Collapse"
import Footer from "../../../components/Footer"

function About () {
    const data = [
        {
          id: 1,
          title: "Fiabilité",
          description:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
        },
        {
          id: 2,
          title: "Respect",
          description:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
          id: 3,
          title: "Service",
          description:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
          id: 4,
          title: "Sécurité",
          description:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
      ];
       return (
        <div>
            <Header />
            <Banner image={landscapeAbout} />
            {data.map((item) => (
                <Collapse key={item.id} title={item.title} description={item.description} />
            ))}
            <Footer extraClassName="margin-top-about" />
        </div>
    )
}

export default About