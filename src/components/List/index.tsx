import React from 'react';

import { 
  Container,
  Item,
  Title,
  ShowMore
} from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({
  title, elements
}) => {
  return (
      <Container>
          <Item>
            <Title>{title}</Title>
          </Item>

          {elements.map((element, index) => (
            <Item key={index}>{element}</Item>
          ))}

          <ShowMore>Show more</ShowMore>
      </Container>
  );
}

export default List;