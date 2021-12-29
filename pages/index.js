import { useState, useEffect } from 'react';
import { getSunrise, getSunset } from 'sunrise-sunset-js';



const Home = () => {


  const [sunSet, setSunSet] = useState();
  const [sunRise, setSunRise] = useState();


  useEffect(() => {

    calculateSun()

  }, []);


  useEffect(() => {
    
    console.log(sunSet)

  }, [sunSet]);

  const calculateSun = () => {


    const x = getSunset(33.6844, 73.0479);
    const y = getSunrise(33.6844, 73.0479);

    setSunSet(x)
    setSunRise(y)


  }


  if (!sunSet || !sunRise) return (
    <div className="flex">Loading...</div>

  )


  return (
    <div>
      <div className="flex">Here's the sunrise and set times in Islamabad</div>
      <div className="flex text-2xl p-6">Sun-rise: {sunRise.getHours() } : {sunRise.getMinutes()} : {sunRise.getSeconds() } </div>
      <div className="flex text-2xl p-6">Sun-set: {sunSet.getHours() } : {sunSet.getMinutes()} : {sunSet.getSeconds() } </div>

    </div>

  );
}

export default Home;