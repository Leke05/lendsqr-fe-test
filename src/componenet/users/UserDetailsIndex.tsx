import React from "react";
import { Grid } from "../layout/globalcomponent/Utils";
import styled from "styled-components";
import { HeadingTitle } from "../pages/dashboard/User";
import { UserData } from "../../type";

type ActiveUserProps = {
  activeUser: UserData;
};

const UserDetailsIndex: React.FC<ActiveUserProps> = ({ activeUser }) => {
  return (
    <Container>
      <div>
        <HeadingTitle className="title">Personal Information</HeadingTitle>
        <Grid columns={5} className="mb-4">
          <div>
            <h4>Full Name</h4>
            <span>{activeUser.personal_info.username}</span>
          </div>

          <div>
            <h4>Phone Number</h4>
            <span>{activeUser.personal_info.phoneNumber}</span>
          </div>

          <div>
            <h4>Email Address</h4>
            <span>{activeUser.personal_info.email}</span>
          </div>
          <div>
            <h4>BVN</h4>
            <span>{activeUser.personal_info.bvn}</span>
          </div>

          <div>
            <h4>Gender</h4>
            <span>{activeUser.personal_info.gender}</span>
          </div>
          <div>
            <h4>Marital Status</h4>
            <span>{activeUser.personal_info.maritalStatus}</span>
          </div>
        </Grid>
      </div>
      <div>
        <HeadingTitle className="title">Education and Employment</HeadingTitle>
        <Grid columns={5} className="mb-4">
          <div>
            <h4>level of education</h4>
            <span>{activeUser.educations.level}</span>
          </div>

          <div>
            <h4>employment status</h4>
            <span>{activeUser.educations.employment_status}</span>
          </div>

          <div>
            <h4>sector of employment</h4>
            <span>{activeUser.educations.sector}</span>
          </div>
          <div>
            <h4>Duration of employment</h4>
            <span>{activeUser.educations.duration}</span>
          </div>

          <div>
            <h4>office email</h4>
            <span>{activeUser.educations.official_email}</span>
          </div>
          <div>
            <h4>Monthly income</h4>
            <span>{activeUser.educations.income}</span>
          </div>
          <div>
            <h4>loan repayment</h4>
            <span>{activeUser.educations.loan_repayment}</span>
          </div>
        </Grid>
      </div>
      <div>
        <HeadingTitle className="title">Socials</HeadingTitle>
        <Grid columns={5} className="mb-4">
          <div>
            <h4>Twitter</h4>
            <span>{activeUser.socialMedial.twitter_username}</span>
          </div>

          <div>
            <h4>Facebook</h4>
            <span>{activeUser.socialMedial.facebook_username}</span>
          </div>

          <div>
            <h4>Instagram</h4>
            <span>{activeUser.socialMedial.instagram_username}</span>
          </div>
        </Grid>
      </div>
      <div>
        <HeadingTitle className="title">Guarantor</HeadingTitle>
        <Grid columns={5} className="mb-4">
          <div>
            <h4>Full Name</h4>
            <span>{activeUser.gurrantor.full_name}</span>
          </div>

          <div>
            <h4>Phone Number</h4>
            <span>{activeUser.gurrantor.phoneNumber}</span>
          </div>

          <div>
            <h4>Email Address</h4>
            <span>{activeUser.gurrantor.email}</span>
          </div>
          <div>
            <h4>Relationship</h4>
            <span>{activeUser.gurrantor.relationships}</span>
          </div>
        </Grid>
      </div>
    </Container>
  );
};

export default UserDetailsIndex;

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #fff;
  margin-top: 20px;
  padding: 1.5rem;
  > div {
    .title {
      font-size: 16px;
    }
  }
`;
