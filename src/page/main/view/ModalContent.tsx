//import React from 'react';
import styled from "styled-components";
import {Cad, Cgr} from "@src/page/main";

export const ModalContent = ({data}:{data:Cad&Cgr}) => {
    //data - AreaName,Description,Image,MinCharacterLevel,MinItemLevel,Name,RewardItems,StartTime,EndTime


    return (
        <ModalContentStyle>
            <div className="title">
                {/* {data.name} <span>{data.areaName}</span> */}
                {data.areaName}
            </div>
            <div className="date">
                {data.startTime} ~ { data.endTime}
            </div>
            <div className="img">
                <img src={data.image} alt={data.name}/>
            </div>
            <div className="description">
                <dl className="description--sub">
                    <dt>최소 캐릭터레벨</dt>
                    <dd>{data.minCharacterLevel}</dd>
                </dl>
                <dl className="description--sub">
                    <dt>최소 아이템레벨</dt>
                    <dd>{data.minItemLevel}</dd>
                </dl>
                {data.rewardItems&&(
                    <dl className="description--sub">
                        <dt>기대 보상</dt>
                        <dd className="items">
                            {data.rewardItems.map((e)=>(
                                <div className="description--sub--item">
                                    <img src={e.icon} alt={e.name}/>
                                    <p>{e.grade} {e.name}</p>
                                </div>
                            ))}
                        </dd>
                    </dl>
                )}
                <div className="description--cnt">
                    {data.description}
                </div>
            </div>
        </ModalContentStyle>
    );
};

const ModalContentStyle = styled.div`
    width:500px;
    .title{
        font-size:18px;
        color:var(--txt-colorB);
        font-weight:600;
        margin-bottom:7px;
        span{
            font-size:14px;
            font-weight:400;
        }
    }
    .date{
        font-size:14px;
        font-weight:400;
        margin-bottom:12px;
    }
    .img{
        width:100%;
        img{
            width:100%;
        }
    }
    .description{
        margin-top:10px;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        gap:5px;
        &--sub{
            display:flex;
            align-items:flex-start;
            justify-content:flex-start;
            width:100%;
            flex-wrap:wrap;
            gap:15px;
            dt{
                font-size:14px;
                color:var(--txt-colorB);
                font-weight:600;
                min-width:50px;
            }
            dd{
                font-size:12px;
                font-weight:400;
                // width:calc(100% - 100px);
                &.items{
                    display:flex;
                    align-items:center;
                    // justify-content:flex-start;
                    justify-content:space-around;
                    width:100%;
                    gap:4px;
                    margin-bottom:10px;
                    .description--sub--item{
                        text-align:center;
                        img{
                            width:40px;
                        }
                        p{
                            font-size:10px;
                            font-weight:400;
                            letter-spacing:-0.4px;
                            word-break:keep-all;
                        }
                    }
                }
            }
        }
        &--cnt{
            white-space:pre-wrap;
            width:100%;
            word-break:break-all;
            line-height:1.4;
        }
    }
`