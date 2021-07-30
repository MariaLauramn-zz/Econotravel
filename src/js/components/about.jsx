import * as React from "react";
import fundadora from "./assets/fundadora.jpg";
export const About = () => {
    return (
        <section>
            <img className={"imgFundadora"} src={fundadora}/>
            <div className={"parrafos"}>
                <p>
                    Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en
                    bicicleta por
                    Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que
                    ofrecían ciudades
                    como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas
                    con la
                    naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes
                    naturales de
                    Cataluña.
                    <br/><br/>
                    Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de
                    experiencias
                    turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel
                    Barcelona.
                </p>
            </div>
            <div className={"contacto"}>
                <p>Teléfono: 93 000 00 00</p>
                <p>Correo:<a href={"mailto:info@econotravel.com"}>info@econotravel.com</a></p>
                <p>Dirección: Carrer dels Viatgers, 28, 08000 Barcelona</p>
            </div>
        </section>
    )
}