import React, { Component } from 'react';
import "./paico.css"

class Checkout extends Component {

    openCheckout = async (e) => {
        e.preventDefault();

        var handler = window.ePayco.checkout.configure({
            key: '2a99b7a8944c88321bb6c8166500c81e',
            test: true
        });

        const { title, precio, question, gratis, userInfo, dataSend } = this.props;

        let data = {
            name: title,
            description: `Servicio temática ${question ? "PREGUNTA" : "TELECONSULTA"}`,
            currency: "usd",
            amount: gratis ? 0 : precio,
            extra1: JSON.stringify(userInfo),
            extra2: JSON.stringify(dataSend),
            country: "co",
            confirmation: "https://api.mimanualdelbebe.com/api/pae/confirmation",
            response: "https://paemimanualdelbebe.netlify.app"
        };


        // Abre el pago y maneja la respuesta
        handler.open(data);
    }

    render() {
        return (
            <React.Fragment>
                <input
                    className='boton_paicos'
                    type="submit"
                    placeholder={`Ir a pagar $${this.props.precio}`}
                    onClick={this.openCheckout}
                />
            </React.Fragment>
        );
    }
}

export default Checkout;
