import { Component } from "react";
class StatefulComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Olga M. M. M."
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
};
export default StatefulComponent;
