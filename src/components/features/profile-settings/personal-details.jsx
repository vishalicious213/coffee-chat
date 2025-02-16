import React from 'react'
import { useState } from 'react'
import Avatar from './avatar'
import '../../../App.css'
import "./profile-settings.css"
import "./personal-details.css"

const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        interests: "",
        pronouns: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <form className="form-container">
            <Avatar />
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        placeholder="Placeholder"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pronouns">Pronouns</label>
                    <input
                        type="text"
                        placeholder="Placeholder"
                        onChange={handleChange}
                        name="pronouns"
                        value={formData.pronouns}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                    placeholder="Input text field here"
                    onChange={handleChange}
                    name="bio"
                    value={formData.bio}
                />
                <div className="char-count">4/240</div>
            </div>
        </form>
    );
};

export default PersonalDetails;