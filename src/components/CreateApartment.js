import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateApartment = () => {

    const [title, setTitle] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0);
    const [img, setImg] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => { 
        e.preventDefault();
        
        const newApartment = { title, pricePerDay, img };
        
        axios
          .post("https://ironbnb-m3.herokuapp.com/apartments", newApartment)
          .then((response) => {
            setTitle("");
            setPricePerDay(0);
            setImg("");

            navigate('/apartments');
          });
      };


    return(
        <div>
            <h1>Add new Apartment</h1>
            <div className="create">
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input required
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />
            
                    <label>Price per Day</label>
                    <input required
                    type="number"
                    name="pricePerDay"
                    onChange={(e) => setPricePerDay(e.target.value)}
                    value={pricePerDay}
                    />

                    <label>Image</label>
                    <input
                    type="url"
                    name="img"
                    onChange={(e) => setImg(e.target.value)}
                    value={img}
                    />
                    
                    <button type="submit">Create Apartment</button>
                    
                </form>
            </div>
        </div>
    )
}