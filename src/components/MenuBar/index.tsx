import React from 'react';

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    HashIcon,
    ListIcon,
    MoreIcon
} from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />

              <MenuButton>
                  <HomeIcon />
                  <span>Home</span>
              </MenuButton>

              <MenuButton>
                  <HashIcon />
                  <span>Explore</span>
              </MenuButton>

              <MenuButton>
                  <BellIcon />
                  <span>Notifications</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon />
                  <span>Messages</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon />
                  <span>Bookmarks</span>
              </MenuButton>

              <MenuButton>
                  <ListIcon />
                  <span>Lists</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon />
                  <span>Profile</span>
              </MenuButton>

              <MenuButton>
                  <MoreIcon />
                  <span>More</span>
              </MenuButton>

              <Button>
                  <span>Tweet</span>
              </Button>
          </Topside>
      </Container>
  );
}

export default MenuBar;