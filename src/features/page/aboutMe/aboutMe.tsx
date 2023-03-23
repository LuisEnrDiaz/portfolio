import { DescriptionText } from "../../utils/descriptionText/descriptonText";
import { Title } from "../../utils/title/title";

export function AboutMe() {
    return (
        <main className="body w-full p-4 ml-48 min-h-screen max-h-full flex flex-col max-sm:items-center max-sm:ml-0 max-sm:mt-20 max-md:ml-40 sm:justify-center lg:justify-between">
            <Title title="ACERCA DE MI" width="w-56"></Title>

            <div className="flex flex-col place-content-center gap-4 max-sm:items-center lg:flex-row mb-20">
                <section className="grid place-content-center max-sm:w-72 max-sm:mt-12 max-sm:m-0 max-md:m-8 max-md:w-96 md:w-auto">
                    <DescriptionText>
                        <p>
                            Soy un apasionado cocinero que decidió cambiar de
                            profesión y se graduó del bootcamp en ISDI Coders.
                            Durante mi experiencia laboral en el mundo de la
                            gastronomía, aprendí la importancia del trabajo en
                            equipo, la resolución de problemas, el control del
                            estrés bajo presión y muchas otras habilidades
                            valiosas.
                        </p>
                    </DescriptionText>

                    <DescriptionText>
                        <p>
                            Durante mi bootcamp en ISDI Coders, tuve la
                            oportunidad de trabajar en el proyecto "Tattoo
                            Center", donde pude aplicar mis conocimientos en el
                            desarrollo web. Participé en la creación de la
                            interfaz de usuario utilizando tecnologías como{" "}
                            <strong>
                                HTML, React/Redux, CSS, Sass y TypeScript.
                            </strong>
                            Además, adquirí experiencia en el lado del servidor
                            utilizando{" "}
                            <strong>NodeJS, ExpressJS y MongoDB</strong> para el
                            backend del proyecto. También utilicé{" "}
                            <strong>Jest</strong> para las pruebas unitarias.
                        </p>
                    </DescriptionText>

                    <DescriptionText>
                        <p>
                            Valorizo el trabajo en equipo como una forma de
                            alcanzar metas ambiciosas. Creo que la colaboración
                            efectiva, la comunicación clara y la disposición
                            para aprender de mis compañeros son fundamentales
                            para el éxito en cualquier proyecto. Estoy
                            emocionado de seguir aprendiendo y trabajando con
                            personas talentosas y comprometidas, y estoy seguro
                            de que juntos podemos lograr grandes cosas.
                        </p>
                    </DescriptionText>
                </section>

                <section className="grid place-content-center max-sm:w-60 max-md:w-[25rem] lg:w-[40rem]">
                    <img src="./assets/AboutMe/luisAboutMe.png" alt="" />
                </section>
            </div>
        </main>
    );
}
