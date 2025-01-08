import React, { useState } from 'react';
import { Equip } from '../../util/type/type';
import ItemGrade from '@/package/util/code/enum/code.grade';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import cx from 'classnames';

export const Block = ({data,imgBg}:{data:Equip,imgBg:string}) => {
    const [visible, setVisible] = useState(false)
    const handleVisible = () => {
        setVisible(!visible)
    }

    // console.log( 'nnnn',JSON.parse(data.Tooltip).map((e)=>e.value) )
    console.log( 'nnnn',JSON.parse(data.Tooltip) )
    const Tool = JSON.parse(data.Tooltip)
    console.log( 'mmm',Tool?.Element_005 )

    return (
        <>
            <StyleBlock onClick={handleVisible}>
                <Img imgBg={imgBg}>
                    <img src={data.Icon} alt={data.Name}/>
                </Img>
                <Txt>
                    <p>{data.Type} [{data.Grade}]</p>
                    <h3>{data.Name}</h3>
                {/* {data.tooltip}  */}
                </Txt>  
                
            </StyleBlock>
            {visible&&<Modal onClose={handleVisible}>
                    <ModalCnt>
                        <div dangerouslySetInnerHTML={ {__html:Tool?.Element_000?.value } }></div>
                        <div className='item'>
                            <div 
                                className='item--img' 
                                style={{background:`var(--grade${Tool?.Element_001?.value?.slotData?.iconGrade})`}}
                            >
                                <img src={Tool?.Element_001?.value?.slotData?.iconPath} alt="" />
                            </div>
                            <div className='item--info'>
                                <p dangerouslySetInnerHTML={{__html:Tool?.Element_001?.value.leftStr0}}></p>
                                <div className='flex'>
                                    <p dangerouslySetInnerHTML={{__html:Tool?.Element_001?.value.leftStr1}}></p>:
                                    <p dangerouslySetInnerHTML={{__html:Tool?.Element_001?.value.qualityValue}}></p>
                                </div>
                                <p dangerouslySetInnerHTML={{__html:Tool?.Element_001?.value.leftStr2}}></p>
                            </div>
                        </div>
                        <div className='item--info'>
                            <p dangerouslySetInnerHTML={ {__html:Tool?.Element_002?.value } }></p>        
                        </div>
                        {Tool?.Element_004.type==="ItemPartBox"&&
                            <div className='item--info'>
                                <div className='flex'>
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_004?.value?.Element_000 } }></p> :
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_004?.value?.Element_001 } }></p>
                                </div>
                            </div>
                        }
                        <div className='item--info'>
                            <div className='flex'>
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_005?.value?.Element_000 } }></p> :
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_005?.value?.Element_001 } }></p>
                            </div>
                        </div>
                    

                        {/* {data.Tooltip?.map((e)=>{})}     */}
                    </ModalCnt>
                </Modal>
            }
        </>
    );
};

const StyleBlock = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:10px;
    border-radius:10px;
    background:var(--white-color);
    // background:rgba(255,255,255,0.7);
    padding:5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 10px;
    cursor:pointer;
    position:relative;
`

const Img = styled.div<{
    imgBg:string

}>`
    width:40px;
    height:40PX;
    border-radius:10px;
    overflow:hidden;
    padding:5px;
    box-sizing:border-box;
    box-shadow:inset rgba(0, 0, 0, 0.08) 0px 5px 10px;
    background:${(props)=>props.imgBg? props.imgBg : '#fff'};
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
    gap:4px;
    h3{
        font-size:14px;
    }
    p{
        font-size:12px;
    }
`

const Pop = styled.div`
    border-radius:10px;
    overflow:hidden;
    padding:5px;
    box-sizing:border-box;
    box-shadow:inset rgba(0, 0, 0, 0.08) 0px 5px 10px;
    position:absolute;
    top:50px;
    left:0;
    z-index:2;
    background:#fff;
    // display:none;
`

const ModalCnt = styled.div`
    text-align:left;
    p{
        text-align:left;
    }
    display:flex;
    flex-direction:column;
    gap:10px;
    
    .item{
        display:flex;
        align-items:space-around;
        justify-content:flex-start;
        gap:10px;
        width:100%;
        &--img{
            width:70px;
            height:70px;
            border-radius:10px;
            overflow:hidden;
            display:flex;
            align-items:center;
            justify-content:center;

        }
        &--info{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:center;
            gap:5px;
            .flex{
                display:flex;
                align-items:center;
                justify-content:flex-start;
                gap:5px;
            }
            p{
                font-size:14px !important;
                font{
                    font-size:14px !important;
                }
            }
        }
    }

`


