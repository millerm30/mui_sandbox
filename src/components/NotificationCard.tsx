import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Chip,
  Divider,
  Typography,
  Tooltip as MuiTooltip,
  Popper,
  Paper,
  Grid2,
  Grow,
  MenuItem,
  MenuList,
} from '@mui/material';
import {
  ModeEdit,
  MailOutlined,
  MessageOutlined,
  Smartphone,
  Phone,
  NotificationsNoneOutlined,
  LanguageOutlined,
  ArrowDropDown,
} from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Channels, NotificationCardProps } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const getChannelIcon = (channel: Channels): React.ReactElement => {
  switch (channel) {
    case Channels.EMAIL:
      return <MailOutlined color="primary" fontSize="small" />;
    case Channels.SMS:
      return <MessageOutlined color="primary" fontSize="small" />;
    case Channels.PUSH:
      return <Smartphone color="primary" fontSize="small" />;
    case Channels.CALL:
      return <Phone color="primary" fontSize="small" />;
    case Channels.INAPP_WEB:
      return <NotificationsNoneOutlined color="primary" fontSize="small" />;
    case Channels.WEB_PUSH:
      return <LanguageOutlined color="primary" fontSize="small" />;
    default:
      return <MailOutlined color="primary" fontSize="small" />;
  }
};

const NotificationCard: React.FC<NotificationCardProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<null | HTMLElement>(
    null,
  );

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handleClose = (event: Event) => {
    if (
      popoverAnchorEl &&
      popoverAnchorEl.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
    setPopoverAnchorEl(null);
  };

  const channelShortNames: Record<Channels, string> = {
    EMAIL: 'Email',
    INAPP_WEB: 'In-App',
    SMS: 'SMS',
    CALL: 'Call',
    PUSH: 'Push',
    WEB_PUSH: 'Web Push',
  };

  const getChannelShortName = (channel: string | undefined): string => {
    return channelShortNames[channel as Channels] || channel || '';
  };

  const getChannelTagText = (channel: Channels) => {
    const text = getChannelShortName(channel as Channels);
    return text;
  };

  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30],
      },
    ],
  };

  const items = [
    {
      label: 'Duplicate',
      content: (
        <Typography variant="body2">
          Duplicating a notification will create a new notification with the
          same content and settings. The new notification will have a different
          notification ID.
        </Typography>
      ),
      key: 'duplicate',
    },
    {
      label: 'Disable',
      content: (
        <Typography variant="body2">
          Disabling a notification causes requests with this notificationId to
          be ignored without any adverse side-effects. Your code will continue
          to work as before, but the API/SDK will return soft warnings.
        </Typography>
      ),
      key: 'disable',
    },
    {
      label: 'Delete',
      content: (
        <Typography variant="body2">
          Deleting a notification cannot be undone. It will cause all requests
          with this notificationId to throw an error. Before removing a
          notification, disable it and review the logs.
        </Typography>
      ),
      key: 'delete',
    },
  ];

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={
          <>
            <Typography variant="subtitle1" lineHeight={1}>
              {props.title}
            </Typography>
          </>
        }
        action={
          !props.enabled && (
            <Chip
              label="Disabled"
              color="warning"
              variant="outlined"
              size="small"
              sx={{ borderRadius: 1 }}
            />
          )
        }
      />
      <Divider />
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 container flexDirection="column" spacing={1}>
            <Grid2 container flexDirection="row" spacing={1}>
              {props.channels.map((c) => (
                <Chip
                  key={c}
                  icon={getChannelIcon(c as Channels)}
                  label={getChannelTagText(c as Channels)}
                  variant="outlined"
                  color="default"
                  sx={{ borderRadius: 1 }}
                  size="small"
                />
              ))}
            </Grid2>
            <Grid2 container flexDirection="row" spacing={1}>
              <Typography color="textSecondary" variant="body2">
                ID:
              </Typography>
              <Typography variant="body2">{props.notificationId}</Typography>
            </Grid2>
            <Grid2 container flexDirection="row" spacing={1}>
              <Typography color="textSecondary" variant="body2">
                Options:
              </Typography>
              <Typography variant="body2">
                {props.deduplication ? 'Deduplication' : 'none'}
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container size={12}>
            <Grid2 size={12}>
              <Line
                options={{
                  layout: {
                    padding: 10,
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      padding: 20,
                      titleMarginBottom: 10,
                      boxHeight: 0,
                      boxWidth: 0,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                    },
                  },
                  interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false,
                  },
                  scales: {
                    x: {
                      display: false,
                    },
                    yAxes: {
                      display: false,
                    },
                  },
                }}
                data={data}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </CardContent>
      <Divider />
      <CardActions
        sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}
      >
        <Grid2 container spacing={1}>
          <Grid2>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ textTransform: 'none' }}
              onClick={() => console.log('Edit clicked')}
              startIcon={<ModeEdit />}
            >
              Edit
            </Button>
          </Grid2>
          <Grid2>
            <ButtonGroup variant="outlined" color="secondary">
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                sx={{ textTransform: 'none', color: 'black' }}
              >
                Actions
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={handleMenuClick}
              >
                <ArrowDropDown />
              </Button>
            </ButtonGroup>
            <Popper
              open={open}
              anchorEl={anchorEl}
              transition
              placement="bottom-end"
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu">
                        {items.map((item) => (
                          <MuiTooltip
                            key={item.key}
                            title={item.content}
                            placement="right"
                            arrow
                          >
                            <MenuItem
                              key={item.key}
                              onMouseEnter={(event) =>
                                handleMenuItemClick(event)
                              }
                              onMouseLeave={() => setPopoverAnchorEl(null)}
                            >
                              <Typography variant="body2">
                                {item.label}
                              </Typography>
                            </MenuItem>
                          </MuiTooltip>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid2>
        </Grid2>
      </CardActions>
    </Card>
  );
};

export default NotificationCard;
