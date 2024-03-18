import { Input, Button, HStack } from "@chakra-ui/react";
import { useState, FormEvent } from "react";

interface ListInputProps {
  handleAddItem: (itemText: string) => void;
}

const ListInput = ({ handleAddItem }: ListInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          placeholder="Enter item text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" colorScheme="blue">
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default ListInput;
