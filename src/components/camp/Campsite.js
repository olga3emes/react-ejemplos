import { Component } from "react";
import Camper from "./Camper"
class CampSite extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper name={'CamperBot'} />
            </div>
        );
    }
};
export default CampSite;