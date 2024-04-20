import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsIcon from '@mui/icons-material/Settings';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 220;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [pageIndication, setPageIndication] = React.useState('Dashboard');

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>
                <ListItem disablePadding>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <ListItemButton>
                            <ListItemIcon><OtherHousesIcon></OtherHousesIcon></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='dashboard-home' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <ListItemButton onClick={() => setPageIndication('Dashboard')}>
                            <ListItemIcon><AppsIcon></AppsIcon></ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding><Link to='dashboard-appointment' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                    <ListItemButton onClick={() => setPageIndication('Appointments')}>
                        <ListItemIcon><CalendarTodayIcon></CalendarTodayIcon></ListItemIcon>
                        <ListItemText>Appointments</ListItemText>
                    </ListItemButton>
                </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='patients' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <ListItemButton onClick={() => setPageIndication('Patients')}>
                            <ListItemIcon><PeopleOutlineIcon></PeopleOutlineIcon></ListItemIcon>
                            <ListItemText>Patients</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='prescriptions' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <ListItemButton onClick={() => setPageIndication('Prescriptions')}>
                            <ListItemIcon><InsertDriveFileIcon></InsertDriveFileIcon></ListItemIcon>
                            <ListItemText>Prescriptions</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='make-admin' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <ListItemButton onClick={() => setPageIndication('Add New Admin')}>
                            <ListItemIcon><PersonAddAltIcon></PersonAddAltIcon></ListItemIcon>
                            <ListItemText>Add New Admin</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='settings' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <ListItemButton onClick={() => setPageIndication('Settings')}>
                            <ListItemIcon><SettingsIcon></SettingsIcon></ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='logout' style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <ListItemButton>
                            <ListItemIcon><ExitToAppIcon></ExitToAppIcon></ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {pageIndication}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default Dashboard;