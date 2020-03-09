import React from 'react';
import Card from "./card"

class form extends React.Component {

    state= {
        crdnmbr:'---- ---- ---- ----',
        crdhldr:'JOHN DOE',
        expr:'MM/YY'
    }

    crdnmbrm =(event)=>{
        const vcrdnmbr = /^[0-9]*$/g;
        if (vcrdnmbr.test(event.target.value)) {
          this.setState({
            crdnmbr: event.target.value
              .replace(/[^\dA-Z]/g, '')
              .replace(/(.{4})/g, '$1 ')
              .trim()
          });
        } 
      };

    crdhldrm =(event)=>{
        const vcrdhldr=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        if(vcrdhldr.test(event.target.value))  {
            this.setState({ 
                crdhldr: event.target.value.toUpperCase() 
                    .replace(/^[0-9]*$/g, '')
            })}
  
    }

    exprm =(event)=>{
        const vexpr = /^[0-9]*$/g;
        if ( (vexpr.test(event.target.value)) && (event.target.value.slice(0,2)<13) && (event.target.value.length<5) ){
            this.setState({
                expr: (event.target.value
                )
                .replace(/(.{2})/, '$1/')
                
        })
        
    }
}   
    render() {
    return (
        
        <div className='container'>
        <Card crdnmbr={this.state.crdnmbr} crdhldr={this.state.crdhldr} expr={this.state.expr}/>
        
        <div className="form">

            <div className="crdnmbr item">

                
                <input id="inpt-crdnmbr" class="inpt" placeholder="Card Number" type="text" maxlength="16" onChange={this.crdnmbrm}></input>
 
            </div>

            <div className="crdhldr item">

               
                <input id="inpt-crdhldr" class="inpt" placeholder="Card Holder Name" type="text" maxlength="20" onChange={this.crdhldrm}></input>

            </div>

            <div className="expr item">


                <input id="inpt-expr" class="inpt" placeholder="Expiration Date" type="text" maxlength="4" onChange={this.exprm}></input>

            </div>
        
          
          
        </div>

        </div>
    )
}
}

export default form;