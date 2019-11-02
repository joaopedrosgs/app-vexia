


import React from 'react';
import { BottomNavigation, BottomNavigationAction, AppBar } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from "react-router-dom";

class BottomMenu extends React.Component {

    render() {

        return (

            <BottomNavigation color="primary"
                showLabels
                className="stickToBottom"
            >
                <BottomNavigationAction component={Link} to="/" label="Home" icon={<RestoreIcon />} />
                <BottomNavigationAction component={Link} to="/ranking" label="Ranking" icon={<RestoreIcon />} />
                <BottomNavigationAction component={Link} to="/busca" label="Busca" icon={<RestoreIcon />} />

            </BottomNavigation>


        );
    }
};

BottomMenu.propTypes = {

};

export default BottomMenu;