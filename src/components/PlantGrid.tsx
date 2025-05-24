import { useMediaQuery } from '@mui/material';
import PlantCard from './molecules/molecules';
interface Plant {
  id: number;
  name: string;
  price: number;
}

interface PlantGridProps {
  plants: Plant[];
}

function PlantGrid({ plants }: PlantGridProps) {
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1023px)');

  const columns = isDesktop ? 3 : isTablet ? 2 : 1;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          name={plant.name}
          price={plant.price}
          buttonText="Comprar"
          buttonVariant="primary"
          iconSize="md"
          light="sun"
        />
      ))}
    </div>
  );
}

export default PlantGrid;