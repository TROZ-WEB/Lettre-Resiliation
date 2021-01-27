import React, {Component} from "react"

import './css/App.scss';

import Header from "./components/Header"
import Title from "./components/Title"
import Steps from "./components/Steps"
import Form from "./components/Form"

class App extends Component {
  constructor () {
    super ();
    this.state = {
      adresseResiliation: "SFR Résiliation - TSA 30103 - 69947 LYON Cedex 20",
      numeroAbonne: "",
      motifResliation: "",
      piecesJointes: [],
      contenuLettre: "Madame, Monsieur,\n\nPar ce courrier recommandé, je vous informe que je souhaite mettre fin au contrat qui nous lie.\nJe vous prie de bien vouloir prendre en considération ma demande et de m'informer, par écrit, du terme du contrat.\n\nVeuillez accepter, Madame, Monsieur, l'expression de mes salutations distinguées."
    }
    // this.pieceJointe = React.createRef()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleFileRemove = this.handleFileRemove.bind(this)
  }

  handleInputChange (event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleFileChange(e) {
    var piecesJointes = e.target.files;
    var piecesJointesArr = Array.prototype.slice.call(piecesJointes);
    this.setState(prevState => {
      return {
        piecesJointes: [...prevState.piecesJointes, ...piecesJointesArr]
      }
    })
  }

  handleFileRemove(f) {
    this.setState({ piecesJointes: this.state.piecesJointes.filter(x => x !== f) }); 
}

  handleFormSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Title/>
          <Steps/>
          <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} handleFileChange={this.handleFileChange} handleFileRemove={this.handleFileRemove} state={this.state}/> {/*pieceJointe={this.pieceJointe}*/}
        </div>
      </div>
    );
  }
}

export default App;
