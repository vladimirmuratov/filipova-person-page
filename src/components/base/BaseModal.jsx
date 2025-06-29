import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Button } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const BaseModal = ({ title = '', children, open, handleClose, color = 'var(--red)' }) => {


    return (
        <Box>
            <Dialog
                fullWidth
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ color: color, textAlign: 'center' }}>{title}</DialogTitle>
                <DialogContent>
                    <Box
                        id="alert-dialog-slide-description"
                        sx={{
                            paddingBottom: '10px',
                            textWrap: 'balance',
                            textAlign: 'center',
                        }}>
                        {children}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            onClick={handleClose}
                            sx={{
                                backgroundColor: 'var(--red)',
                                color: 'var(--white)',
                                borderRadius: '999px',
                                width: { xs: '60%', sm: '100%' },
                                padding: '18px 0',
                                boxShadow: 'rgba(0, 0, 0, 0.25) 0 4px 4px 0',
                                margin: '0 auto',
                            }}
                        >
                            OK
                        </Button>
                    </Box>
                </DialogContent>

            </Dialog>
        </Box>
    );
};
