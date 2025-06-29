export const alekseeva = {
    firstName: 'Екатерина Игоревна',
    lastName: 'Алексеева',
    job: 'Заведующий отделением, врач-терапевт кандидат медицинских наук',
    phone: '+7 (993) 337-73-84',
    telegramPhone: '+7 (993) 337-73-84',
    whatsappPhone: '+7 (993) 337-73-84',
    email: 'Alekseeva-ei@fgu-obp.ru',
    contacts: [
        {
            id: 1,
            label: 'Мобильный телефон',
            icon: './icons/phone.svg',
            iconSize: {
                w: 19,
                h: 33,
            },
            href: `tel:+79933377384`,
            target: '_self'
        },
        {
            id: 2,
            label: 'Почта',
            icon: './icons/email.svg',
            iconSize: {
                w: 34,
                h: 28,
            },
            href: `mailto:Alekseeva-ei@fgu-obp.ru`,
            target: '_self'
        },
        {
            id: 3,
            label: 'Telegram',
            icon: './icons/telegram.svg',
            iconSize: {
                w: 43,
                h: 43,
            },
            href: `https://t.me/+79933377384`,
            target: '_blank'
        },
        {
            id: 4,
            label: 'WhatsApp',
            icon: './icons/whatsapp.svg',
            iconSize: {
                w: 50,
                h: 50,
            },
            href: `https://wa.me/+79933377384`,
            target: '_blank'
        },
    ]
};
