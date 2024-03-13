import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack, Switch, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Nav_Buttons, Profile_Menu } from "../../data";
import logo from "../../assets/Images/logo.ico";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from '../../hooks/useSettings';

function Sidenav() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
    const open = Boolean(anchorEl);
    const theme = useTheme();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
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
                    <Avatar id="basic-button"
                        src={faker.image.avatar()} onClick={handleClick}
                        aria-controls={open ? "basic-menu" : undefined}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                    >
                        <Stack spacing={1} px={1}>
                            {Profile_Menu.map((el) => (
                                <MenuItem onClick={() => handleClick()} key={el.title}>
                                    <Stack sx={{ width: 100 }} direction="row" alignItems={"center"} justifyContent="space-between">
                                        <span>{el.title}</span>
                                        {el.icon}
                                    </Stack>
                                    {" "}
                                </MenuItem>
                            ))}
                        </Stack>
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Sidenav