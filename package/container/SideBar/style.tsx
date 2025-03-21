import styled from "styled-components";
import {ReactNode, useContext} from "react";
import {ThemeContext} from "../../util/theme/theme";
import { Link } from "react-router-dom";

const SideBarStyle = styled.div<{mode:string}>`
    .logo{ 
        width:120px;
        a{
            display:block;
            img{
                width:100%;
            }
        }
    }
    .side{
        display:flex;
        flex-direction:column;
        gap:20px;
    }
    .sideBar{
        &--box{
            background:var(--sideBar-color);
            padding:20px;
            box-sizing:border-box;
            width:200px;
            border-radius:10px;
            box-shadow:0px 10px 10px rgba(0,0,0,0.07);
            h3{
                font-size:16px;
                margin-bottom:15px;
            }
        }
        &--list{
            display:flex;
            flex-direction:column;
            gap:5px;
            a{
                display:flex;
                align-items:center;
                vertical-align:bottom;
                color:var(--txt-colorA);
                font-size:14px;
                line-height:1.3;
            }
            &--num{
                width:16px;
                height:16px;
                display:block;
                text-align:center;
                border-radius:50%;
                font-size:12px;
                line-height:16px;
                margin-right:5px;
                color:var(--txt-colorA);
            }
            li {
                &:nth-child(1){
                    .sideBar--list--num{ 
                        background:#ffbd1b;
                        color:#fff;
                    }
                }  
                &:nth-child(2){
                    .sideBar--list--num{ 
                        background:#c0c0c0;
                        color:#fff;
                    }
                }
                &:nth-child(3){
                    .sideBar--list--num{ 
                        background:#6f4f28;
                        color:#fff;
                    }
                }
            }
        }
        &--item{
            button{
                width:100%;
                padding: 8px 10px 6px;
                box-sizing:border-box;
                border-radius:4px;
                h3{
                    color:var(--txt-colorA);
                    padding: 0;
                    display:block;
                    margin:0;
                    font-size:16px;
                    font-weight:500;
                    line-height: 1;
                    text-align:left;
                    vertical-align:middle;
                }
                &:hover{
                    background:var(--primary-color);
                    h3{
                        color:#fff;
                    }
                }
            }
            &.active{
                button{
                    h3{                       
                        color:var(--primary-color);
                        
                    }
                }
                &:hover{
                    button{
                        h3{
                            color:#fff;
                        }
                    }
                }
            }
        }
        &--inner{
            &--item{
                a{
                    color:var(--txt-colorA);
                    padding: 6px 0;
                    display:block;
                }
            }
        } 
    }
`

export const Style = ({children}:{children:ReactNode}) => {

    const { style } = useContext(ThemeContext)

    return (


        <SideBarStyle mode={style}>
            
            <div className="side">
                {children}
            </div>
        </SideBarStyle>
    );
};

