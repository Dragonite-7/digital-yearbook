import * as React from 'react';
import {Alert, Dialog, Snackbar, IconButton, Button}  from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface AlertDialogErrorProps{
open: boolean;
error:string;
handleClose :()=> void
}

export default function AlertDialogError(props: AlertDialogErrorProps) {
  
  const {open, handleClose,error}  = props;

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <div>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Snackbar
          anchorOrigin={{ vertical: 'top',horizontal: 'center', }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          action={action}
        >
          <Alert severity="error" onClose={handleClose}>{error} — check it out!</Alert>
        </Snackbar>
      </Dialog>
    </div>
  );
}
