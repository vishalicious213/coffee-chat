import React from 'react'
import { useState } from 'react'
import Avatar from './avatar'
import '../../../App.css'
import "./profile-settings.css"

const PersonalDetails = () => {
    const [formData, setFormData] = useState(
        {firstName: "", 
         lastName: "", 
         email: "", 
         bio: "", 
         interests: "",
         pronouns: ""}
    )
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <form>
            <Avatar />
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <label htmlFor="bio">Bio</label>
            <textarea 
                value={formData.bio}
                placeholder="Bio"
                onChange={handleChange}
                name="bio"
            />

            <label htmlFor="interests">Interests</label>
            <br />
            <select 
                id="interests"
                value={formData.interests}
                onChange={handleChange}
                name="interests"
            >
                <option value="">- Choose -</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option>
                <option value="sql">SQL</option>
                <option value="mongo">MongoDB</option>
                <option value="tw">Tailwind</option>
            </select>

            <label htmlFor="pronouns">Pronouns</label>
            <br />
            <select 
                id="pronouns"
                value={formData.pronouns}
                onChange={handleChange}
                name="pronouns"
            >
                <option value="">- Choose -</option>
                <option value="unspecified">Don't specify</option>
                <option value="they">they/them</option>
                <option value="she">she/her</option>
                <option value="he">he/him</option>
                <option value="custom">Custom</option>
            </select>
        </form>
    )
}

export default PersonalDetails