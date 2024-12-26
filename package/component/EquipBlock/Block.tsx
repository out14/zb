import React from 'react';
import { Equip } from '../../util/type/type';
import styled from 'styled-components';

export const Block = ({data}:{data:Equip}) => {
    return (
        <StyleBlock>
            <Img>
                <img src={data.icon} alt={data.name}/>
            </Img>
            <Txt>
                <p>{data.type}</p>
                <h3>{data.name}</h3>
                <p>{data.grade}</p>
               
               {/* {data.tooltip}  */}
            </Txt>       



        </StyleBlock>
    );
};

const StyleBlock = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    gap:10px;
    border-radius:10px;
    background:var(--white-color);
    // background:rgba(255,255,255,0.7);
    padding:5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 10px;

`

const Img = styled.div`
    width:40px;
    height:40PX;
    border-radius:10px;
    overflow:hidden;
    padding:5px;
    box-sizing:border-box;
    box-shadow:inset rgba(0, 0, 0, 0.08) 0px 5px 10px;
    img{
        // width:fit-content;
        // height:fit-content;
        width:calc(100% - 0px);   
    }
    
`

const Txt = styled.div`
    width:calc( 100% - 80px );
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-strat;
    gap:1px;
    h3{
        font-size:14px;
    }
    p{
        font-size:12px;
    }
`


