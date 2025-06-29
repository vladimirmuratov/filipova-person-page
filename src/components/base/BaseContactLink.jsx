import { memo } from 'react';
import { Box, Link, Typography } from '@mui/material';
import Image from 'next/image';

export const BaseContactLink = memo((props) => {
    const { href, icon, iconSize, label, phone, email, whatsappPhone, telegramPhone } = props;

    return (
        <Link
            href={href}
            sx={{
                boxShadow: 'rgb(215, 215, 215) 0 0 4px 4px',
                borderRadius: '20px',
                padding: '12px 16px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                }}
            >
                <Image
                    src={icon}
                    alt="icon"
                    width={iconSize.w}
                    height={iconSize.h}
                />
                <Box>
                    <Typography
                        sx={{
                            fontSize: 13,
                            fontWeight: 400,
                            color: 'var(--black)',
                            opacity: 0.5,
                        }}
                    >
                        {label}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'var(--black)',
                        }}
                    >
                        {label === 'Почта'
                            ? email
                            : label === 'Telegram'
                                ? telegramPhone
                                : label === 'WhatsApp'
                                    ? whatsappPhone
                                    : phone
                        }
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
});
