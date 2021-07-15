import styled from 'styled-components';


const DescriptionBoxWrapper = styled.div `
    position: absolute;
    transform: rotate(
    3deg
    );
    top: 80px;
    left: -20px;
    padding: 10px 30px 30px 40px;
    color: black;
    background-color: blanchedalmond;
    box-shadow: 2px 2px 30px black;
    min-width: 400px;
    text-align: center;
`;

const DescriptionBox = (props) => {

    const dummyData = {
        name: 'Call Me Maybe',
        digits: '208-924-4455',
    }
    return (
        <DescriptionBoxWrapper>
            <h2>{dummyData.name}</h2>
            <p>{dummyData.digits}</p>
        </DescriptionBoxWrapper>
    )
}

export default DescriptionBox;