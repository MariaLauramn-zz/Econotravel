import * as React from 'react';
import {useEffect, useState} from "react";
import {ExperienceApi} from "../apis/experiencesApi";
import {Link} from "react-router-dom";

export const ExperiencePanel = (props) => {

    const [experiences, setExperiences] = useState([]);

    // useEffect con el parámetro "[]"
    // se puede usar para inicializar el componente.
    // Más info: https://es.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    useEffect(() => {
        let experienceApi = new ExperienceApi()
        experienceApi.getExperiences()
            .then(experiences => setExperiences(experiences))
    }, []);

    return <div>
        <div className={"experienceSection"}>
            {props.experiences.map((experience) =>
                <div className={"experienceCard"} key={experience.id}>
                    <div className={"experienceImage"}>
                        {experience.image}
                    </div>
                    <div className={"experienceText"}>
                        <h1 className={"experienceName"}> {experience.name} </h1>
                        <p className={"experienceDescription"}>{experience.description}</p>
                        <p className={"experienceDescription"}>{experience.description2}</p>
                        <p className={"experienceDescription"}><span>Duración:</span> {experience.duration}</p>
                        <p className={"experienceDescription"}><span>Accesibilidad:</span> {experience.accesibility}</p>
                        <p className={"experienceDescription"}><span>Etiquetas:</span> {experience.labels}</p>
                        <h5 className={"parrafoPrecio"}><p><span>{experience.pricePerPerson}€</span> por persona</p>
                        </h5>
                        <div className={"form"}>
                            <Link to={"./Reservas"}>Reservar</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}



