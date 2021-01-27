import React from "react"

function Steps (props) {
    return (
        <div className="steps_container">
            <div className="step step--valid">
              <div className="step_circle">
                <h1 className="step_number">1</h1>
              </div>
              <p className="step_description">Services à résilier</p>
            </div>
            <div className="step step--active">
              <div className="step_circle">
                <h1 className="step_number">2</h1>
              </div>
              <p className="step_description">Modèle de lettre</p>
            </div>
            <div className="step">
              <div className="step_circle">
                <h1 className="step_number">3</h1>
              </div>
              <p className="step_description">Coordonnées</p>
            </div>
            <div className="step">
              <div className="step_circle">
                <h1 className="step_number">4</h1>
              </div>
              <p className="step_description">Récapitulatif</p>
            </div>
        </div>
    )
}

export default Steps