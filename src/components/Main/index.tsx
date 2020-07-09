import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>

      <Header >
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Lucas Guerra</strong>
          <span>432 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>         */}

    </Container>
  );
}

export default Main;