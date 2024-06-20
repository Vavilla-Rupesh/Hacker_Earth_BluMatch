import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function BusinessDescription() {
  const navi = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    location: "",
    qualityAssurance: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("image", formData.image);
    form.append("name", formData.name);
    form.append("location", formData.location);
    form.append("qualityAssurance", formData.qualityAssurance);
    form.append("contact", formData.contact);
    try {
      const response = await axios.post(
        "http://localhost:3000/BusinessDescription",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navi("/main");
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="busdesc">
      <div className="business-desc-cont">
      <h2>Business Description</h2>
        <div className="business-desc">
          <input
            type="text"
            name="name"
            placeholder="Business Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="business-desc">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="business-desc">
          <input
            type="text"
            name="qualityAssurance"
            placeholder="Quality Assurance"
            value={formData.qualityAssurance}
            onChange={handleChange}
          />
        </div>
        <div className="business-desc">
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="business-desc bus-desc">
        <input type="file" name="image" className="image-button" onChange={handleImageChange} />
        <img src="image_upload.svg" className="img-but" alt="" />
        <h4>Upload Image</h4>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default BusinessDescription;