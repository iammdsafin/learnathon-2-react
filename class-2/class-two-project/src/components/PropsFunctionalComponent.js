export function  PropsFunctionalComponent(props) {
    return (
        <div>
            <h1>Planet Earth Informations</h1>
            <p>Name: {props.name}</p>
            <p>Gravity: {props.gravity}</p>
            <p>Population: {props.population}</p>
        </div>
    )
}