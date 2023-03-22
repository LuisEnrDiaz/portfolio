import { Card } from "../../utils/card/card";
import { Title } from "../../utils/title/title";

export function MyProjects() {
    return (
        <main className="body h-auto p-4 w-full ml-48 ">
            <Title title="mis proyectos" width="w-64" />

            <div className="grid grid-flow-row place-content-center m-4">
                <Card
                    image="./assets/myProjects/form.png"
                    title="pokeapi"
                    description="Formulario simple con un Register y un Login, si el usuario no rellena los campos requeridos se le marcaran con una alerta en rojo los campos necesarios para completar."
                    flexRow={true}
                    webLink="https://formulario-react-12dcfe.netlify.app/"
                    codeLink="https://github.com/LuisEnrDiaz/formulario"
                />

                <Card
                    image="./assets/myProjects/pokeApi.png"
                    title="pokeapi"
                    description="Porque no entras y encuentras tus pokemons favoritos y descubres todas sus habilidades."
                    flexRow={false}
                    webLink="https://pokemon-poke-api.netlify.app/"
                    codeLink="https://github.com/LuisEnrDiaz/poke-api-react"
                />

                <Card
                    image="./assets/myProjects/todoList.png"
                    title="todo-list"
                    description="Seguro que tienes que ir hacer la compra y no tienes un boligrafo y papel no te preocupes da click al enlace y podras tener tu lista."
                    flexRow={true}
                    webLink="https://todo-list-reactts.netlify.app/"
                    codeLink="https://github.com/LuisEnrDiaz/todo-list"
                />
            </div>
        </main>
    );
}
