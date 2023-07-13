import { Component } from "react";
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'DAW/DAM'
        }
    }
    render() {
        return (
            <div><h1>{this.state.name}</h1></div>
        );
    }
};
export default MyComponent;
