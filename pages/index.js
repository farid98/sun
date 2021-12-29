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

//    setToday(dd + '-' + mmName + '-' + yyyy + ' at ' + makeTimeString(today))
    setToday(dd + '-' + mmName + '-' + yyyy )

  }


  const makeTimeString = (d) => {

    var hr = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()

    // if (sec >= 30 ) {
    //   min += 1
    //   if (min === 60) {
    //     hr += 1
    //     min = 0
    //   }
    //   // not handling midnight as sunset sunrise can never be midnight
    // }


    var ampm = hr > 12 ? "pm" : "am"
    if (hr > 12) hr -= 12


    return (String(hr).padStart(2,0) + ":" + String(min).padStart(2,0) + " " + ampm)
  }




  return (
    <div className=''>

      <div className="flex flex-col bg-black text-white rounded  p-6  ">
      <div className="text-lg">Sunrise & Sunset</div>
      <div className=" text">  {today}</div>
      </div>


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