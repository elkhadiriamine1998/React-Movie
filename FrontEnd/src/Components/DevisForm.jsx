import React, { useState } from 'react';
import '../css/Devis.css'; // Si tu as une feuille de style pour les classes CSS utilisées


function DevisForm(){
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        typePrestation: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value }
          
        )
        console.log("objet: ", formData)
        return formData;
         
    }

    const handleSubmit  = (e) => {
        e.preventDefault()
        console.log('Formulaire soumis :', formData);

    }

    return (
        
        <form  onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title">Demande de devis - Préparation de cuisine</h2>
          
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="form-input"
            />
          
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
              className="form-input"
            />
          
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Téléphone"
              required
              className="form-input"
            />
          
            <select
              name="typePrestation"
              value={formData.typePrestation}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Type de prestation</option>
              <option value="repas à domicile">Repas à domicile</option>
              <option value="buffet événementiel">Buffet événementiel</option>
              <option value="préparation hebdomadaire">Préparation hebdomadaire</option>
            </select>
          
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget estimé (€)"
              className="form-input"
            />
          
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Détaillez votre besoin..."
              rows="4"
              className="form-input"
            />
          
            <button type="submit" className="form-button">
              Envoyer la demande
            </button>
          </form>)
    }
    
    

export default DevisForm