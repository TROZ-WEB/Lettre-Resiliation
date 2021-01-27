import React from "react"

import SvgEdit from "./svg/Edit"
import SvgBin from "./svg/Bin"
import SvgLaPoste from "./svg/LaPoste"

function Form (props) {
    return (
        <form className="form" onSubmit={props.handleFormSubmit}>

            <div className="input_container">
                <a className="adresschange_link" href="">
                    <SvgEdit className="adresschange_img"/> Modifier
                </a>
                <label className="label">Adresse de résiliation</label>
                <input
                    className="input input--readonly"
                    type="text" 
                    readOnly
                    name="adresseResiliation"
                    value={props.state.adresseResiliation} 
                />
            </div>

            <div className="input_container">
                <div className="popover_container">
                    <a className="popover_link" href=""></a>
                    <div className="popover">
                        <p className="popover_text">Vos références se trouvent sur votre contrat, vos factures ou votre espace client.</p>
                    </div>
                </div>
                <label className="label">Numéro d'abonné*</label>
                <input
                    className="input"
                    type="text" 
                    name="numeroAbonne"
                    value={props.state.numeroAbonne} 
                    onChange={props.handleInputChange} 
                />
            </div>

            <div className="input_container input_container--select">
                <label className="label">Motif de résiliation*</label>
                <select 
                    className="input input--select"
                    value={props.motifResiliation}
                    onChange={props.handleChange}
                    name="motifResiliation"
                >
                    <option value="" selected="selected">Choisissez</option>
                    <option value="680">Cas de force majeure</option>
                    <option value="727">Droit de rétractation (14 jours)</option>
                    <option value="778">Mise en demeure</option>
                    <option value="681">Période d'engagement achevée</option>
                    <option value="679">Autres raisons</option>
                </select>
            </div>

            <div className="input_container input_container--textarea">
                <textarea 
                    className="input input--textarea"
                    placeholder="Contenu de la lettre*"
                    name="contenuLettre"
                    value={props.state.contenuLettre}
                    onChange={props.handleInputChange}
                />
            </div>

            <div className="input_container input_container--file">
                <label className="label">
                    <b>Ajouter une pièce jointe</b> (10Mo maximum au format JPG, PNG ou PDF)<br/>
                    <a className="input_button">Parcourir...</a>
                    <input 
                        className="input input--file" 
                        type="file" 
                        name="piecesJointes"
                        ref={props.piecesJointes}
                        onChange={(e) => props.handleFileChange(e)} 
                        accept="image/jpg, image/png, application/pdf"
                    />
                    {props.state.piecesJointes.length === 0 ?
                        <p className="input_status--file">Aucun fichier sélectionné</p> :
                        props.state.piecesJointes.map(x => 
                        <p className="input_status--file" onClick={props.handleFileRemove.bind(props, x)}>{x.name}<SvgBin className="fileremove_img"/></p>
                        )
                    }
                </label>
            </div>
                
            <a className="input--addfile" href="">Ajouter un nouveau fichier</a>

            <button className="button" type="submit">Envoyer cette lettre</button>

            <div className="partner_container">
                <p className="partner">Votre recommandé sera envoyé par <SvgLaPoste className="partner_img"/></p>
            </div>
        </form>
    )
}

export default Form