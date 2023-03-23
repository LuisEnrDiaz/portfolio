import { Card } from "../../utils/card/card";
import { Title } from "../../utils/title/title";

export function MyProjects() {
    return (
        <main className="body w-full p-4 ml-48 min-h-screen max-h-full flex flex-col max-sm:items-center max-sm:ml-0 max-sm:mt-20 max-md:ml-0 md:ml-48 sm:justify-center max-md:items-center max-lg:w-full">
            <Title title="mis proyectos" width="w-64" />

            <div className="grid place-items-center m-4 mt-28">
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
                    title="todo list"
                    description="Seguro que tienes que ir hacer la compra y no tienes un boligrafo y papel no te preocupes da click al enlace y podras tener tu lista."
                    flexRow={true}
                    webLink="https://todo-list-reactts.netlify.app/"
                    codeLink="https://github.com/LuisEnrDiaz/todo-list"
                    front={true}
                />

                <Card
                    image="./assets/myProjects/construction.jpg"
                    title="Tatoo Center Back"
                    description="Api creada de tattoo center podras obtener tanto tatuajes como usuarios, los usuarios puedes registrarse y hacer login,crear tatuajes, actualizarlos y eliminarlos"
                    flexRow={false}
                    codeLink="https://github.com/LuisEnrDiaz/Tattoo-Center-Back"
                    webLink=""
                    front={false}
                ></Card>

                <Card
                    image="./assets/myProjects/tattooCenter.png"
                    title="Tatoo Center"
                    description="Llamadondo a la api creada de tattoo center podras obtener tanto tatuajes como usuarios, los usuarios puedes registrarse y hacer login,crear tatuajes, actualizarlos y eliminarlos"
                    flexRow={true}
                    codeLink="https://github.com/LuisEnrDiaz/Tattoo-Center-Front"
                    webLink="https://tattoo-center.netlify.app/"
                    front={true}
                ></Card>
            </div>
        </main>
    );
}
