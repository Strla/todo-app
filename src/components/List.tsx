import { Box } from "@chakra-ui/react";
import ListItem, { IListItem } from "./ListItem";

interface ListProps {
  list: IListItem[];
  handleDeleteItem: (itemId: string) => void;
  handleCheckItem: (itemId: string) => void;
}

const List = ({ list, handleDeleteItem, handleCheckItem }: ListProps) => {
  return (
    <Box marginTop="3rem">
      {list.map((listItem) => {
        return (
          <ListItem
            key={listItem.id}
            itemData={listItem}
            handleDeleteItem={handleDeleteItem}
            handleCheckItem={handleCheckItem}
          />
        );
      })}
    </Box>
  );
};

export default List;
