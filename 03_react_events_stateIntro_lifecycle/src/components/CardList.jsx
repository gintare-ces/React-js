import Card from './Card';

const CardList = (props) => {
    console.log('CardLis ivyko');
  return (
    <div>
      <Card color={props.list[0]}/>
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default CardList;
