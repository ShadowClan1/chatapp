import React from 'react'
import ChatComponent from './ChatComponent'
import { Box } from '@mui/material'

type chat = {name : string, lastMessage : string}

const ChatList = () => {
    const chatData : [chat] = [
        {name : 'krishna', lastMessage :'take care!!'},
        {name : 'Radhe', lastMessage :'take care!!'},
        {name : 'Govinda', lastMessage :'take care!!'},
        {name : 'Madhva', lastMessage :'take care!!'},
        {name : 'Raman', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
        {name : 'GokulNandan', lastMessage :'take care!!'},
]
  return (
    <Box sx={{overflowY : 'scroll', maxHeight : '85vh'}}>
    <ChatComponent/>
    {chatData.map((e:chat)=>{
        return <ChatComponent name={e.name} lastmessage={e.lastMessage}/>;
    })}

    </Box>
  )
}

export default ChatList
