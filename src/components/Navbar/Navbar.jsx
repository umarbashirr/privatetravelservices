import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/utils";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Button,
} from "@mui/material";
import { Close, Dehaze } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";
import DrawerLogo from "../../assets/images/logodark.jpg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar sx={{ background: "transparent" }} position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Private Travel Services"
            width={100}
          />
          <IconButton
            onClick={() => {
              setIsDrawerOpen(true);
            }}
            color="warning"
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#fff",
              marginLeft: "auto",
            }}
          >
            {isDrawerOpen ? <Close /> : <Dehaze />}
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box
              p={2}
              role="presentation"
              width={350}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="img"
                src={DrawerLogo}
                width={100}
                alt="Private Travel Services"
              />
              <List>
                {routes.map((route, index) => {
                  const { label, path } = route;
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton
                        onClick={() => setIsDrawerOpen(false)}
                        color="dark"
                      >
                        <Link
                          to={path}
                          style={{
                            textDecoration: "none",
                            color: "#555",
                          }}
                        >
                          <ListItemText>{label}</ListItemText>
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <Button variant="contained">Get Quote</Button>
            </Box>
          </Drawer>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            {routes.map((route, index) => {
              const { label, path } = route;
              return (
                <Link
                  to={path}
                  key={index}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
