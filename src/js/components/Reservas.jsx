import * as React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {useState} from "react";
import {FinalReserva} from "./FinalReserva";


export const FormularioReserva = () => {

/*   const [submitted, setSubmitted] = useState(false)
   const [name, setName] = useState("")

    if (submitted) {
        return <FinalReserva name={name}/>
    }*/


    return (
        <form className={"form1"}>
                <div className={"form"}>
                    <label className={"labels"}>Nombre:</label>
                    <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        /*value={name}
                        onChange={(e) => setName(e.target.value)}*/
                    />
                </div>
                <div className={"form"}>
                    <label className={"labels"}>Correo:</label>
                    <input
                        id="correo"
                        type="email"
                        name="correo"

                    />
                </div>
                <div className={"form"}>
                    <label className={"labels"}>Fecha:</label>
                    <input
                        id="fecha"
                        type="date"
                        name="fecha"

                    />
                </div>
                <div className={"numPerson"}>
                    <label className={"labels"}>Nº de personas:</label>
                    <input
                        id="personas"
                        type="text"
                        name="personas"

                    />
                </div>
            <div className={"form"}>
                <label className={"labels"}>Actividad</label>
                <select id="actividad" name="actividad">
                    <option value={"actividad1"}> Paseo en bicicleta por el Montseny</option>
                    <option value={"actividad2"}> Descubre la costa en barco de vela</option>
                    <option value={"actividad3"}> Descubre la Barcelona Modernista de noche</option>
                    <option value={"actividad4"}> Del huerto a la mesa</option>
                </select>
            </div>
            {/*<button onClick={() => setSubmitted(true)}>Reservar</button>*/}
            <div className={"form"}>
            <Link to={"./FinalReserva"}>Reservar</Link>
            </div>
        </form>

    )
}
