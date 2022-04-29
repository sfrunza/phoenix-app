import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import useSwr from 'swr';
import { useSnackbar } from 'notistack';
import TextField from '@mui/material/TextField';

export default function Edit({ job, field }) {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState(job[field]);
  const { enqueueSnackbar } = useSnackbar();
  const { mutate } = useSwr(`/api/jobs/${job.id}`);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function capitalizeField(string) {
    string = string
      .split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const onSubmit = async () => {
    let jobObj = job;
    delete jobObj.addresses;
    const values = {
      ...jobObj,
      [field]: value,
    };
    setIsLoading(true);
    await mutate(values, false);
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          enqueueSnackbar('Something went wrong', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          });
          // setIsLoading(false);
        } else {
          enqueueSnackbar(`${capitalizeField(field)} updated`, {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          });
          handleClose();
          // setIsLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setIsLoading(false);
  };

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton onClick={handleClickOpen}>
          <Box sx={{ width: 18, height: 18, display: 'flex' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Box>
        </IconButton>
      </Tooltip>
      <Dialog
        fullWidth
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {capitalizeField(
            field
              .split(/(?=[A-Z])/)
              .join(' ')
              .toLowerCase(),
          )}
        </DialogTitle>
        <DialogContent>
          <TextField
            multiline
            rows={4}
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={handleClose} variant="outlined" color="success">
            Close
          </Button>
          <Button
            onClick={() => {
              onSubmit();
            }}
            autoFocus
            variant="contained"
            color="success"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
