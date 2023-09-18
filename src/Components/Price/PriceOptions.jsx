import { useEffect } from "react";
import { useState } from "react";
import PriceOption from "./PriceOption";


const PriceOptions = () => {

    const [prices, setPrices] = useState([]);

    useEffect(() =>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setPrices(data))
        },[]);

    return (
        <div className="m-12">
            <h2 className="text-3xl font-bold text-green-600">Best price in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                prices.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;