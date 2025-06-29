import { Box } from '@mui/material';
import { Header } from '@/components/Header';
import { Person } from '@/components/Person';
import { Contacts } from '@/components/Contacts';
import { alekseeva } from '@/config/person';
import { About } from '@/components/About';
import { Form } from '@/components/Form';

export default function Home() {
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                component="section"
                sx={{
                    margin: '0 auto',
                    width: {xs: '100%', sm: '704px'},
                    // maxWidth: '704px',
                    minHeight: '200vh',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0 4px 24px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Header />
                <Person />
                <Contacts info={alekseeva} />
                <About />
                <Form/>
            </Box>
        </Box>
    );
}
