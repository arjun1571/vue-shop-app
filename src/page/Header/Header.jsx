import {  FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import logo from "../../assets/images/sidebar/LogoMakr-3KGA0z.png"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header className="header-top p-3 ">
                <div className=" container-xxl ">
                    <div className="row ">
                        <div className="col-6">
                            <p>The trending Outfits at 90% off</p>
                        </div>
                        <div className="col-6 d-flex justify-content-between">
                           <div>
                                <a href="tel:+08801824761931" className="text-decoration-none"> call us +08801824761931</a>
                           </div>
                           <div className=''>
                                <AiOutlineMail className=' text-primary fs-3 mx-4'/>
                                <FaPhoneAlt className=' fs-3 mx-4 text-primary' />
                           </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className=" p-2 ">
                <div className=" container-xxl ">
                    <div className="row ">
                        <div className="col-2">
                            <Link to={"/"}><img src={logo} alt=""  className='img-fluid logo'/></Link>
                        </div>
                        <div className="col-5">
                            <Link to={"/"}>HOME</Link>
                            <Link to={"/shop"}>SHOP</Link>
                            <Link to={"/blog"}>BLOG</Link>
                            <Link to={"/about"}>ABOUT</Link>
                            <Link to={"/contact"}>CONTACT</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;