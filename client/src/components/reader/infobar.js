import React ,{useState} from 'react';
import { Snackbar,Alert, Button } from '@mui/material';


const Inforbar=()=>{
    const [open, setOpen] = React.useState(false);
    const vertical="bottom";
    const horizontal="center";
    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
      const handleClick = () => {
        setOpen(true);
      };
    return(
        <>
        <Button onClick={handleClick}>Click here</Button>
        <Snackbar
                            anchorOrigin={{ vertical, horizontal }}
                            open={open}
                            onClose={handleClose}
                            message="I love snacks"
                            key={vertical + horizontal}
                        >
                            <Alert severity="success">This is a success message!</Alert>
                        </Snackbar>
        </>
                
    );
}