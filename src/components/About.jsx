import { memo } from 'react';
import { Box, Typography } from '@mui/material';

export const About = memo(() => {
    return (
        <Box
            sx={{
                margin: '43px 0 53px',
                width: { xs: '90%', sm: '75%' },
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: '24px',
                }}
            >
                О компании
            </Typography>
            <Typography
                sx={{
                    textTransform: 'uppercase',
                    fontSize: 16,
                    fontWeight: 400,
                }}
            >
                ФГБУ ОБП УПРАВЛЕНИЕ ДЕЛАМИ ПРЕЗИДЕНТА
            </Typography>
        </Box>
    );
});
