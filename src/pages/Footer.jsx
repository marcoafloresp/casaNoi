import Navbar from 'react-bootstrap/Navbar';

const Footer =() => {
    return(
        <Navbar style={{backgroundColor:"rgba(255, 255, 255, 0.80)"}} className='p-0 d-flex justify-content-center fixed-bottom nordica shadow-sm rounded-top'>
        <div>
            <h6 style={{color: 'black'}}>Hecho en Argentina.</h6>
        </div>
        </Navbar>
    )
};
export default Footer;