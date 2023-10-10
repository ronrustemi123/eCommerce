import { Stack } from '@mui/material';
import './Footer.css'

const footerLinks = ['about', 'store locator', 'FAQs', 'news', 'careers', 'contact us']

const Footer = () => {
    return (
        <Stack spacing={4} direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: 'black', height: '23vh'}}>
            <ul className='footer-menu'>
                {footerLinks.map((el, i) => <li className='footer-links' key={i}>{el}</li>)}
            </ul>
            <h2>Design by Abderraouf</h2>
        </Stack>
    );
}
 
export default Footer;