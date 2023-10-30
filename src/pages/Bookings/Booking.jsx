import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Booking = () => {
    const {user}= useContext(AuthContext)
    const [bookings,setBookings]=useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=> setBookings(data))
    },[])

    console.log(bookings);
    return (
        <div>
            
        </div>
    );
};

export default Booking;