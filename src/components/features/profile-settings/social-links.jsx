import React from 'react'
import { useState } from 'react'
import '../../../App.css'
import "./social-links.css"

const SocialLinks = () => {
    const [formData, setFormData] = useState(
        {linkedin: "", 
         bluesky: "", 
         twitter: "", 
         github: "", 
         portfolio: "",
         blog: ""}
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
        <section className="form-container">
            <h2>Social Links</h2>
            
            <form className="social-links-form">
                <input
                    type="text"
                    placeholder="LinkedIn"
                    onChange={handleChange}
                    name="linkedin"
                    value={formData.linkedin}
                />
                <input
                    type="text"
                    placeholder="Bluesky"
                    onChange={handleChange}
                    name="bluesky"
                    value={formData.bluesky}
                />
                <input
                    type="text"
                    placeholder="X"
                    onChange={handleChange}
                    name="twitter"
                    value={formData.twitter}
                />
                <input
                    type="text"
                    placeholder="GitHub"
                    onChange={handleChange}
                    name="github"
                    value={formData.github}
                />
                <input
                    type="text"
                    placeholder="Website"
                    onChange={handleChange}
                    name="portfolio"
                    value={formData.portfolio}
                />
                <input
                    type="email"
                    placeholder="Blog"
                    onChange={handleChange}
                    name="blog"
                    value={formData.blog}
                />
                <button>
                    Save Links
                    <img src="public\icons\Right.svg"></img>
                </button>
            </form>
        </section>
    )
}

export default SocialLinks