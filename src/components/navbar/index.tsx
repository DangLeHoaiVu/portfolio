import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import ButtonLink from "../button/buttonLink";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { link: "/", title: "Home" },
  { link: "/work", title: "Work" },
  { link: "/about-me", title: "About" },
];

const Navbar: FunctionComponent<Props> = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ py: 2 }}>
        Dang Le Hoai Vu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.link}>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="border-b"
        component="nav"
        sx={{ background: "black", px: 3 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "1.5rem",
            }}
          >
            <Link href="/">Dang Le Hoai Vu</Link>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "row" }}
          >
            {navItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton sx={{ fontSize: "1.5rem" }}>
                  <ButtonLink
                    href={item.link}
                    active={router.asPath == item.link}
                  >
                    {item.title}
                  </ButtonLink>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
