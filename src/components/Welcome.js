export default function Welcome(props) {
    return (
        <div>
            <p>Bienvenido, soy un componente</p>
            <p>Y tengo un props llamado user que toma el valor {props.user}</p>
        </div>
    );
};

