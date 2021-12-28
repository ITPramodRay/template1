import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink } from 'reactstrap';

import Avtar from "../../../assets/images/myaccount/Avatar.png";
import Pencil from "../../../assets/images/myaccount/Pencil.svg";
import Bank from "../../../assets/images/myaccount/Bank.svg";
import CaretDown from "../../../assets/images/myaccount/CaretDown.svg";
import Checks from "../../../assets/images/myaccount/Checks.svg";
import CircleWavyCheck from "../../../assets/images/myaccount/CircleWavyCheck.svg";
import DeviceMobileCamera from "../../../assets/images/myaccount/DeviceMobileCamera.svg";
import IdentificationCard from "../../../assets/images/myaccount/IdentificationCard.svg";
import Pattern from "../../../assets/images/myaccount/pattern.svg";
import Receipt from "../../../assets/images/myaccount/Receipt.svg";
import ShareNetwork from "../../../assets/images/myaccount/ShareNetwork.svg";
import shield from "../../../assets/images/myaccount/shield.svg";
import UserCirclePlus from "../../../assets/images/myaccount/UserCirclePlus.svg";
import UserList from "../../../assets/images/myaccount/UserList.svg";
import whatsapp from "../../../assets/images/myaccount/whatsapp.svg";
import {useHistory,useLocation} from "react-router-dom"
import { myProfilePaths } from '../../../utils/RoutingConstants';

function SideBar() {
    const history = useHistory()
    const location = useLocation()
    return (
        <Col sm={4} >
        <div className='persone-card'>
            <Row className="align-items-center">
                <img src={Pattern} alt="Pattern" title="Pattern" className=' person-pattern-img' />
                <Col sm={4}>
                    <div className='person-edit-block'>
                        <img src={Avtar} alt="Person" title="Person" className='w-100' />
                        <div className='persone-edit'>
                            <Button className='person-edit-btn'><img src={Pencil} alt="Pencil" title="Pencil" /></Button>
                        </div>
                    </div>
                </Col>
                <Col sm={8}>
                    <p className='person-name mb-0'>Ramesh Nair</p>
                    <span className='persone-job'>Engineer at BB Agency</span>
                </Col>
            </Row>
            <Row className="align-items-center pt-3">
                <Col sm={6}>
                    <p className='signed-text mb-0'>Signed in as</p>
                    <span className='signed-persone'>Ramesh Nair</span>
                </Col>
                <Col sm={6}>
                    <Button className='logout-btn'>Logout</Button>
                </Col>
            </Row>
        </div>
        <div className='corporate-card'>
            <Row className='align-items-center'>
                <Col sm={2}>
                    <img src={shield} alt="shield" title="shield" className='w-100' />
                </Col>
                <Col sm={6}>
                    <p className='link-text mb-0'>Link Corporate Account</p>
                </Col>
                <Col sm={4} className='p-0'>
                    <Button className='link-now-btn'>Link Now</Button>
                </Col>
            </Row>
        </div>
        <div className='myaccount-menus-card'>
            <Nav className="myaccountmenu-list" navbar>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.myProfile)} 
                    
                    className={`${location.pathname === myProfilePaths.myProfile?"active":""}`}>
                        <img src={IdentificationCard} alt="IdentificationCard" title="IdentificationCard" />
                        Personal Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.kycDetails)}
                    className={`${location.pathname === myProfilePaths.kycDetails?"active":""}`}
                    >
                        <img src={CircleWavyCheck} alt="CircleWavyCheck" title="CircleWavyCheck" />
                        KYC Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.bankDetails)}
                    className={`${location.pathname === myProfilePaths.bankDetails?"active":""}`}
                    >
                        <img src={Bank} alt="Bank" title="Bank" />
                        Bank Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.contactDetails)}
                    className={`${location.pathname === myProfilePaths.contactDetails?"active":""}`}
                    >
                        <img src={DeviceMobileCamera} alt="DeviceMobileCamera" title="DeviceMobileCamera" />
                        Contact Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.nominee)}
                    className={`${location.pathname === myProfilePaths.nominee?"active":""}`}
                    >
                        <img src={UserCirclePlus} alt="UserCirclePlus" title="UserCirclePlus" />
                        Add Nominee
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.myProfile)}
                    className={`${location.pathname === myProfilePaths.myProfile?"active":""}`}
                    >
                        <img src={UserList} alt="UserList" title="UserList" />
                        Corporate Details
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.myProfile)}
                    className={`${location.pathname === myProfilePaths.myProfile?"active":""}`}
                    >
                        <img src={Receipt} alt="Receipt" title="Receipt" />
                        Transcation
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.referFriend)}
                    className={`${location.pathname === myProfilePaths.referFriend?"active":""}`}
                    >
                        <img src={ShareNetwork} alt="ShareNetwork" title="ShareNetwork" />
                        Refer a Friend
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>history.push(myProfilePaths.preApprovedInsurance)}
                    className={`${location.pathname === myProfilePaths.preApprovedInsurance?"active":""}`}
                    >
                        <img src={Checks} alt="Checks" title="Checks" />
                        Preapproved Insurance
                    </NavLink>
                </NavItem>

            </Nav>
        </div>
    </Col>
    )
}

export default SideBar
