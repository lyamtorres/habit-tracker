import React from 'react';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"



type CardProps = {
  id: string | number;
  title: string;
  description: string;
  onDelete: (id: string | number) => void;
  deleting?: boolean;
};


import CustomCheckbox from "./custom-checkbox";

const Card: React.FC<CardProps> = ({ id, title, description, onDelete, deleting }) => {
  return (
    <>
      <div className="flex w-full max-w-md flex-col gap-6">
        <Item variant="outline">
          <ItemContent>
            <div className="flex items-center gap-2">
              <CustomCheckbox />
              <ItemTitle>{title}</ItemTitle>
            </div>
            <ItemDescription>
              {description}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm" onClick={() => onDelete(id)} disabled={deleting}>
              {deleting ? 'Deleting...' : 'Delete'}
            </Button>
          </ItemActions>
        </Item>
      </div>
    </>
  );
};

export default Card;