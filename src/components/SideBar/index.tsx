import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
    Bottom
} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Search Twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickyBox>
            <Body>
              <List 
                title="Who to follow"
                elements={[
                  <FollowSuggestion 
                    name="Reginald Connor"
                    nickname="@********"
                  />,
                  <FollowSuggestion 
                    name="Justyne Harper"
                    nickname="@********"
                  />,
                  <FollowSuggestion 
                    name="M.C. BingBoo"
                    nickname="@********"
                  />
                ]}
              />

              <List 
                title="What’s happening"
                elements={[
                  <News 
                    title="Music - Trending"
                    news="M.C. BingBoo"
                  />,
                  <News 
                    title="Haha - Last night"
                    news="Funny cats"
                  />,
                  <News 
                    title="Politics - 2 hours ago"
                    news="Justyne Harper for president"
                  />
                ]}
              />  

              <Bottom>
                <span>Terms</span>
                <span>Cookies</span>
                <span>Info</span>
                <span>More</span>
                <span>2020 Clone</span>
              </Bottom>
            </Body>
          </StickyBox>

      </Container>
  );
}

export default SideBar;