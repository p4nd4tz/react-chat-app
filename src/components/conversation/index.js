import React from 'react'
import Footer from './footer'
import Header from './header'
import Message from './message'
import { useTheme } from '@mui/material'


function Conversation() {
  const theme = useTheme();
  console.log(theme.palette);

  return (
    <div className='flex flex-col w-full max-h-full bg-slate-100'>
      <Header />

      {/* chat window */}
      <div className='grow h-full overflow-y-scroll'>
        <Message />
      </div>

      <Footer />
    </div>
  )
}

export default Conversation