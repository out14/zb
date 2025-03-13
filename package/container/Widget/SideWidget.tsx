import {WidgetStyle} from "./style";
import {Icon} from "../../component";
import Modal from "@/package/component/Modal/Modal";
import { useState } from "react";
import styled from "styled-components";

export const SideWidget = () => {

    const [state,setState]=useState(false)

    const handleReady =()=>{
        setState(!state)
    }    


    return (
        <>
            <WidgetStyle>
                <button onClick={handleReady} className="widget--btn">
                    <Icon
                        image={'star'}
                        height={'20px'}
                        width={'20px'}
                        color={'var(--txt-colorC)'}
                    />
                </button>
                <button
                    onClick={handleReady}
                    className="widget--btn"
                    style={{color:'var(--txt-colorC)'}}
                >
                    VS
                </button>
            </WidgetStyle>
            {state&&
                <Modal onClose={handleReady}>
                    <ReadyCnt>
                        아직 준비중인 서비스입니다.
                    </ReadyCnt>
                </Modal>
            }
        </>
    );
};

const ReadyCnt = styled.div`
    padding:40px 10px 20px;
    text-align:center;

`

