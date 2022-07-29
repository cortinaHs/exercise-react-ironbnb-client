import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export const ApartmentDetails = () => {

    const { apartmentId } = useParams();

    const [apartment, setApartment] = useState(null);
    
    useEffect(() => {

        axios
            .get(process.env.REACT_APP_API_BASE_URL + "/apartments/" + apartmentId)
            .then((response) => {
            setApartment(response.data);
            console.log(response.data)
            })
            .catch((e) => {
                console.log(e);
            });
        }, [apartmentId]);


    return(
        <div>
            
            {apartment ===null
            ? <LoadingSpinner/>
            : <div>
                <h1>{apartment.title}</h1>
                <div className="card">
                    {apartment.img
                    ? <img src={apartment.img} alt="apartment" />
                    : <div className="whitespace"></div>
                    }
                    <p>Price: {apartment.pricePerDay}</p>
                </div>
            </div>
            }

            <Link to="/apartments">Back</Link>

        </div>
    )
}