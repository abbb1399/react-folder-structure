import { useItemsQuery } from "./features/item/hooks/quries/useItemsQuery";
import ItemList from "./features/item/components/itemList/ItemList";

const App = () => {
  const items = useItemsQuery();

  return <ItemList items={items} />;
};

export default App;
