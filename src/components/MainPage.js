import React, { useState } from "react";
import styled from "styled-components";
import List from "./List";
import { BirthdayData } from "./Data";

function MainPage() {
    const [people, setPeople] = useState(BirthdayData);
    // console.log(BirthdayData);
    return (
        <MainContainer>
            <ListBox>
                <HeadingBox>{people.length} Birthday Today</HeadingBox>
                <List people={people} />
                <ClearBtn onClick={() => setPeople([])}>Clear All</ClearBtn>
            </ListBox>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    height: 100vh;
    padding: 5%;
`;
const ListBox = styled.div`
    border-radius: 5px;
    background-color: #c4aead;
    padding: 30px;
    width: 50%;
    margin: 0 auto;
`;
const HeadingBox = styled.div`
    border-radius: 5px;
    background-color: #fff;
    padding: 30px;
    font-weight: 700;
    font: 24px;
    text-align: center;
    margin-bottom: 30px;
`;
const ClearBtn = styled.div`
    border-radius: 5px;
    background-color: #98817b;
    padding: 10px;
    color: #000;
    font-weight: 600;
    font-size: 16px;
    width: 70%;
    text-align: center;
    margin: 0 auto;
`;
export default MainPage;
