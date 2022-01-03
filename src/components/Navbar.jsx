import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Fab from '@mui/material/Fab';

import EditIcon from '@mui/icons-material/Edit';




const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
              height="50"
              weight="50"
              onClick={() => {
                props.changeView("home");
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">online services</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

       

            <div>
      <Button
        id="basic-button"
        sx={{ my: 2, color: "black", display: "block" }}
        onClick={handleClick}
      >
        online services
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ my: 2, color: "black", display: "block" }} onClick={handleClose} onClick={() => {
                props.changeView("cin");
              }}>CIN</MenuItem>
        <MenuItem sx={{ my: 2, color: "black", display: "block" }} onClick={handleClose} onClick={() => {
                props.changeView("grey");
              }}> Grey Card</MenuItem>
        <MenuItem sx={{ my: 2, color: "black", display: "block" }} onClick={handleClose} onClick={() => {
                props.changeView("driving");
              }}> Driving Licence</MenuItem> 
      </Menu>
    </div>
            <Button
              onClick={() => {
                props.changeView("about");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
              onClick={() => {
                props.changeView("about");
              }}
            >
              about edarty
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
              onClick={() => {
                props.changeView("contact");
              }}
            >
              contact us
            </Button>
          </Box>

          <Box sx={{ mr: 60 }}>
            <img
              src={process.env.PUBLIC_URL + "/flag.png"}
              alt="logo"
              height="50"
              weight="50"
            />
            <img
              src={process.env.PUBLIC_URL + "/tun.png"}
              alt="logo"
              height="60"
              weight="55"
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="login">
              <IconButton
                sx={{ my: 2, color: "black", display: "block" }}
                onClick={() => {
                  props.changeView("login");
                }}
              >
                <LoginIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ "& > :not(style)": { m: 2 } }}>
            <Fab
              size="small"
              color="secondary"
              aria-label="edit"
              onClick={() => {
                props.changeView("admin");
              }}
            >
              <EditIcon />
            </Fab>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;



  