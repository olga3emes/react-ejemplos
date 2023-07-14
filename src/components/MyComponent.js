import { Component } from "react";
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'DAW/DAM'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            name: "React rocks!"
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Haz click aquí</button>
                <h1>{this.state.name}</h1></div>
        );
    }
};
export default MyComponent;
