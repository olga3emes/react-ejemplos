// // // import PropTypes from 'prop-types';

// // // export default function Items(props) {
// // //     // Items.defaultProps = {
// // //     //     quantity: 0
// // //     // }
// // //     Items.propTypes={handleClick: PropTypes.func.isRequired}
// // //     return <h2>El total de items en el carrito es de: {props.quantity}</h2>
// // // };

import PropTypes from 'prop-types';
import React from 'react';
class Items extends React.Component {
    static propTypes = {
        quantity: PropTypes.number
    };
    render() {
        return (
            <h2>El total de items en el carrito es de: {this.props.quantity}</h2>
        );
    }
};
export default Items;

