import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useCurrentUser } from 'lib/user';

const UserPopover = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { data: { user } = {}, error } = useCurrentUser();

  const handleClick = (event) => {
    setAnchorEl(event.target);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Tooltip>
      <Popover
        elevation={3}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '.MuiPaper-root': {
            maxWidth: 250,
            padding: 2,
            marginTop: 2,
            boxShadow:
              'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
          },
        }}
      >
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <Typography variant="body2">{user.email}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginY: 1 }}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            {user.role === 'CUSTOMER' ? (
              <Link href={'/account'}>
                <a>
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      fontSize: '1rem',
                      color: theme.palette.text.secondary,
                    }}
                    // startIcon={<User />}
                  >
                    Account
                  </Button>
                </a>
              </Link>
            ) : user.role === 'ADMIN' ? (
              <Link href={'/dashboard'}>
                <a>
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      fontSize: '1rem',
                      color: theme.palette.text.secondary,
                    }}
                    // startIcon={<User />}
                  >
                    Dashboard
                  </Button>
                </a>
              </Link>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ marginY: 1 }}>
            <Button
              fullWidth
              color="primary"
              variant="outlined"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
};

export default UserPopover;
