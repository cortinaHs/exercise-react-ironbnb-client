import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export const ApartmentsList = () => {

    const [apartments, setApartments] = useState(null);
    
    useEffect(() => {

        axios
            .get(process.env.REACT_APP_API_BASE_URL + "/apartments")
            .then((response) => {
            setApartments(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
        }, []);


        const renderApartmentList = () => {
            const result = apartments.map((apartment) => {
                return (
                <div key={apartment._id} className="card">
                    {apartment.img
                    ? <img src={apartment.img} alt="apartment" />
                    // : <div className="whitespace"></div>
                    : <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="no imgage available"/>
                    }
                    <div>
                        <h3>{apartment.title}</h3>
                        <NavLink to={`/apartments/${apartment._id}`}>More Details</NavLink>
                    </div>

                </div>
                );
            });
            return result;
        }

    return(
        <div>
            <h1>Apartments</h1>

            {apartments ===null
            ? <LoadingSpinner/>
            : renderApartmentList()
        }

        </div>
    )
}