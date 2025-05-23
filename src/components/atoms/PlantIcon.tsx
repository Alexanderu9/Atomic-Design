import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

type PlantIconProps = {
  size: 'sm' | 'md' | 'lg';
  sx?: object;
};

function PlantIcon({ size, sx }: PlantIconProps) {
  return (
    <LocalFloristIcon
      fontSize={
        size === 'sm' ? 'small': 
        size === 'md' ? 'medium' : 'large'
      }
      sx={sx}
    />
  );
}

export default PlantIcon;