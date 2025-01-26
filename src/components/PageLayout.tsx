import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  PushPinOutlined,
  BadgeOutlined,
  WestOutlined,
  EastOutlined,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Typography,
  Box,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Theme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import {
  NotificationPopup,
  NotificationPreferencesPopup,
} from '@notificationapi/react';

interface Props {
  children?: React.ReactNode;
}

const items = [
  {
    text: 'Home',
    link: '/',
    icon: <HomeOutlined fontSize="small" />,
  },
  {
    text: 'Push Notifications',
    link: '/push-notifications',
    icon: <PushPinOutlined fontSize="small" />,
  },
  {
    text: 'Notification Card',
    link: '/notification-card',
    icon: <BadgeOutlined fontSize="small" />,
  },
];

const pageTitles: { [key: string]: string } = {
  '/': 'Home',
  '/push-notifications': 'Push Notifications',
  '/notification-card': 'Notification Card',
};

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 64;

const PageLayout = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [userCollapsed, setUserCollapsed] = useState(false); // Track if the user collapsed manually
  const [preferencesPopupVisibility, setPreferencesPopupVisibility] =
    useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMdScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );

  useEffect(() => {
    document.title = pageTitles[location.pathname];

    if (isMdScreen) {
      setCollapsed(true); // Auto-collapse on smaller screens
      setUserCollapsed(false); // Reset user collapse state
    } else if (!userCollapsed) {
      // Only expand if the user hasn't manually collapsed
      setCollapsed(false);
    }
  }, [location.pathname, isMdScreen, userCollapsed]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          width: {
            scrollMarginBlockStart: '100%',
            md: `calc(100% - ${
              collapsed ? drawerWidthCollapsed : drawerWidthExpanded
            }px)`,
          },
          ml: {
            md: 0,
            lg: `${collapsed ? drawerWidthCollapsed : drawerWidthExpanded}px`,
          },
          backgroundColor: '#202532',
          transition: (theme) =>
            theme.transitions.create(['width', 'margin-left'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut,
            }),
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{ justifyContent: 'space-between', alignItems: 'flex-end' }}
        >
          {isMdScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography color="#FFFFFF" variant="h5" marginBottom={1}>
            {pageTitles[location.pathname]}
          </Typography>

          <NotificationPopup buttonIconSize={24} iconColor="#FFFFFF" />
          <NotificationPreferencesPopup
            open={preferencesPopupVisibility}
            onClose={() => setPreferencesPopupVisibility(false)}
          />
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer
        variant={isMdScreen ? 'temporary' : 'permanent'}
        open={isMdScreen ? drawerOpen : undefined}
        onClose={isMdScreen ? handleDrawerToggle : undefined}
        sx={{
          width: isMdScreen
            ? drawerWidthExpanded
            : collapsed
              ? drawerWidthCollapsed
              : drawerWidthExpanded,
          flexShrink: 0,
          transition: 'width 0.3s',
          [`& .MuiDrawer-paper`]: {
            width: isMdScreen
              ? drawerWidthExpanded
              : collapsed
                ? drawerWidthCollapsed
                : drawerWidthExpanded,
            boxSizing: 'border-box',
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
              }),
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: '#202532',
            borderRight: 'none',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'hidden' }}>
          {/* Drawer content */}
          <List sx={{ px: 1 }}>
            {items.map((item) => {
              const isSelected = location.pathname === item.link; // Check if the current route matches
              return (
                <ListItem
                  key={item.text}
                  component={Link}
                  to={item.link}
                  sx={{
                    display: 'flex',
                    flexDirection: collapsed && !isMdScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent:
                      collapsed && !isMdScreen ? 'center' : 'flex-start',
                    bgcolor: isSelected ? '#FF2D55' : 'inherit', // Highlight color for selected item
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    margin: collapsed && !isMdScreen ? '8px 0' : '4px 0px', // Add spacing around items
                    textDecoration: 'none', // Remove underline
                    '&:hover': {
                      bgcolor: isSelected ? '#FF2D55' : '#333A47', // Slightly different hover for selected
                      borderRadius: '8px',
                    },
                  }}
                  onClick={isMdScreen ? handleDrawerToggle : undefined}
                >
                  <ListItemIcon
                    sx={{
                      color: isSelected ? '#FFFFFF' : '#FFFFFF',
                      minWidth: 'unset',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {(!collapsed || isMdScreen) && (
                    <ListItemText
                      primary={item.text}
                      sx={{
                        color: isSelected ? '#FFFFFF' : '#FFFFFF',
                        marginLeft: 1,
                      }}
                    />
                  )}
                </ListItem>
              );
            })}
          </List>
        </Box>
        {/* Drawer collapse button with the arrow icon, this box should be on the verry bottom of the drawer using space between */}
        {/*This box should be hidden on smaller screens */}
        {!isMdScreen && (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
              }}
            >
              <IconButton
                onClick={() => {
                  setCollapsed(!collapsed);
                  setUserCollapsed(!collapsed); // Track manual toggle state
                }}
                sx={{ color: '#FFFFFF' }}
              >
                {collapsed ? <EastOutlined /> : <WestOutlined />}
              </IconButton>
            </Box>
          </>
        )}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${
            collapsed ? drawerWidthCollapsed : drawerWidthExpanded
          }px)`,
          transition: 'width 0.3s',
          height: '100vh', // Ensure it takes up the full height of the viewport
          display: 'flex', // Use flexbox to ensure content takes available space
          flexDirection: 'column', // Make the content stack vertically
        }}
      >
        <Toolbar />
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            //padding: 2,
            height: '100%', // Ensure the content takes up the full height of the parent
            backgroundColor: '#202532',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PageLayout;
