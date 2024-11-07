import ItemList from "./components/itemList/ItemList";
import { useItemsQuery } from "./hooks/quries/useItemsQuery";

const App = () => {
  const items = useItemsQuery();

  return <ItemList items={items} />;
};

export default App;
