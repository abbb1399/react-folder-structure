import ItemCard from "../itemCard/itemCard";

type ItemListProps = {
  items: any[];
};

const ItemList = ({ items }: ItemListProps) => (
  <ul>
    {items.map((item) => (
      <ItemCard key={item.id} item={item} />
    ))}
  </ul>
);

export default ItemList;
