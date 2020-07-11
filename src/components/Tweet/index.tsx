import React from 'react';

import { 
    Container, 
    Retweeted,
    RetweetIconTop,
    RetweetIconBottom,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
            <RetweetIconTop />
            You Retweeted
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Clone User</strong>
                      <span>@twitteruiclone</span>
                      <Dot />
                      <time>Jun 29</time>
                  </Header>

                  <Description>
                      UI Clones are cool ;)
                  </Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                        <CommentIcon />
                        17
                      </Status>
                      <Status>
                        <RetweetIconBottom />
                        27
                      </Status>       
                      <Status>
                        <LikeIcon />
                        94
                      </Status>               
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;