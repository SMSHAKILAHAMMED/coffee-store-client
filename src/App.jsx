import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedcoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffee);

  return (
    <div className='m-20'>

      <h1 className='text-5xl text-center text-purple-500 font-bold mb-5'>Hot Cold Coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6'>
      {
        coffees.map(coffee => <CoffeeCard
        key = {coffee._id}
        coffee = {coffee}
        coffees = {coffees}
        setCoffees = {setCoffees}
        ></CoffeeCard> 
       
        )
      }
      </div>
    </div>
  )
}

export default App
