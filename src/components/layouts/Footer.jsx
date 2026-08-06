import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { FaFacebookF , FaLinkedinIn ,FaInstagram } from "react-icons/fa";
import Image from '../common/Image';
import orebii from '/src/assets/OREBI.png';

const Footer = () => {
  return (
    <div className={"bg-gray-200 pt-10"}>
        <Container>
            <Flex className={"justify-between"}>
                <div className={"w-[10%]"}>
                    <h3 className={"text-[16px] font-bold"}>MENU</h3>
                    <ul className={"text-[14px] mt-4.25 gap-y-1.5 text-[#6D6D6D]"}>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Journal</li>
                    </ul>
                    <div className={"flex items-center gap-x-6.25 mt-16.25"}><FaFacebookF /><FaLinkedinIn /><FaInstagram /></div>

                </div>
                <div className={"mb-18.25 w-[10%]"}>
                      <h3 className={"text-[16px] font-bold"}>SHOP</h3>
                    <ul className={"text-[14px] mt-4.25 gap-y-1.5 text-[#6D6D6D]"}>
                        <li>Category 1</li> 
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                        <li>Category 5</li>
                    </ul>
                   
                </div>
                <div className={"mb-18.25 w-[10%]"}>
                      <h3 className={"text-[16px] font-bold"}>HELP</h3>
                    <ul className={"text-[14px] mt-4.25 gap-y-1.5 text-[#6D6D6D]"}>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Special E-shop</li>
                        <li>Shipping</li>
                        <li>Secure Payments</li>
                    </ul>
                </div>
                <div className={"mb-29.25 w-[20%]"}>
                    <h4 className={"text-[16px] font-bold"}>(052) 611-5711</h4>
                    <h4 className={"mb-3.75 text-[16px] font-bold"}>company@domain.com</h4>
                    <p className={"text-[14px] text-[#6D6D6D]"}>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className={"mb-31.25 w-[30%]"}>
                    <Image imgSrc={orebii}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Footer