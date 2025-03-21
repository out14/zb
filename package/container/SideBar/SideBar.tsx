import {Link,useNavigate} from "react-router-dom";
import {Style} from "./style";
import React, {useEffect} from "react";
import DummyUser from "@/package/util/code/enum/code.dummyUser";
import Logo from "@/package/assets/images/common/loaZ-logo.png"

export interface MenuProps {
    title: string | undefined;
    link: string | undefined;
    children?: MenuProps[] | undefined;
    isActivate?: boolean;
}

export const SideBar = ({ menus }: { menus: MenuProps[]}) => {
    
    
    return (
        <Style>
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="로고" />
                </Link>
            </div>
            <div className="sideBar--box">
                <ul className="sideBar--list">
                    {menus.map((e) => (
                        <SidebarMenu key={e.link} props={e} />
                    ))}
                </ul>
            </div>
            <div className="sideBar--box">
                <h3>추천 검색 캐릭터</h3>
                <ul className="sideBar--list">
                    {DummyUser.map((e,index)=>
                        <li>
                            <Link to={`armories/${e}`}>
                                <strong className="sideBar--list--num">{index+1}</strong>
                                {e}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </Style>

    );
};

function SidebarMenu({ props }: { props: MenuProps }) {
    const navigate = useNavigate()

    const [isActivate, setIsActivate] = React.useState(
        // (props.isActivate || props.children?.some((e) => e.isActivate)) ?? false
        // (loc.pathname.split('/')[1]===props.link&&true)
        props.isActivate
    );

    const onClick = () => {
        setIsActivate(!isActivate);
        navigate(props.link ?? '')
    };

    useEffect(()=>{
        setIsActivate(props.isActivate ?? false);
    },[location.pathname])

    return (
        // <li className={`sideBar--item ${isActivate ? 'active' : ''}`}>
        <li className={`sideBar--item ${isActivate ? 'active' : ''}`}>
            <button style={{ cursor: 'pointer' }} onClick={onClick} type="button" className="nav--item">
                <h3>{props.title}</h3>
            </button>
            {props.children && (
                <ul className="sideBar--inner">
                    {props.children.map((e) => (
                        <SidebarItem key={e.link} props={e} />
                    ))}
                </ul>
            )}
        </li>
    );
}

function SidebarItem({ props }: { props: MenuProps }) {
    const onClick = () => window.scrollTo(0, 0);

    return (
        <li className={`sideBar--inner--item ${props.isActivate ? 'active' : ''}`}>
            <Link onClick={onClick} to={props.link ?? ''}>
                {props.title}
            </Link>
        </li>
    );
}