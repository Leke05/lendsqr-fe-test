import React from "react";
import styled from "styled-components";
import { CardContainer } from "../layout/globalcomponent/Utils";

type CardProps = {
  id: number;
  img: string;
  text: string;
  totalUser: number;
};

type UserProps = {
  user: CardProps;
};

const Card: React.FC<UserProps> = ({ user }) => {
  return (
    <Container>
      <img src={user.img} alt={user.text} loading="lazy" role="presentation" />
      <span>{user.text}</span>
      <h3>{user.totalUser.toLocaleString()}</h3>
    </Container>
  );
};

export default Card;

const Container = styled(CardContainer)`
  background-color: #fff;
  border-radius: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  img {
    width: 45px;
  }

  span {
    text-transform: uppercase;
    color: #b2b2b2;
  }

  h3 {
  }
`;
