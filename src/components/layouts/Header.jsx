import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import logo from '/src/assets/Logo.png'
import { IoReorderTwo } from "react-icons/io5";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <div>
                <Container>
                    <Flex className={"gap-x-110"}>
                        <Image imgSrc={logo} className={"pt-8 pb-8"} />
                        <div className={"text-[14px] text-[#efefef]"}>
                            <ul className={"flex gap-x-9.75"}>
                                <li className={" hover:text-black hover:font-bold duration-75 cursor-pointer"}>HOME</li>
                                <li className={" hover:text-black hover:font-bold duration-75 cursor-pointer"}>SHOP</li>
                                <li className={" hover:text-black hover:font-bold duration-75 cursor-pointer"}>ABOUT</li>
                                <li className={" hover:text-black hover:font-bold duration-75 cursor-pointer"}>CONTACT</li>

                            </ul>
                        </div>
                    </Flex>
                </Container>
            </div>

            <div className={"bg-gray-200"}>
                <Container>
                    <Flex className={"justify-between"}>
                        <div className={"flex items-center pt-10 pb-10"}><IoReorderTwo /><h6 className={"text-[14px]"}>Shop by Category</h6></div>
                        <div><input type={"text"} className={"bg-white h-12.5 w-150"} placeholder={"Search Products"}></input><FaSearch className={"absolute top-30.75 right-115"} /></div>
                        <div className={"flex items-center"}>
                            <FaUser />
                            <FaCaretDown />
                            <FaShoppingCart className={"ml-10.25"}/>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Header