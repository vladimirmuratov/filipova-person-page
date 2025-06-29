import { memo } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

export const Header = memo(() => {
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                padding: '20px 34px 0',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    alignSelf: { xs: 'flex-start' },
                }}
            >
                <Image
                    src="./logo.svg"
                    alt="logo"
                    width={134}
                    height={94}
                />
            </Box>
            <Box
                sx={{
                    width: '100%',
                }}
            >
                <Image
                    src="./name.svg"
                    alt="name"
                    width={475}
                    height={50}
                />
            </Box>
        </Box>
    );
});
