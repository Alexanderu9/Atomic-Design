import './App.css'
import PlantCard from './components/molecules/molecules'

function App() {


  return (
    <>
     <PlantCard buttonText='Comprar Planta' 
    name='Planta' 
    price={12.32} buttonVariant='secundary'
    iconSize='lg' 
    sx={{color: 'green'}}
    id={1}
    light='sun'/>
    
    </>
  )
}

export default App
