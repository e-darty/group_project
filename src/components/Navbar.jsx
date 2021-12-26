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


const pages = ["online services ", "about edarty", "contact us"];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              online services
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
