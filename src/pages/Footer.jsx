import Navbar from 'react-bootstrap/Navbar';

const Footer =() => {
    return(
        <Navbar style={{backgroundColor:"#d9d9d9"}} className='p-0 d-flex justify-content-center fixed-bottom shadow-sm nordica text-black-50 rounded-top'>
        <div>
            <h6>Buenos Aires, Argentina.</h6>
        </div>
        </Navbar>
    )
};
export default Footer;