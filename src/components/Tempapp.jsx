import React, { useState, useEffect } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Jaipur");
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={9d6ae186866965f6bc571ef435a363e8}

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={9d6ae186866965f6bc571ef435a363e8}`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            // console.log(resJson);
        }

        fetchApi();
    },[search])

    return (
        <>
            <div className="box">
                <div className="input">
                    <input type="search" value={search}
                    onChange={(event)=>{setSearch(event.target.value)}} 
                    className="inputFeild"/>
                </div>

                {!city ? ( <p className="text-center m-t-20">no data found</p> ) : (
                    <div>
                        <div className="info">
                        <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h1>{city.temp}'cel</h1>
                        <h3 className="temmin_max">Min : 5.25'cel | Max : 5.25'cel</h3>
                        </div>
                    </div>
                )}
                
                
            </div>
           
        </>
    )
}
export default Tempapp;