import axios from "axios";
import { useEffect, useState } from "react";
import {BarChart, CartesianGrid, XAxis, YAxis,Tooltip, Legend, Bar } from 'recharts';


const Phones = () => {
    const [phones, setPhones]=useState([]);

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData);
        });
    },[])
    return (
        <div>
            <BarChart width={730} height={250} data={phones}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="name" fill="#8884d8" />
  <Bar dataKey="price" fill="#82ca9d" />
</BarChart>
        </div>
    );
};

export default Phones;