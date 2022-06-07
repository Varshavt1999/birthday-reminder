import React from "react";
import styled from "styled-components";

function List({ people }) {
    return (
        <>
            {people.map((person) => (
                // console.log(person);
                <MainContainer key={person.id}>
                    <ListItem>
                        <ProfileBox>
                            <ProfileImg src={person.image} />
                        </ProfileBox>
                        <DetailsBox>
                            <Name>{person.name}</Name>
                            <Age>{person.age} Years</Age>
                        </DetailsBox>
                    </ListItem>
                </MainContainer>
            ))}
        </>
    );
}
const MainContainer = styled.div`
    margin-bottom: 20px;
`;
const ListItem = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #91a3b0;
    border-radius: 5px;
    height: 80px;
    /* width: 90%;
    margin: 0 auto; */
`;
const ProfileBox = styled.div`
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
`;
const ProfileImg = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
const DetailsBox = styled.div`
    width: 85%;
`;
const Name = styled.h3`
    color: #000;
    font-size: 16px;
`;
const Age = styled.h4`
    color: grey;
    font-size: 14px;
`;

export default List;
