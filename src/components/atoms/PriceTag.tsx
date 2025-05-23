type PriceTagProps = {
    value: number;
  };
  
  function PriceTag({ value }: PriceTagProps) {
    return <p>R$ {value}</p>;
  }
  
  export default PriceTag;