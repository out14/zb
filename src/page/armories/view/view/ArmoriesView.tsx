import React,{useEffect} from 'react';
import {useController} from "@package/util";
import {ArmoriesViewController} from "../controller/ArmoriesViewController";
import { InforView } from './InforView';
import { AvatarView } from './AvatarView';
import styled from 'styled-components';
import { Button } from '@/package/component';

export const ArmoriesView = () => {

    const { id,allData,
        // armoryData,armoriesProfiles 
    }=useController(ArmoriesViewController)

    // useEffect(() => {
    //     if (allData) {
    //         console.log(allData);
    //     } else {
    //         console.log('Data is undefined');
    //     }
    // }, [allData]);

    console.log('111???',allData)

    return (
        <div>
            
            <ViewWrap>
                <div className='avatarSec'>
                    <AvatarView data={allData?.ArmoryProfile ?? undefined}/>
                </div>
                <div className='infoSec'>
                    <div className="infoSec--tab">
                        <Button style={{padding:'5px 10px'}}>장비</Button>
                        <Button style={{padding:'5px 10px'}}>장비</Button>
                    </div>
                    <div className="infoSec--id">{id}</div>
                    <InforView data={allData?.ArmoryEquipment ?? undefined}/>
                </div>
            </ViewWrap>
        
        </div>
    );
};

const ViewWrap= styled.div`
    position:relative;
    width:100%;
    .avatarSec{
        width:100%;
    }
    .infoSec{
        &--id{
            font-size:18px;
            font-weight:600;
            margin-bottom:10px;
        }
        &--tab{
            display:flex;
            align-items:flex-start;
            justify-content:flex-start;
            gap:10px;
            margin-bottom:30px;
            button{
                color:var(--txt-colorA);
            }
        }
        width:60%;
        position:absolute;
        right:0%;
        top:0;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        // top:50%;
        // transform:translateY(-50%);
    }
`