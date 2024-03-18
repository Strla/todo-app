import { Box, Text, Button, HStack } from "@chakra-ui/react";

export interface IListItem {
  id: string;
  text: string;
  isDone?: boolean;
}

interface ListItemProps {
  itemData: IListItem;
  handleDeleteItem: (itemId: string) => void;
  handleCheckItem: (itemId: string) => void;
}

const ListItem = ({
  itemData,
  handleDeleteItem,
  handleCheckItem,
}: ListItemProps) => {
  return (
    <Box
      w="100%"
      my="1rem"
      cursor="pointer"
      onClick={() => handleCheckItem(itemData.id)}
    >
      <HStack w="100%" justify="space-between">
        <Text
          fontSize="xl"
          textDecoration={itemData.isDone ? "line-through" : "none"}
        >
          {itemData.text}
        </Text>
        <Button
          size="sm"
          colorScheme="red"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteItem(itemData.id);
          }}
        >
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default ListItem;
