import { Component } from "react";
import Welcome from "./Welcome";
class Inicio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Welcome name={"Olga"} />
            </div>
        );
    }
};
export default Inicio;