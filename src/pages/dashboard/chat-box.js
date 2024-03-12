import { Avatar, Badge, useTheme } from "@mui/material";
import styled from '@emotion/styled';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const ChatBox = ({ chat }) => {
    const { img, name, msg, time, unread, online } = chat;
    const theme = useTheme();
    const color = theme.palette.background.default;

    return (
        <div className={` rounded-3xl flex align-middle items-center p-3 px-5 gap-4`}
            style={{ backgroundColor: `${theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default}` }}>
            {
                online ?
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }
                        }
                        variant="dot"
                    >
                        <Avatar alt="avtar" src={img} />
                    </StyledBadge >
                    : <Avatar alt="avtar" src={img} />
            }

            <div className='flex justify-between w-full'>
                <div className='flex flex-col gap-1 '>
                    <h3 className='text-base capitalize'>{name}</h3>
                    <p className='text-xs'>{msg}</p>
                </div>
                <div className='flex flex-col gap-3  items-center'>
                    <span>{time}</span>
                    <Badge color='primary' badgeContent={unread} />
                </div>
            </div>
        </div >
    )
}

export default ChatBox