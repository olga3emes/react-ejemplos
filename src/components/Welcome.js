import { Component } from "react";
class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Bienvenid@ <strong>{this.props.name}</strong>, soy un componente</p>
            </div>
        );
    }
};
export default  Welcome;
