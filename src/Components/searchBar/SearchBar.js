import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const SearchBar = () => {
    return (
        <div className="text-gray-400">
            
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
                <SearchIcon className="text-white" />
            </IconButton>
        </div>
    )
}

export default SearchBar
