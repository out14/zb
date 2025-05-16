//import React from 'react';
import {
    // dateFormat, 
    useController} from "@package/util";
import {MainController} from "@src/page/main";
import {Card} from "@package/component/Card/Card";
import styled from "styled-components";

export interface Cad {
    name: string,
    description: string,
    minCharacterLevel: number,
    minItemLevel: number,
    areaName?: string,
    startTime: string,
    endTime: string,
    image?: string,
    rewardItems?:{
        name: string,
        icon: string,
        grade: string,
        startTimes: string|null
    }[]
}

export interface Cgr {
    raids:CgrRaids[]
    rewardItems:CgrRewardItems[]
}

interface CgrRaids{
    description:string
    endTime:string
    image:string
    minCharacterLevel:number
    minItemLevel:number
    name:string
    startTime:string
}
interface CgrRewardItems{
    expeditionItemLevel:number
    item:{
        name: string,
        icon: string,
        grade: string,
        startTimes: string|null
    }[]
}

export const Content = () => {

    const {
        //cadData,cgrData,
        // handleModal
    }=useController(MainController)

    // console.log(cadData,'cadData')
    // console.log(cgrData,'cgrData')

    return (
        <Card.Wrap>

            <Card>
                <ContentStyle>
                    {/* {cadData?.map((e:Cad)=>(
                        <dl key={e.name}>
                            <dt className='cursor' onClick={()=>handleModal(e)}>
                                <img src={e.image} alt={e.name} />
                            </dt>
                            <dd className='cursor' onClick={()=>handleModal(e)}>
                                {e.name}
                            </dd>
                            <dd>
                                <span>
                                    {dateFormat(e.startTime)} ~ {dateFormat(e.endTime)}
                                </span>
                            </dd>
                        </dl>
                    ))} */}
                </ContentStyle>
            </Card>
            <Card>
                <ContentStyle>
                    {/* {cgrData?.map((e)=>(
                        <dl key={e.Name}>
                            <dt className='cursor' onClick={()=>handleModal(e)}>
                                
                            </dt>
                            <dd className='cursor' onClick={()=>handleModal(e)}>
                                도전 컨텐츠 이름
                                
                            </dd>
                            <dd>
                                <span>
                                    {dateFormat(e.StartTime)} ~ {dateFormat(e.EndTime)}
                                </span>
                            </dd>
                        </dl>
                    ))} */}
                </ContentStyle>
            </Card> 

        </Card.Wrap>
    );
};

const ContentStyle = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:0 15px; 
    box-sizing:border-box;
    gap:10px;
    dl{
        flex:1;
        display:flex;
        width:100%;
        flex-direction:column;
        gap:5px;
        .cursor{
            cursor:pointer
        }
        dt{
            width:100%;
            height:100px;
            background:rgba(0,0,0,0.03);
            border-radius:5px;
            overflow:hidden;
            margin-bottom:8px;
            img{ 
                width:100%;
                height:100%;
                object-fit:cover; 
            }
        }
        dd {
            font-size: 14px;
            font-weight: 400;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height:1.2;
            span{
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                font-weight: 400;
                color: var(--txt-colorB);
            }
        }
    }
`
