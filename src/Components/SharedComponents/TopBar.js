import { AppBar, Box, Toolbar, Typography, Button, IconButton }  from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

const TopBar = () => {
    const navigate = useNavigate();
    const redirect = (path) => {
        navigate(path);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor:'pointer'}} onClick={()=>redirect('/')}>
                        Coding Assessment
                    </Typography>
                    <Button color="inherit" onClick={()=>redirect('/')}>Home</Button>
                    <Button color="inherit" onClick={()=>redirect('/favourite')}>Favourites</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default TopBar;