import { Component } from "react";
class MyCmpVisibility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState(state => {
            if (state.visibility === false)
                return state.visibility = true;
            else
                return state.visibility = false;
        })
    }
    //OTRA SOLUCIÓN
    //   this.setState(state => ({
    //         visibility: !state.visibility
    //       }));
    //OTRA SOLUCIÓN 2
    //   this.setState(state => {
    //         if (state.visibility === true) {
    //            return { visibility: false };
    //          } else {
    //            return { visibility: true };
    //         }
    //       });

    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click me</button>
                </div>
            );
        }
    }
}
export default MyCmpVisibility;

