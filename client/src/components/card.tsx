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
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>
            {description}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
};

export default Card;