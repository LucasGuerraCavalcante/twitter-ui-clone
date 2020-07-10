import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProffileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

import Feed from '../Feed';

const Main: React.FC = () => {
  return (
    <Container>   
      <Banner>
        <Avatar />
      </Banner>   

      <ProffileData>
        <EditButton outlined>
          Edit profile
        </EditButton>

        <h1>Lucas Guerra</h1>
        <h2>@********</h2>

        <p>
          Twitter Clone <a href="https://github.com/LucasGuerraCavalcante/twitter-ui-clone">@GitHub</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasília, Brazil
          </li>
          <li>
            <CakeIcon />
            Born May 26, 1999
          </li>
        </ul>

        <Followage>
          <span>
            <strong>97 </strong>Following
          </span>
          <span>
            <strong>456 </strong>Followers
          </span>
        </Followage>
      </ProffileData>

      <Feed />
    </Container>
  );
}

export default Main;