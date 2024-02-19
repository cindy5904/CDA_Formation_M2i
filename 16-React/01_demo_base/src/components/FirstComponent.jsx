import React from 'react';
import classes from "./FirstComponent.module.css"
import imageNature from '../assets/images/nature.jpg';
import TableRow from './TableRow';

const FirstComponent = () => {
    let nom = "Toto";
    const maFonction = () => {
        return "Bonjour" + nom
    }
    return ( 
        <div>
            <h1 className={classes.paragrapheRouge}>Mon premier Composant</h1>
            <p>Bonjour {nom}</p>
            <p>{maFonction()}</p>
            <img src={imageNature} alt="paysage" width={400}/>
            <table>
                <thead>
                    <tr>
                        <th>ColA</th>
                        <th>ColB</th>
                        <th>ColC</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                </tbody>
            </table>
        </div>
     );
}
 
export default FirstComponent;