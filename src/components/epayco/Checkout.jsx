import React, { Component } from 'react';
import "./paico.css"

class Checkout extends Component {

    openCheckout = async (e) => {
        e.preventDefault();

        var handler = window.ePayco.checkout.configure({
            key: '2a99b7a8944c88321bb6c8166500c81e',
            test: true
        });

        const { title, precio, question, userInfo, dataSend } = this.props;

        let data = {
            name: title,
            description: `Servicio temática ${question ? "PREGUNTA" : "TELECONSULTA"}`,
            currency: "usd",
            amount: precio,
            country: "co",
            confirmation: "https://api.mimanualdelbebe.com/api/pae/confirmation",
            response: "https://paemimanualdelbebe.netlify.app",
            extra1: JSON.stringify(userInfo),
            extra2: JSON.stringify(dataSend)
        };
        handler.open(data);
    }

    render() {
        return (
            <React.Fragment>
                <button
                type='button'
                className='boton_paicos'
                onClick={this.openCheckout}
                >
                Ir a pagar ${this.props.precio}
                </button>
            </React.Fragment>
        );
    }
}

export default Checkout;
