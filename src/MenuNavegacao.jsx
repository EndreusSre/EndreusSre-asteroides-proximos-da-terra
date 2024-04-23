import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

const MenuNavegacao = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>Início</MenuItem>
                            <MenuItem component={Link} to="/sobre" onClick={handleCloseNavMenu}>Sobre</MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem
                            component={Link}
                            to="/"
                            sx={{ my: 2, color: 'white', borderBottom: '1px solid transparent', textDecoration: 'none' }}
                            onMouseEnter={(e) => { e.target.style.borderBottomColor = '#fff'; }}
                            onMouseLeave={(e) => { e.target.style.borderBottomColor = 'transparent'; }}
                        >
                            Início
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/sobre"
                            sx={{ my: 2, color: 'white', borderBottom: '1px solid transparent', textDecoration: 'none' }}
                            onMouseEnter={(e) => { e.target.style.borderBottomColor = '#fff'; }}
                            onMouseLeave={(e) => { e.target.style.borderBottomColor = 'transparent'; }}
                        >
                            Sobre
                        </MenuItem>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default MenuNavegacao;
