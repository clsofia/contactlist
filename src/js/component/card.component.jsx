import React from "react";
import{useNavigate} from "react-router";



export const CardComponent = props => {

const navigate = useNavigate()

return(
<div className="card">

    

<img src=  "data:image/jpeg;base64,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" alt="Image" height= "100" width= "100" />
<h2>{props.el.full_name}</h2>
<p>{props.el.adress}</p>
<p>{props.el.phone}</p>
<p>{props.el.email}</p>
<button className="btn btn-primary" onClick={e=>navigate("/edit/" + props.el.id)}>Edit</button>
<button className="btn btn-danger" onClick={e => actions.deleteUser(props.el.id)}>X</button>



</div>

)

}