import React,{useEffect} from 'react';
import {useController} from "@package/util";
import {ArmoriesViewController} from "../controller/ArmoriesViewController";
import { InforView } from './InforView';
import { AvatarView } from './AvatarView';
import styled from 'styled-components';

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

    console.log('???',allData)

    return (
        <div>
            
            <ViewWrap>
                <div className='avatarSec'>
                    <AvatarView data={allData?.armoryProfile ?? undefined}/>
                </div>
                <div className='infoSec'>
                    <div className="infoSec--id">{id}</div>
                    <InforView data={allData?.armoryEquipment ?? undefined}/>
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
        width:60%;
        position:absolute;
        right:0%;
        top:50%;
        transform:translateY(-50%);
    }
`