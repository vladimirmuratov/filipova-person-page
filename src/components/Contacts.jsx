import { memo } from 'react';
import { Box } from '@mui/material';
import { BaseContactLink } from '@/components/base/BaseContactLink';

export const Contacts = memo(({ person }) => {
    const { phone, whatsappPhone, telegramPhone, email, contacts } = person;

    return (
        <Box
            sx={{
                // width: '450px',
                width: { xs: '90%', sm: '75%' },
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginTop: '40px',
            }}
        >
            {contacts.map((contact) => (
                <BaseContactLink
                    key={contact.id}
                    {...contact}
                    phone={phone}
                    email={email}
                    telegramPhone={telegramPhone}
                    whatsappPhone={whatsappPhone}
                />
            ))}
        </Box>
    );
});
