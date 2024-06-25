import React from "react";
import styled from "styled-components";
import { PageHeading } from "../../layout/globalcomponent/Utils";
import Card from "../../dashboardcomponent/Card";
import { useGetUserStatus } from "../../../hooks/useQuery";

type UserProps = {
  id: number;
  img: string;
  text: string;
  totalUser: number;
};

const UserList = () => {
  //--------------------------------------data fetching--------------------------------
  const { data } = useGetUserStatus();

  return (
    <>
      <HeadingTitle>Users</HeadingTitle>
      <UserContainer>
        {data?.map((user: UserProps) => (
          <Card key={user.id} user={user} />
        ))}
      </UserContainer>
    </>
  );
};

export default UserList;

export const HeadingTitle = styled(PageHeading)`
  text-align: left;
`;

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;
