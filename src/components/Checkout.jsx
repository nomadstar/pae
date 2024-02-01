import React, { Component } from 'react';
import "./paico.css"

class Checkout extends Component {

    openCheckout = async (e) => {
        e.preventDefault();

        var handler = window.ePayco.checkout.configure({
            key: '2a99b7a8944c88321bb6c8166500c81e',
            test: true
        });

        const { title, precio, question, gratis } = this.props;

        var url;
        if(question){
            url = "https://paemimanualdelbebe.netlify.app/thanksp"
        }else{
            url = "https://paemimanualdelbebe.netlify.app/thankst"
        }

        let data = {
            name: title,
            description: `Servicio temática ${question ? "PREGUNTA" : "TELECONSULTA"}`,
            currency: "usd",
            amount: gratis ? 0 : precio,
            country: "co",
            confirmation: "https://api.mimanualdelbebe.com/api/pae/confirmation",
            response: url
        };


        // Abre el pago y maneja la respuesta
        handler.open(data)
            .then(response => {
                // Verifica la respuesta del pago
                if (response.status === "aceptado") {
                    console.log("ayuaaaa!!!!!!!!!!!!!!!!!!")
                    // Redirige al usuario a la ruta correspondiente

                    /*
                    // Procesa la información en el servidor
                    enviarInfo(userInfo, dataSend);
                    // Redirige al usuario a la ruta "/"
                    window.location.href = '/';
                    */
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
                    placeholder={`Ir a pagar $${this.props.precio}`}
                    onClick={this.openCheckout}
                />
            </React.Fragment>
        );
    }
}

export default Checkout;
