import List from "./List";

export default function ToDo() {
    return(
        <div>
            <h1>To Do Lists</h1>
            <h2>Hoy</h2>
            <List tasks={["Ir a clase", "Hacer la entrega de Interfaces",]}/>
            <h2>Mañana</h2>
            <List tasks={[ "Ir de compras", "Programar", "Fiesta"]}/>
        </div>        
    );
};
