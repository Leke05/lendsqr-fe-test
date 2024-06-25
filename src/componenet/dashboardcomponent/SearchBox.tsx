import React, { useState, ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { UserData } from "../../type"; // Ensure this import matches the path to your UserData type definition

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<UserData[]>([]);

  const userInfoData: UserData[] = JSON.parse(
    localStorage.getItem("userInfo") || "[]"
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      const results = userInfoData.filter(
        (user) =>
          user.personal_info?.username
            ?.toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          user.personal_info?.email
            ?.toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          user.personal_info?.organization
            ?.toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          user.personal_info?.phoneNumber?.includes(searchInput)
      );

      const sortedResults = results.sort((a, b) => {
        const nameA = a.personal_info?.username?.toLowerCase() || "";
        const nameB = b.personal_info?.username?.toLowerCase() || "";
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });

      setFilteredResults(sortedResults.slice(0, 5));
    } else {
      setFilteredResults([]);
    }
  };

  // Trigger search when searchInput changes
  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  return (
    <>
      <InputDiv>
        <div>
          <input
            name="searchInput"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search for anything"
          />
          <button onClick={handleSearch}>
            <IoIosSearch size={15} className="btn" color="#fff" />
          </button>
        </div>
      </InputDiv>

      <ResultsDiv>
        {filteredResults.map((user) => (
          <ResultItem key={user.id}>
            <h4>{user.personal_info?.username}</h4>
            <p>{user.personal_info?.email}</p>
            <p>{user.personal_info?.phoneNumber}</p>
            <p>{user.personal_info?.organization}</p>
          </ResultItem>
        ))}
      </ResultsDiv>
    </>
  );
};

export default SearchBox;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30%;
  margin-top: 20px;
  position: relative;

  > div {
    display: flex;

    input {
      flex: 1;
      padding: 15px;
      border-radius: 10px 0px 0px 10px;
      border: 1px solid #e7eaf1;
      margin: 0;
      font-size: 16px;
    }

    button {
      padding: 15px;
      background: #39cdcc;
      color: #ffffff;
      border: none;
      border-radius: 0px 10px 10px 0px;
      cursor: pointer;
      font-size: 16px;
    }
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const ResultsDiv = styled.div`
  margin-top: 5rem;
  width: 30%; // Match width with input div
  background: #fff;
  border: 1px solid #e7eaf1;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e7eaf1;

  &:last-child {
    border-bottom: none;
  }

  h4 {
    margin: 0 0 5px 0;
  }

  p {
    margin: 0;
  }
`;
