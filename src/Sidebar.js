import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/dChat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar/>
                <div className='sidebar_headerRight'>
                
                 <IconButton>   
                 <DonutLargeIcon/>
                 </IconButton>

                 <IconButton>
                 <ChatIcon/>
                 </IconButton>
                 
                 <IconButton>
                 <MoreVertIcon/>
                 </IconButton>
                
                </div>
            </div>
            
             <div className='sidebar_search'>
                <div className='sidebar_container'>
                <SearchIcon/>
                <Input placeholder='Search Here!' type='text'/>
                </div>
            </div>

            <div className='sidebar_chat'>
                <SidebarChat/>
                
                
            </div>
            
        </div>
    )
}

export default Sidebar
