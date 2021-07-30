export class ExperienceApi {

    // hace una llamada al backend y convierte el resultado en un JSON
    getExperiences() {
        return fetch("/ExperiencePanel")
            .then(response => response.json())
    }
}