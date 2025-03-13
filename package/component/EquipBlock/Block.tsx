import React, { useState } from 'react';
import { Equip } from '../../util/type/type';
import ItemGrade from '@/package/util/code/enum/code.grade';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import cx from 'classnames';
import { Bar } from '../QualityBar';

export const Block = ({data,imgBg}:{data:Equip,imgBg:string}) => {
    const [visible, setVisible] = useState(false)
    const handleVisible = () => {
        setVisible(!visible)
    }

    const Tool = JSON.parse(data.Tooltip)
    const RuneTool = data.Rune ? JSON.parse(data.Rune.Tooltip) : ''

    return (
        <>
            <StyleBlock onClick={handleVisible}>
                <div className="blockInner">
                    <Img imgBg={imgBg}>
                        <div className="img--box">
                            <img src={data.Icon} alt={data.Name}/>
                        </div>
                        {Tool?.Element_001?.value.qualityValue >0 &&
                            <Bar num={Tool?.Element_001?.value.qualityValue}/>
                        }
                    </Img>
                    <Txt>
                        <p>
                            {data.Level && 
                                <strong 
                                    style={{ background:`${data.Level <= 10 ? 'var(--grade3)' : data.Level>=13?'var(--grade5)' :'var(--grade4)' }` }} 
                                    className='skillLevel'
                                >
                                    {data.Level}
                                </strong>
                            }
                            {data.Type} {data.Grade && `[${data.Grade}]`}
                        </p>
                        <h3>
                            {data.Name}
                            <ul className='tripods'>
                                {data?.Tripods?.map((e)=> e.IsSelected && 
                                    <li> 
                                        <strong 
                                            className="tripods--level" 
                                            style={{ background:`${ e.Tier ===0 ?'var(--grade2)':e.Tier===1?'var(--grade1)':'var(--grade4)'  }` }}
                                        >
                                            {e.Level}
                                        </strong> 
                                        {e.Name}
                                    </li>
                                )}
                            </ul>    
                        </h3>
                        {/* {data.tooltip}  */}
                    </Txt>  
                </div>
                {data.Rune && 
                    <div className="blockInner">
                        <Img imgBg={imgBg}>
                            <div className="img--box">
                                <img src={data.Rune.Icon} alt="" />
                            </div>
                        </Img>
                        <Txt>
                            <div className="flex">
                                <p dangerouslySetInnerHTML={{__html:RuneTool?.Element_000.value}}></p>
                                <p>{data.Rune.Grade && `[${data.Rune.Grade}]`}</p>
                            </div>
                            <div className="flex">
                                <h3 dangerouslySetInnerHTML={{__html:RuneTool?.Element_002?.value.Element_000}}></h3>
                                <p dangerouslySetInnerHTML={{__html:RuneTool?.Element_002?.value.Element_001}}></p>
                            </div>
                            {/* <h3>{data.Rune.Name} : {data.Rune.Tooltip}</h3> */}
                            {/* {data.tooltip}  */}
                        </Txt>  
                    </div>
                }
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
                                {Tool?.Element_001?.value.qualityValue>=0 && 
                                    <div className='item--bar'>
                                        <Bar num={Tool?.Element_001?.value.qualityValue}/>
                                    </div>
                                }
                            </div>
                            <div className='item--info'>
                                <p dangerouslySetInnerHTML={{__html:Tool?.Element_001?.value.leftStr0}}></p>
                                <div className='flex'>
                                    <p dangerouslySetInnerHTML={{__html:Tool?.Element_001?.value.leftStr1}}></p>:
                                    {Tool?.Element_001?.value.qualityValue>=0&&
                                        <p dangerouslySetInnerHTML={{__html:Tool?.Element_001?.value.qualityValue}}></p>
                                    }
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
                        {Tool?.Element_005?.value?.Element_000?
                            <div className='item--info'>
                                <div className='flex'>
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_005?.value?.Element_000 } }></p> :
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_005?.value?.Element_001 } }></p>
                                </div>
                            </div>:
                            <div className='item--info'>
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_005?.value } }></p>
                            </div>
                        }
                        {Tool?.Element_006?.type==="ItemPartBox"&& 
                            <div className='item--info'>
                                <div className='flex'>
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_006?.value?.Element_000 } }></p> :
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_006?.value?.Element_001 } }></p>
                                </div>
                            </div>
                        }  
                        {Tool?.Element_007?.type==="ItemPartBox"&& 
                            <div className='item--info'>
                                <div className='flex'>
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_007?.value?.Element_000 } }></p> :
                                    <p dangerouslySetInnerHTML={ {__html:Tool?.Element_007?.value?.Element_001 } }></p>
                                </div>
                            </div>
                        }  
                        {Tool?.Element_009?.type==="IndentStringGroup"&&
                            <div className='item--info'>
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_009?.value?.Element_000.contentStr.Element_000.contentStr } }></p> 
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_009?.value?.Element_000.contentStr.Element_001.contentStr } }></p> 
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_009?.value?.Element_000.topStr } }></p>    
                            </div>
                        }
                        {Tool?.Element_010?.type==="ItemPartBox"&&
                            <div className='item--info'>
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_010?.value?.Element_000 } }></p>
                                <p dangerouslySetInnerHTML={ {__html:Tool?.Element_010?.value?.Element_001 } }></p>
                                {/* <p dangerouslySetInnerHTML={ {__html:Tool?.Element_011?.value?.topStr } }></p> */}
                            </div>
                        }
                        {Tool?.Element_011?.type==="IndentStringGroup"&&
                            <div className='item--info'>
                                <p style={{color:'var(--txt-colorA)'}} dangerouslySetInnerHTML={ {__html:Tool?.Element_011?.value?.Element_000.contentStr.Element_000.contentStr } }></p> 
                                {Tool?.Element_011?.value?.Element_000.contentStr.Element_001 && <p dangerouslySetInnerHTML={ {__html:Tool?.Element_011?.value?.Element_000.contentStr.Element_001?.contentStr } }></p> }
                            </div>
                        }

                        {/* {data.Tooltip?.map((e)=>{})}     */}
                    </ModalCnt>
                </Modal>
            }
        </>
    );
};

const StyleBlock = styled.div`
    width:100%;
    border-radius:10px;
    background:var(--white-color);
    // background:rgba(255,255,255,0.7);
    padding:5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 10px;
    cursor:pointer;
    position:relative;
    box-sizing:border-box;
    .blockInner{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:10px;
        width:100%;
    }
`

const Img = styled.div<{
    imgBg:string

}>`
    .img--box{
        width:40px;
        height:40PX;
        border-radius:6px;
        overflow:hidden;
        padding:5px;
        box-sizing:border-box;
        box-shadow:inset rgba(0, 0, 0, 0.08) 0px 5px 10px;
        background:${(props)=>props.imgBg? props.imgBg : '#fff'};
        margin-bottom:2px;
        position:relative;
        &::after{
            content:'';
            width:100%;
            height:100%;
            background: linear-gradient(45deg,rgba(0,0,0,0.4), rgba(255,255,255,0.2));
            display:block;
            position:absolute;
            left:0;
            top:0;
        }
        img{
            // width:fit-content;
            // height:fit-content;
            width:calc(100% - 4px);   
            position:absolute;
            z-index:2;
            left:2px;
            top:2px;
        }
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
        display:flex;
        align-items:center;
        justify-content:flex-start;
    }
    p{
        font-size:12px;
        display:flex;
        align-items:center;
        justify-content:flex-start;
    }
    .flex{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:10px;
    }   
    .skillLevel{
        width:14px;
        height:14px;
        border-radius:4px;
        text-align:center;
        display:inline-flex;
        color:#fff;
        align-items:center;
        justify-content:center;
        font-weight:400;
        font-size:12px;
        vertical-align:bottom;
        line-height:9px;
        margin-right:2px;
    }
    .tripods{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:5px;
        margin-left:20px;
        &--level{
            width:14px;
            height:14px;
            border-radius:4px;
            font-weight:400;
            font-size:12px;
            text-align:center;
            border-radius:2px;
            text-align:center;
            display:inline-flex;
            color:#fff;
            align-items:center;
            justify-content:center;
            line-height:9px;
            margin-right:2px;
        }
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
        &--bar{
            position:absolute;
            left:0;
            bottom:4px;
            width:94%;
            left:3%;
        }
        &--img{
            width:70px;
            height:70px;
            border-radius:10px;
            overflow:hidden;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            &::after{
                content:'';
                width:100%;
                height:100%;
                background: linear-gradient(45deg,rgba(0,0,0,0.4), rgba(255,255,255,0.2));
                display:block;
                position:absolute;
                left:0;
                top:0;
            }
            img{
                // width:fit-content;
                // height:fit-content;
                width:calc(100% - 4px);   
                position:absolute;
                z-index:2;
                left:2px;
                top:2px;
            }
        }
        &--info{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:center;
            gap:5px;
            .flex{
                display:flex;
                align-items:flex-start;
                justify-content:flex-start;
                gap:5px;
            }
            p{
                font-size:14px !important;
                line-height:1.4;
                font{
                    font-size:14px !important;
                    color:var(--txt-colorA) !important;
                    line-height:1.4 !important;
                }
            }
        }
    }

`


