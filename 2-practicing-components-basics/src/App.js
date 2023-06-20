import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import ConceptsMenu from "./assets/ConceptsMenu";
import ConceptsHeader from "./assets/ConceptsHeader";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Componentes permitem dividir a interface do usuário em partes independentes e reutilizáveis, e pensar em cada parte de forma isolada. Os componentes podem receber dados através de props e podem renderizar saída dinâmica usando JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State é um conjunto de dados que pode mudar ao longo do tempo. Conforme ele é alterado, a interface do usuário deve ser atualizada para refletir os dados atualizados. Cada componente pode manter seu próprio estado e vários componentes podem compartilhar o mesmo estado.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Manipuladores de eventos são adicionados por meio de props aos componentes (integrados). Você passa funções como valores para esses manipuladores de eventos para controlar quais funções são executadas para quais eventos.",
  },
];

function App() {
  return (
    <div>
      <ConceptsHeader img={keyConceptsImage} />
      <ul id="concepts">
        <ConceptsMenu
          title={concepts[0].title}
          img={concepts[0].image}
          description={concepts[0].description}
        />
        <ConceptsMenu
          title={concepts[1].title}
          img={concepts[1].image}
          description={concepts[1].description}
        />
        <ConceptsMenu
          title={concepts[2].title}
          img={concepts[2].image}
          description={concepts[2].description}
        />
      </ul>
    </div>
  );
}

export default App;
