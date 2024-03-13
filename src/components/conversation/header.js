import { faker } from '@faker-js/faker'
import { Avatar, Divider, IconButton } from '@mui/material'
import { Phone, VideoCamera, MagnifyingGlass, CaretDown } from 'phosphor-react'
import React from 'react';
import StyledBadge from '../styled-badge';

function Header() {
    return (
        <div className='flex justify-between shadow p-5 bg-slate-50'>
            <div className='flex gap-5 align-middle items-center'>
                <div>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }
                        }
                        variant="dot"
                    >
                        <Avatar alt="avtar" src={faker.image.avatar()} />
                    </StyledBadge >
                </div>
                <div className='flex capitalize flex-col'>
                    <h3 className='text-lg font-bold'>pink panda</h3>
                    <span className='text-base'>online</span>
                </div>
            </div>

            <div className='flex gap-3'>
                <IconButton>
                    <VideoCamera />
                </IconButton>
                <IconButton>
                    <Phone />
                </IconButton>
                <IconButton>
                    <MagnifyingGlass />
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton>
                    <CaretDown />
                </IconButton>
            </div>
        </div>
    )
}

export default Header