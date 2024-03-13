import { IconButton, InputAdornment, TextField, useTheme, Stack, Fab, Tooltip } from '@mui/material'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Camera, File, Image, Link, PaperPlaneTilt, Smiley, Sticker, User } from 'phosphor-react'
import React, { useState } from 'react'
import { } from '../../data'

const Actions = [
    {
        color: '#4da5fe',
        icon: <Image size={24} />,
        y: 102,
        title: 'Photo/Video',
    },
    {
        color: '#1b8cfe',
        icon: <Sticker size={24} />,
        y: 172,
        title: 'Stickers',
    },
    {
        color: '#0172e4',
        icon: <Camera size={24} />,
        y: 242,
        title: 'Image',
    },
    {
        color: '#0159b2',
        icon: <File size={24} />,
        y: 312,
        title: 'Document',
    },
    {
        color: '#013f7f',
        icon: <User size={24} />,
        y: 382,
        title: 'Contact',
    },
]


const ChatInput = ({ setOpenPicker }) => {
    const [openActions, setOpenActions] = useState(false);
    return (
        <TextField
            variant="outlined"
            placeholder="Type your message..."
            style={{ width: "100%" }}
            InputProps={{
                startAdornment: (
                    <Stack sx={{ width: 'max-content' }} >
                        <Stack sx={{ position: "relative", display: openActions ? 'inline-block' : 'none' }}>
                            {Actions.map(el => (
                                <Tooltip key={el.title} title={el.title} placement="right">
                                    <Fab color="primary" aria-label='add' sx={{ position: 'absolute', top: -el.y, backgroundColor: el.color }}>
                                        {el.icon}
                                    </Fab>
                                </Tooltip>
                            ))}
                        </Stack>
                        <InputAdornment position="start">
                            <IconButton onClick={() => setOpenActions(action => !action)}>
                                <Link size={32} />
                            </IconButton>
                        </InputAdornment>
                    </Stack >
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setOpenPicker(picker => !picker)}>
                            <Smiley size={32} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
};

function Footer() {
    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);

    return (
        <div className='flex align-middle w-full p-5 gap-5 items-center bg-slate-50 shadow'>
            <div className='w-full'>
                <div className={`z-10 fixed bottom-24 right-24 ${openPicker ? 'inline' : 'hidden'}`}>
                    <Picker data={data} onEmojiSelect={console.log} />
                </div>
                <ChatInput setOpenPicker={setOpenPicker} />
            </div>
            <button className='bg-paper h-12 w-12 rounded-xl p-2' style={{ backgroundColor: theme.palette.primary.main }}>
                <PaperPlaneTilt size={32} className='text-white' />
            </button>
        </div>
    )
}

export default Footer