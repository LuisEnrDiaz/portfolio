import { Card } from "../../utils/card/card";
import { Title } from "../../utils/title/title";

export function MyProjects() {
    return (
        <main className="body w-full p-4 ml-48 min-h-screen max-h-full flex flex-col max-sm:items-center max-sm:ml-0 max-sm:mt-20 max-md:ml-40 sm:justify-center max-md:items-center">
            <Title title="mis proyectos" width="w-64" />

            <div className="grid grid-flow-row place-content-center m-4 mt-28">
                <Card
                    image="./assets/myProjects/form.png"
                    title="Formulario"
                    description="Formulario simple con un Register y un Login, si el usuario no rellena los campos requeridos se le marcaran con una alerta en rojo los campos necesarios para completar."
                    flexRow={true}
                    webLink="https://formulario-react-12dcfe.netlify.app/"
                    codeLink="https://github.com/LuisEnrDiaz/formulario"
                    front={true}
                />

                <Card
                    image="./assets/myProjects/pokeApi.png"
                    title="pokeapi"
                    description="Porque no entras y encuentras tus pokemons favoritos y descubres todas sus habilidades."
                    flexRow={false}
                    webLink="https://pokemon-poke-api.netlify.app/"
                    codeLink="https://github.com/LuisEnrDiaz/poke-api-react"
                    front={true}
                />

                <Card
                    image="./assets/myProjects/todoList.png"
                    title="todo-list"
                    description="Seguro que tienes que ir hacer la compra y no tienes un boligrafo y papel no te preocupes da click al enlace y podras tener tu lista."
                    flexRow={true}
                    webLink="https://todo-list-reactts.netlify.app/"
                    codeLink="https://github.com/LuisEnrDiaz/todo-list"
                    front={true}
                />
            </div>
        </main>
    );
}
