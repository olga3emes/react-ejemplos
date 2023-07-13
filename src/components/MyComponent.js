import { Component } from "react";
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'DAW/DAM'
        }
    }
    render() {
        const name= this.state.name;
        return (
            <div><h1>{name}</h1></div>
        );
    }
};
export default MyComponent;
