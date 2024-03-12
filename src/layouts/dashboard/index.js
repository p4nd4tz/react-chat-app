import { Avatar, Box, Divider, IconButton, Stack, Switch, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from '../../hooks/useSettings'

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <div className="flex h-screen">
      <Box sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: 100 }}>
        <Stack direction="column" alignItems={"center"} justifyContent={"space-between"} sx={{ height: "100%", paddingY: 3 }} spacing={3} >
          <Stack alignItems={"center"} spacing={3}>
            <Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }} >
              <img src={logo} alt="Chat app icon" />
            </Box>
            <Stack direction="column" alignItems={"center"} sx={{ width: "100%" }} spacing={3} >
              {Nav_Buttons.map((el) => (
                el.index === selected ?
                  <Box key={el.index} sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5, display: "flex", alignItems: "center", justifyContent: "center" }} >
                    <IconButton sx={{ width: 'max-content', color: 'white' }}>{el.icon}</IconButton>
                  </Box>
                  : <IconButton key={el.index} onClick={() => setSelected(el.index)} sx={{ color: '#000' }}>
                    {el.icon}
                  </IconButton>

              ))}
              <Divider style={{ width: 64 }} />
              {selected === 3 ?
                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, display: 'flex', justifyContent: 'center', height: 64, width: 64 }}>
                  <IconButton sx={{ width: 'max-content', color: 'white' }}><Gear /></IconButton>
                </Box>
                : <IconButton onClick={() => setSelected(3)} sx={{ width: 'max-content', color: '#000' }}>
                  <Gear />
                </IconButton>
              }

            </Stack>
          </Stack>
          <Stack alignItems={"center"} spacing={3}>
            <Switch defaultChecked onChange={() => onToggleMode()} />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;