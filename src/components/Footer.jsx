import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
            <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />

            </div>
            <p> &copy; 2021 Food.com</p>

        </div>
    )
}

export default Footer