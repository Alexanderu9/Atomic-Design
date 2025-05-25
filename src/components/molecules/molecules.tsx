import Button from '../atoms/Button';
import PriceTag from '../atoms/PriceTag';
import PlantIcon from '../atoms/PlantIcon';
import Styles from './molecules.module.css';

type PlantCardProps = {
  id: number;
  name: string;
  price: number;
  buttonText: string;
  buttonVariant: 'primary' | 'secundary';
  iconSize: 'sm' | 'md' | 'lg';
  sx?: object;
  light: 'sun' | 'shade';
  
};

function PlantCard(props: PlantCardProps) {
  return (
      <div className={Styles.cartas}>
    <div className={Styles[props.light]}>
      <h2>{props.name}</h2>
      <PlantIcon size={props.iconSize} 
      sx={props.sx} />
      <PriceTag value={props.price} />
      <Button
        variant={props.buttonVariant}
        text={props.buttonText}
      />
      </div>
    </div>
  );
}

export default PlantCard;