import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Forms from './Forms';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>{props.text}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.intro}</DialogContentText>
          <Forms close={handleClose} type={props.form} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
