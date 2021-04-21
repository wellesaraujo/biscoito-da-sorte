import React, {Component} from 'react'
import './estilo.css'

import Biscoito from './assets/biscoito.png'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      frase:''
    }
    this.frases=[
      'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
    this.quebraBiscoito=this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
      let newState = this.state;
      let randomNumber = Math.floor(Math.random()*this.frases.length)
      newState.frase = '"'+this.frases[randomNumber]+'"';
      this.setState({state:newState})
    }

  
  render(){
    return(
      <div className="container">
          <img className="img"src={Biscoito}/>
          <Botao nome='Abrir biscoito' acaoBtn = {this.quebraBiscoito}/>
          <h3 className="frase">{this.state.frase}</h3>

      </div>
    )
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
        
      </div>
    )
  }
}

export default App;
