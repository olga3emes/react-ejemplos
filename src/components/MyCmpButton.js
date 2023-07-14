import { Component } from "react";
class MyCmpButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            text: 'You clicked'
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <h1>{this.state.text}</h1></div>
        );
    }
};
export default MyCmpButton;
