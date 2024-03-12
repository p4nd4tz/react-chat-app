import { Divider } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { ChatList } from '../../data'
import ChatBox from './chat-box'


function Chats() {
    return (
        <div className='relative w-80 bg-slate-50 shadow h-full'>
            <div className='flex flex-col gap-5 p-5 h-full'>
                <div className='flex justify-between items-center align-middle'>
                    <h2 className='text-2xl'>Chats</h2>
                    <div className='text-2xl'>
                        <CircleDashed />
                    </div>
                </div>
                <div className='relative'>
                    <input type='text' placeholder='Search' className='h-12 bg-slate-100 rounded-lg pl-10 align-middle w-full' />
                    <MagnifyingGlass className='absolute left-3 top-5' />
                </div>
                <div className='flex gap-3  align-middle items-center'>
                    <ArchiveBox className='text-2xl' />
                    <button className='text-xl'>Archive</button>
                </div>
                <Divider />

                {/* Chats */}
                <div className='flex gap-7 flex-col grow overflow-hidden'>
                    <div className='flex flex-col gap-3 justify-start'>
                        <h3 className='text-xl'>Pinned</h3>
                        {
                            ChatList.filter(cl => cl.pinned).map(cl => (<ChatBox key={cl.id} chat={cl} />))
                        }
                    </div>
                    <div className='flex flex-col gap-3 justify-start'>
                        <h3 className='text-xl'> All Chats</h3>
                        {
                            ChatList.filter(cl => !cl.pinned).map(cl => (<ChatBox key={cl.id} chat={cl} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats