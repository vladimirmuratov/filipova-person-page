import React from 'react';
import { Button } from '@mui/material';

export const VCardDownloadButton = ({
                                        firstName,
                                        lastName,
                                        job,
                                        phone,
                                        email,
                                        filename = 'contact.vcf',
                                    }) => {
    const fullName = `${firstName} ${lastName}`.trim();

    const handleDownload = () => {
        const vcard = `
BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${fullName}
TITLE:${job}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD
`.trim();

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <Button
            onClick={handleDownload}
            sx={{
                backgroundColor: 'var(--red)',
                color: 'var(--white)',
                borderRadius: '999px',
                width: { xs: '100%', sm: '100%' },
                padding: '18px 0',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 4px 4px 0',
            }}
        >
            Сохранить в контакты
        </Button>
    );
};
