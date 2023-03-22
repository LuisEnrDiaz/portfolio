import { DescriptionText } from "../../utils/descriptionText/descriptonText";
import { Title } from "../../utils/title/title";

export function AboutMe() {
    return (
        <main className="body w-full h-screen p-4 ml-48">
            <Title title="ACERCA DE MI" width="w-56"></Title>

            <div className="grid grid-flow-col place-content-center  gap-4">
                <section className="w-[40rem] m-4 p-8 pl-36 pt-28 grid place-content-center">
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

                <section className="w-[45rem] grid place-content-center pl-36 pt-28">
                    <img src="./assets/AboutMe/luisAboutMe.png" alt="" />
                </section>
            </div>
        </main>
    );
}
