import React, { MouseEventHandler,ReactNode } from 'react';
import styled from 'styled-components';

interface Modal {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onClose?: MouseEventHandler<HTMLElement>;
    color?:string
    background?:string
    children?:string|ReactNode
    style?:React.CSSProperties
}

const Modal = ({
    onClick,
    onClose,
    // color,
    // background='var(--white-color)',
    children,
    // style,
   }:Modal) => {
    return (
        <ModalStyle>
            <ModalCnt>
                <button className="closeBtn" onClick={onClose}>
                    <div className='lft'></div>
                    <div className='rgt'></div>
                </button>
                {children}
            </ModalCnt>
            <div className="modal_bg" onClick={onClose}></div>
        </ModalStyle>
    );
};

const ModalStyle = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    z-index:10;
    display:flex;
    align-items:center;
    justify-content:center;
    .modal_bg{
        background:rgba(0,0,0,0.4);
        position:absolute;
        width:100%;
        height:100%;
    }
`
const ModalCnt = styled.div`
    min-width:500px;
    padding:20px;
    background:var(--background-color);
    z-index:2;
    border-radius:10px;
    position:relative;
    .closeBtn{
        width:30px;
        height:30px;
        position:absolute;
        right:20px;
        top:20px;
        cursor:pointer;
        div{
            width:30px;
            height:3px;
            background:var(--txt-colorA);
            position:absolute;
            &.lft{
                transform:rotate(50deg);
            }
            &.rgt{
                transform:rotate(-50deg);
            }
        }
    }
`

export default Modal;