type ItemCardProps = {
  item: any;
};

const ItemCard = ({ item }: ItemCardProps) => (
  <li>
    <span>{item.id}</span>
    <span>{item.name}</span>
  </li>
);

export default ItemCard;
