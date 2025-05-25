import StoreLayout from '../components/templates/templates';
import PlantGrid from '../components/PlantGrid';

const mockPlants = [
    { id: 1, name: "Suculenta", price: 29.9, light: "sun" },
    { id: 2, name: "Samambaia", price: 39.9, light: "shade" },
    { id: 3, name: "Espada de São Jorge", price: 45.0, light: "sun" },
    { id: 4, name: "Jiboia", price: 35.5, light: "shade" },
    { id: 5, name: "Cacto", price: 25.0, light: "sun" },
    { id: 6, name: "Lírio da Paz", price: 49.9, light: "shade" },
  ];
  
function PlantStore() {
  return (
    <StoreLayout>
      <PlantGrid plants={mockPlants} />
    </StoreLayout>
  );
}

export default PlantStore;