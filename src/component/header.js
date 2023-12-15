import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/fullogo.png";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const drawerWidth = 240;
const navItems = [
  { name: "For Kids", link: "for-kids" },
  { name: "For Parents", link: "for-parents" },
  { name: "How It Works", link: "how-it-works" },
  { name: "Contact Us", link: "contact-us" },
];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({}));

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Typography variant="h6" sx={{ textAlign: "left", my: 2 }}>
        <img src={Logo} className="header-logo" alt="img not found" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              className="mobile-header"
            >
              <a href={`#${item.link}`}>
                {" "}
                <ListItemText primary={item.name} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <div className="contact-us">
        <Button
          variant="contained"
          disableElevation
          // endIcon={<KeyboardArrowDownIcon />}
        >
          Contact Us
        </Button>
      </div> */}
      <div className="sign-Up-btn">
        <a target="_blank" href={`https://vzndp3wy.paperform.co/`}>
          <button> Sign Up</button>{" "}
        </a>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="container top-header">
      <AppBar component="nav" style={{ backgroundColor: "#fff" }}>
        <div className="container header">
          <Toolbar sx={{ padding: "0" }}>
            <Typography
              variant=""
              component="div"
              sx={{ display: { sm: "block" }, textAlign: "left" }}
            >
              <img src={Logo} className="header-logo" alt="img not found" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) => (
                <a href={`#${item.link}`}>
                  {" "}
                  <Button key={item} sx={{ color: "#000" }}>
                    {item.name}
                  </Button>
                </a>
              ))}
              <div className="contact-us">
                {/* <Button 
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        Contact Us
      </Button> */}
                {/* <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Contact
        </MenuItem>
      </StyledMenu> */}
              </div>
              <div className="sign-Up-btn">
                <a target="_blank" href={`https://vzndp3wy.paperform.co/`}>
                  {" "}
                  <button> Sign Up</button>
                </a>
              </div>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, textAlign: "left", display: { sm: "none" } }}
            >
              <p style={{ color: "#000" }}>
                <MenuIcon />
              </p>
            </IconButton>
          </Toolbar>
        </div>
      </AppBar>
      <div>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </div>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
