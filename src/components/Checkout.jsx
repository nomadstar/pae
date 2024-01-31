import React, {Component} from 'react';
import "./paico.css"

export default class Checkout extends Component {

    
    openchekout = e =>{
        e.preventDefault();

        var handler = window.ePayco.checkout.configure({
            key: '2a99b7a8944c88321bb6c8166500c81e',
            test: true
        });
    let data = {
          name: "Vestido Mujer Primavera",
          description: "Vestido Mujer Primavera",
          invoice: "1234",
          currency: "cop",
          amount: '119000',
          country: "co",
          response: "http://10.50.2.239/api/pae/confirmation",
          //response: "http://payco.co",
          }
        handler.open(data);
    }
    render(){
       
	
        return(

                <React.Fragment>
                    
                    <input className='boton_paicos'
                    type="submit"
                    placeholder="pagar"
                    onClick={this.openchekout}
                    /> 
                  
              
                    </React.Fragment>
       
        )
    } 
   
}