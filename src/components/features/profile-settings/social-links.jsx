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
        <>
        <div className='social-links-section'>
            <h2 className='social-links-section-title'>Social Links</h2>
            <div className='social-links-form-container'>
                <form>
                    <div className='label-and-input-socials'>
                        <label for="linkedin">LinkedIn</label>
                        <input
                            id="linkedin"
                            type="text"
                            placeholder="LinkedIn"
                            onChange={handleChange}
                            name="linkedin"
                            value={formData.linkedin}
                        />
                    </div>
                    <div className='label-and-input-socials'>
                        <label for="bluesky">Bluesky</label>
                        <input
                            id="bluesky"
                            type="text"
                            placeholder="Bluesky"
                            onChange={handleChange}
                            name="bluesky"
                            value={formData.bluesky}
                        />
                    </div>
                    <div className='label-and-input-socials'>
                        <label for="x">X</label>
                        <input
                            id="x"
                            type="text"
                            placeholder="X"
                            onChange={handleChange}
                            name="twitter"
                            value={formData.twitter}
                        />
                    </div>

                    <div className='label-and-input-socials'>
                        <label for="github">Github</label>
                        <input
                            id="github"
                            type="text"
                            placeholder="GitHub"
                            onChange={handleChange}
                            name="github"
                            value={formData.github}
                        />
                    </div>

                    <div className='label-and-input-socials'>
                        <label for="website">Personal Website</label>
                        <input
                            id="website"
                            type="text"
                            placeholder="Website"
                            onChange={handleChange}
                            name="portfolio"
                            value={formData.portfolio}
                        />
                    </div>

                    <div className='label-and-input-socials'>
                        <label for="blog">Blog</label>
                        <input
                            id="blog"
                            type="email"
                            placeholder="Blog"
                            onChange={handleChange}
                            name="blog"
                            value={formData.blog}
                        />
                    </div>
                </form>
                <button className='save-links-button'>
                    <span>Save Links</span>
                    <img src="../../../public/icons/Right1.svg"></img>
                </button>
            </div>
        </div>
        </>
    )
}

export default SocialLinks