import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries)
    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <div className="grid grid-cols-3 gap-5">
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;