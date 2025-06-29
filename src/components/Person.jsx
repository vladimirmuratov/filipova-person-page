'use client';

import { memo } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { VCardDownloadButton } from '@/components/VCardDownloadButton';

export const Person = memo(({person}) => {
    const { firstName, lastName, job, phone, email, image } = person;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: { xs: '90%', sm: '307px' },
            }}
        >
            <Avatar
                src={image}
                sx={{
                    width: 193,
                    height: 193,
                    border: '2px solid var(--blue)',
                    marginBottom: '37px'
                }}
            />
            <Typography
                variant="h1"
                sx={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 700,
                }}
            >
                {lastName}
            </Typography>
            <Typography
                variant="h1"
                sx={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: '14px'
                }}
            >
                {firstName}
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: 400,
                    marginBottom: '27px'
                }}
            >
                {job}
            </Typography>
            <VCardDownloadButton
                firstName={firstName}
                lastName={lastName}
                job={job}
                phone={phone}
                email={email}
                filename={`${lastName}_${firstName}.vcf`}
            />
        </Box>
    );
});
