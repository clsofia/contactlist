import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";



export const EditContact = () => {
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const {actions } = useContext(Context);
    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
        if (actions.addContact(full_name, email, address, phone)) navigate ("/");
    }


    return (

        <div className="container w-100">

            <form className="d-flex justify-content-center form-control" onSubmit={e => handleSubmit(e)} >

                <div className="mb-3 col-6" >
                    <label for="InputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="InputFullName" name="full_name" required onChange={e => setFullName(e.target.value)} />
                    <div className="mb-3 col-6">
                        <label for="InputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" name="e-mail" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 col-6">
                        <label for="PhoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="PhoneNumber" name="phone" required onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3 col-6">
                        <label for="InputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="InputAddress" name="address" required onChange={e => setAddress(e.target.value)} />
                    </div>

                    <input className="btn btn-primary" type="submit" role="button" value={"Add"} />
                </div>
            </form>
            <Link to="/">or get back to contacts</Link>
        </div>

    )


}