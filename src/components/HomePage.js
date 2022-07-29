import ironhackersImg from "../assets/ironhackers.avif";

export const HomePage = () => {
    return(
        <div>
            <h1>Welcome</h1>
            <img className="page-img" src={ironhackersImg} alt="ironhackers"/>
            
        </div>
    )
}