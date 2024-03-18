import { useState } from "react";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import List from "./components/List";
import ListInput from "./components/Input";
import * as uuid from "uuid";
import { IListItem } from "./components/ListItem";

function App() {
  const [listData, setListData] = useState<IListItem[]>([
    { id: "1", text: "First item" },
  ]);

  const handleAddItem = (itemText: string) => {
    const newItem = {
      id: uuid.v4(),
      text: itemText,
      isDone: false,
    };

    setListData([...listData, newItem]);
  };

  const handleDeleteItem = (itemId: string) => {
    const selectedItem = listData.find((item) => item.id === itemId);
    const newList = listData.filter((item) => item !== selectedItem);
    setListData(newList);
  };

  const handleCheckItem = (itemId: string) => {
    const newList = listData.map((item) => {
      if (item.id === itemId) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    setListData(newList);
  };

  return (
    <>
      <Box>
        <Text fontSize="4xl" marginBottom="3rem">
          TODO App
        </Text>
        <ListInput handleAddItem={handleAddItem} />
        <List
          list={listData}
          handleDeleteItem={handleDeleteItem}
          handleCheckItem={handleCheckItem}
        />
      </Box>
    </>
  );
}

export default App;
