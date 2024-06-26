import styled from "styled-components";
import GlobalBtn from "./GlobalBtn";

type GroupProps = {
  mb: string;
};
export const GroupHeading = styled.h2<GroupProps>`
  margin-bottom: ${({ mb }) => (mb ? mb : "1em")};
  font-size: 20px;
`;

type FormGroupProps = {
  gap?: string;
  columns: number;
  size?: number;
  mb?: string;
};
export const FormGroup = styled.div<FormGroupProps>`
  --gap: ${({ gap }) => gap || "30px"};

  position: relative;
  display: grid;
  grid-template-columns: ${({ columns, size }) =>
    size
      ? `repeat(auto-fit, minmax(calc(${
          size / columns + "px"
        } - (var(--gap) * ${columns * 2})), 1fr))`
      : `repeat(${columns}, 1fr)`};
  gap: var(--gap);
  margin-bottom: ${({ mb }) => (mb ? mb : "none")};

  @media only screen and (max-width: 756px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const PageHeading = styled.h1`
  margin-bottom: 16px;
  font-size: 28px;
  text-align: start;
  text-transform: capitalize;
  font-weight: 700;
  color: #213f7d;
  & + p {
    text-align: start;
    max-width: 50ch;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: #848ca1;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

type HeaderProPs = {
  pb?: string;
  mb?: string;
};

export const Header = styled.header<HeaderProPs>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: start;
  padding-bottom: ${({ pb }) => pb || "1rem"};
  /* border-bottom: 1px solid rgba(192, 190, 190, 0.29); */
  margin-bottom: ${({ mb }) => mb || "1.75rem"};
`;

export const Main = styled.main`
  position: relative;
  width: 100%;
  padding: 1.5rem;
  background-color: #f2f2f2;
  overflow-x: clip;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: #eee; /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-primary); /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
    border: 3px solid #eee;
  }
`;
export const CardContainer = styled.div`
  background-color: #fafafa;
  border-radius: 0.8rem;
  box-shadow: 0 4px 10px #ccccccfa;
  padding: 2rem;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
`;
export type BackProps = {
  inset?: string;
};
export const Back = styled(GlobalBtn)<BackProps>`
  inset: ${({ inset }) => (inset ? inset : "32px auto auto 32px")};
  background-color: transparent;
  width: max-content;
  color: #a3a4ad;
  font-size: 16px;

  &:hover {
    background-color: transparent;
    color: #253c5e;
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding-inline: 0;
  }
`;
export const Fields = styled.fieldset`
  appearance: none;
  border: none;
  margin-bottom: 30px;

  p {
    color: #8692a6;
    margin-bottom: 8px;
  }

  span {
    color: #8692a6;
    margin-bottom: 8px;
  }

  .description {
    color: #8692a6;
    margin-bottom: 8px;
  }

  div[role="group"] label {
    display: inline-flex;
    align-items: center;
    margin-right: 48px;
    font-size: 20px;
    font-weight: 400;
  }

  .img {
    width: 25px;
  }

  input[type="radio"] {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border: 2px solid var(--clr-primary);
    border-radius: 0;
    accent-color: var(--clr-primary);
  }
`;

type DashbordProps = {
  mb?: number;
};

export const DashboardWrapper = styled.div<DashbordProps>`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: calc(100vh - 90px);
  margin-top: ${({ mb }) => mb};
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Grid = styled(FormGroup)`
  border-bottom: 0.5px solid #eef0f5;
  margin-bottom: 5px;
  > div {
    margin-bottom: 10px;
    h3,
    h4 {
      font-size: 1rem;
      color: #5e6985;
      text-transform: uppercase;
      line-height: 1rem;
      margin-bottom: 0.5rem;
      font-weight: 400;
    }

    span {
      text-decoration: none;
      color: #5e6985;
      display: inline-block;
      font-weight: 700;
    }
  }
`;
