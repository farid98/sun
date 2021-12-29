import { useState, useEffect } from 'react';
import { getSunrise, getSunset } from 'sunrise-sunset-js';



const Home = () => {

  const [cities, setCities] = useState([
    { city: "Islamabad", lat: 33.6844, long: 73.0479 },
    { city: "Lahore", lat: 31.5204, long: 74.3587 },
  ]);


  const [today, setToday] = useState("");

  useEffect(() => {
    getToday()

  }, []);

  const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var yyyy = today.getFullYear();
    var mmName = today.toLocaleString('default', { month: 'long' });

    setToday(dd + '-' + mmName + '-' + yyyy + ' at ' + makeTimeString(today))

  }


  const makeTimeString = (d) => {

    var hr = d.getHours()
    var ampm = hr > 12 ? "pm" : "am"
    if (hr > 12) hr -= 12

    var min = String(d.getMinutes()).padStart(2, 0)
    var sec = String(d.getSeconds()).padStart(2, 0)

    return (hr + ":" + min + ":" + sec + " " + ampm)
  }




  return (
    <div>

      <div className="flex bg-gray-100 rounded shadow p-6 m-2 text-lg">Today is {today}</div>


      {cities.map((x) => (

        <div key={x.city} className=" flex flex-col w-full  ">
          {/* <div className=" bg-zinc-600 text-white p-2 ">{x.city}</div> */}
          <div className="flex mt-1">
          <div className=" bg-blue-400 text-white p-2  ">{x.city}</div>

          <div className=" bg-yellow-100 text p-2 ">{makeTimeString(getSunrise(x.lat, x.long))} </div>
          <div className=" bg-red-100 text p-2 ">{makeTimeString(getSunset(x.lat, x.long))} </div>
          </div>
        </div>


      )


      )


      }


    </div>

  );
}

export default Home;