import React, { Component } from 'react';
import "./paico.css"

class Checkout extends Component {
    openCheckout = async (e) => {
        e.preventDefault();

        var handler = window.ePayco.checkout.configure({
            key: '2a99b7a8944c88321bb6c8166500c81e',
            test: true
        });

        let data = {
            name: "Vestido Mujer Primavera",
            description: "Vestido Mujer Primavera",
            currency: "cop",
            amount: '119000',
            country: "co",
            confirmation: "https://api.mimanualdelbebe.com/api/pae/confirmation",
            response: "https://mimanualdelbebe.com/",
            redirect: "https://mimanualdelbebe.com/"
        };
        
        // Abre el pago y maneja la respuesta
        handler.open(data)
            .then(response => {
                // Verifica la respuesta del pago
                if (response.status === "aceptado") {
                    alert("it works!");
                    // Procesa la información en el servidor
                    enviarInfo(userInfo, dataEmbarazo);
                    // Redirige al usuario a la ruta "/"
                    window.location.href = '/';
                } else {
                    // El pago no fue exitoso, manejar según sea necesario
                    console.error('Pago no exitoso:', response);
                }
            })
            .catch(error => {
                // Maneja errores en la apertura del pago
                console.error('Error al abrir el pago:', error);
            });
        
    }

    render() {
        return (
            <React.Fragment>
                <input
                    className='boton_paicos'
                    type="submit"
                    placeholder="Ir a pagar"
                    onClick={this.openCheckout}
                />
            </React.Fragment>
        );
    }
}

export default Checkout;
