import { useEffect, useState } from "react"

interface ITheater{
    name : string
}
interface IGeo{
    type: {
        type:string,
        enum: ['Point'],
        required : true
    },
    coordinates : {
        type:[number, number],
        required : true
    }
}

interface IAddress{
    street1 : string,
    city : string,
    state : string,
    zipcode : string
}

interface ILocation{
    address : IAddress,
    geo : IGeo
}

interface ITheater {
    theaterId : number,
    location : ILocation
}

export default function Theaters():JSX.Element{
    const [theaters, setTheaters] = useState<ITheater[]>([])
    const URL=`http://localhost:8080/theaters/list`
    async function fetchTheaters (): Promise<void> {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON  = await FETCHED_DATA.json()
     
        setTheaters(FETCHED_JSON)
    }
    useEffect(() => {
        fetchTheaters();
    }, []);

    return(
        <div>
            <h1>Theater</h1>
            {theaters.map((theater, index) => 
                <div key={index}>{theater.theaterId}</div>
            )}
       
        </div>
    )
}