import React, { useState } from "react";

function Form_submitchange() {
    // State for form data
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    // State to store submitted data
    const [submittedData, setSubmittedData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    // Handle input changes
    const formChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const onSubmitChange = (e) => {
        e.preventDefault(); // Prevent page reload on form submit

        // Save form data to submittedData state
        setSubmittedData(form);

        // Reset the form fields after submitting
    };

    return (
        <>
            {/* Form to accept inputs */}
            <form className="container col-6 mt-5" onSubmit={onSubmitChange}>
                <div className="mb-3">
                    <label htmlFor="exampleInputname" className="form-label">
                        Name
                    </label>
                    <input
                        onChange={formChange}
                        value={form.name}
                        name="name"
                        type="text"
                        className="form-control"
                        id="exampleInputname"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        onChange={formChange}
                        value={form.email}
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputphone" className="form-label">
                        Mobile No
                    </label>
                    <input
                        onChange={formChange}
                        value={form.phone}
                        name="phone"
                        type="tel"
                        className="form-control"
                        id="exampleInputphone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        onChange={formChange}
                        value={form.password}
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {/* Display submitted data in h1 tags if present */}
            <div>
                {/* {submittedData && ( */}
                    <div>
                        <p>name is: {submittedData.name}</p>
                        <p>email is: {submittedData.email}</p>
                        <p>phone is: {submittedData.phone}</p>
                        <p>password is: {submittedData.password}</p>
                    </div>
                {/* )} */}
            </div>
        </>
    );
}

export default Form_submitchange;
