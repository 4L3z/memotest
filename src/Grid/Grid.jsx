import { Card } from "../Card/Card";
import "./Grid.css"
import data from "../db.json"

export function  Grid(){
    const crearMazoMezclado = () =>{
       return data.concat(data)
    }
    console.log(crearMazoMezclado())


    console.log(data)
    return(
        <div className="grid-memotest">

        </div>
    )
}