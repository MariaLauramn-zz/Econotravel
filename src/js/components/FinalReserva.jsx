import * as React from "react";
import {FormularioReserva} from "./Reservas";
import reservar from "./assets/reservar.jpg";



export const FinalReserva = (props) => <section>
    <div className={"contenedor2"}>
        <img className={"imgReservado"} src={reservar}/>
        <div className={"textReservado"}>
            <h1>¡Gracias por realizar tu reserva con nosotros!</h1>
            {/*<h2> Detalles de tu reserva</h2>*/}
            {/*<p>{props.name}</p>*/}
        </div>
    </div>
</section>

