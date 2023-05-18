import { Box, Typography, styled } from '@mui/material';


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Code = () => {

    return (
        <Header>
            <Typography variant="h4">To Do List Manager</Typography>
        </Header>
    )
}

export default Code;