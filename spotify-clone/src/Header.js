//React Components
import React from 'react'

//Made Components
import {useDataLayerValue} from './DataLayer'

//Icons
import SearchIcon from '@material-ui/icons/Search'
import {Avatar} from '@material-ui/core'

//CSS
import './Header.css'

const Header = () => {
    const [{user}, dispatch] = useDataLayerValue()

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, Albums..."
                    type="text"
                />
            </div>   
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="GD" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
