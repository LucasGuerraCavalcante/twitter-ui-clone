import React from 'react';

import { 
    Container
} from './styles';

interface Props {
    title: string;
    news: string;
}

const News: React.FC<Props> = ({
    title, news
}) => {
  return (
      <Container>
          <span>{title}</span>
          <strong>{news}</strong>
      </Container>
  );
}

export default News;