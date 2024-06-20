import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
function ProductDescription() {
  const navi = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    location: "",
    qualityAssurance: "",
    contact: "",
    description: "",
    price: "",
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
    form.append("description", formData.description);
    form.append("price", formData.price);

    try {
      const response = await axios.post(
        "http://localhost:3000/ProductDescription",
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
    <div className="overallContainerDashboard">
      <DashboardHeader />
    <form onSubmit={handleSubmit} className="proddesc">
      <div className="prod-desc-cont">
        <h2>Product Description</h2>
        <div className="prod-desc">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="prod-desc">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="prod-desc">
          <input
            type="text"
            name="qualityAssurance"
            placeholder="Quality Assurance"
            value={formData.qualityAssurance}
            onChange={handleChange}
          />
        </div>
        <div className="prod-desc">
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="prod-desc">
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="prod-desc">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="prod-desc pro-desc">
          <input
            type="file"
            name="image"
            className="image-button"
            onChange={handleImageChange}
          />
          <img src="image_upload.svg" className="img-but" alt="" />
          <h4>Upload Image</h4>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default ProductDescription;
