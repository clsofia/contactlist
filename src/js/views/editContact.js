import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";



export const EditContact = () => {
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const { theid } = useParams();
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (theid) {
            actions.getUser(theid).then(data => {
                console.log(data);
                setEmail(data.email);
                setPhone(data.phone);
                setAddress(data.address);
                setFullName(data.full_name)
            })
        }

    }, []

    )

    const handleSubmit = e => {
        e.preventDefault();
        if(theid){
            actions.updateContact(theid,full_name, email, address, phone)
        }
        else{
            actions.addContact(full_name, email, address, phone)
        }
        navigate("/")
    }


    return (

        <div className="container w-100">

            <form className="d-flex justify-content-center form-control" onSubmit={e => handleSubmit(e)} >
                <h1>ID: {theid}</h1>
                <div className="mb-3 col-6" >
                    <label for="InputFullName" className="form-label">Full Name</label>
                    <input type="text" value={full_name} className="form-control" id="InputFullName" name="full_name" required onChange={e => setFullName(e.target.value)} />
                    <div className="mb-3 col-6">
                        <label for="InputEmail" className="form-label">Email address</label>
                        <input type="email" value={email} className="form-control" id="InputEmail" name="e-mail" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 col-6">
                        <label for="PhoneNumber" className="form-label">Phone Number</label>
                        <input type="text" value={phone} className="form-control" id="PhoneNumber" name="phone" required onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3 col-6">
                        <label for="InputAddress" className="form-label">Address</label>
                        <input type="text" value={address} className="form-control" id="InputAddress" name="address" required onChange={e => setAddress(e.target.value)} />
                    </div>
                    <input className="btn btn-primary" type="submit" role="button" value={!theid ? "Add" : "Update"} />
                   
                </div>
            </form>
            <Link to="/">or get back to contacts</Link>
        </div>

    )


}