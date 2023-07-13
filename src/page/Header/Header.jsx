import {  FaPhoneAlt,FaProductHunt,FaCartPlus } from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { BiSearch} from 'react-icons/bi';
import { MdAccountCircle} from 'react-icons/md';
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

            <header className=" header-nav p-1 ">
                <div className=" container-xxl ">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-2">
                            <Link to={"/"}><img src={logo} alt=""  className='img-fluid logo'/></Link>
                        </div>
                        <div className="col-3 d-flex align-items-center mt-3">
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><BiSearch /></span>
                            <input type="text" className="form-control" placeholder="find products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button className="input-group-text" id="basic-addon2">search</button>
                            </div>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-between ">
                            <Link className='text-decoration-none' to={"/"}>HOME</Link>
                            <Link className='text-decoration-none' to={"/shop"}>SHOP</Link>
                            <Link className='text-decoration-none' to={"/blog"}>BLOG</Link>
                            <Link className='text-decoration-none' to={"/about"}>ABOUT</Link>
                            <Link className='text-decoration-none' to={"/contact"}>CONTACT</Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center  ">
                            <Link className='text-decoration-none p-2' to={"/"}><FaProductHunt className='fs-2' /></Link>
                            <Link className='text-decoration-none p-2' to={"/shop"}><MdAccountCircle className='fs-1'/></Link>
                            <Link className='text-decoration-none p-2' to={"/blog"}><FaCartPlus className='fs-2' /></Link>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;