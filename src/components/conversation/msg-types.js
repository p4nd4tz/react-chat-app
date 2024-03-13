import {
    Box,
    Divider,
    Stack,
    Typography,
    useTheme,
    Link,
    IconButton,
    MenuItem,
    Menu,
} from "@mui/material";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from "../../data";
import { useState } from "react";

export const DocMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <div className={`flex ${el.incoming ? "justify-start" : "justify-end"}`}>
            <div
                className="p-3 rounded-xl w-max"
                style={{
                    backgroundColor: `${el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main
                        }`,
                }}
            >
                <Stack spacing={2}>
                    <Stack
                        p={2}
                        spacing={3}
                        direction="row"
                        alignItems="center"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1,
                        }}
                    >
                        <Image size={48} />
                        <Typography variant="caption">Abstract.png</Typography>
                        <IconButton>
                            <DownloadSimple />
                        </IconButton>
                    </Stack>
                    <Typography
                        variant="body2"
                        sx={{ color: el.incoming ? theme.palette.text : "#fff" }}
                    >
                        {el.message}
                    </Typography>
                </Stack>
            </div>
            <MessageOptions />
        </div>
    );
};

export const TextMsg = ({ el }) => {
    const theme = useTheme();

    return (
        <div className={`flex ${el.incoming ? "justify-start" : "justify-end"} `}>
            <div
                className="p-3 rounded-xl w-max"
                style={{
                    backgroundColor: `${el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main
                        }`,
                    color: `${el.incoming ? theme.palette.text : "#fff"}`,
                }}
            >
                <span>{el.message}</span>
            </div>
            <MessageOptions />
        </div>
    );
};

export const MediaMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <div className={`flex ${el.incoming ? "justify-start" : "justify-end"}`}>
            <div
                className="p-3 rounded-xl w-max"
                style={{
                    backgroundColor: `${el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main
                        }`,
                }}
            >
                <img className="max-h-52 rounded" src={el.img} alt={el.message} />
                <p className="mt-2 text-base">{el.message}</p>
            </div>
            <MessageOptions />
        </div>
    );
};

export const ReplyMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <div className={`flex ${el.incoming ? "justify-start" : "justify-end"}`}>
            <div
                className="p-3 rounded-xl w-max"
                style={{
                    backgroundColor: `${el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main
                        }`,
                }}
            >
                <div className="flex gap-2 flex-col">
                    <h2
                        className="p-2 rounded-lg"
                        style={{ background: theme.palette.background.paper }}
                    >
                        {el.message}
                    </h2>
                    <p style={{ color: `${el.incoming ? theme.palette.text : "#fff"}` }}>
                        {el.reply}
                    </p>
                </div>
            </div>
            <MessageOptions />
        </div>
    );
};

export const Timeline = ({ el }) => {
    const theme = useTheme();

    return (
        <div className="flex items-center justify-evenly">
            <Divider sx={{ width: "44%" }} />
            <span style={{ color: theme.palette.text }}>{el.text}</span>
            <Divider sx={{ width: "44%" }} />
        </div>
    );
};

export const LinkMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <div className={`flex ${el.incoming ? "justify-start" : "justify-end"}`}>
            <div
                className="p-3 rounded-xl w-max"
                style={{
                    backgroundColor: `${el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main
                        }`,
                }}
            >
                <Stack spacing={2}>
                    <Stack
                        p={2}
                        spacing={2}
                        alignItems="start"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1,
                        }}
                    >
                        <img
                            src={el.preview}
                            alt={el.message}
                            className="rounded max-h-52"
                        />
                        <Stack spacing={2}>
                            <Typography variant="subtitle2">Creating Chat App</Typography>
                            <Typography
                                variant="subtitle2"
                                component={Link}
                                sx={{ color: theme.palette.primary.main }}
                                to="//https://www.youtube.com"
                            >
                                www.youtube.com
                            </Typography>
                        </Stack>
                        <Typography
                            variant="body2"
                            color={el.incoming ? theme.palette.text : "#fff"}
                        >
                            {el.message}
                        </Typography>
                    </Stack>
                </Stack>
            </div>
            <MessageOptions />
        </div>
    );
};

const MessageOptions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <DotsThreeVertical
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                size={24}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Stack spacing={1} px={1}>
                    {Message_options.map((el) => (
                        <MenuItem onClick={() => handleClick()} key={el.title}>
                            {el.title}
                        </MenuItem>
                    ))}
                </Stack>
            </Menu>
        </>
    );
};
