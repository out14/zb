import React from 'react';
import { Equip,Ark  } from '@/package/util';
import ItemGrade from '@/package/util/code/enum/code.grade'
import { Block } from '@/package/component';
import styled from 'styled-components';

export const AvatarView = ({
    dataAvatar,
}:{
    dataAvatar?:any[],
}) => {
    const Order = ['무기 아바타','머리 아바타','상의 아바타','하의 아바타','얼굴1 아바타','얼굴2 아바타','악기 아바타','이동 효과']
    const DataSort = dataAvatar?.sort((a, b) => {
        const indexA = Order.indexOf(a.Type);
        const indexB = Order.indexOf(b.Type);
        return indexA - indexB;
      });
    const IsInner = DataSort?.filter((e)=>e.IsInner)
    const IsNotInner = DataSort?.filter((e)=>!e.IsInner)
    
    return (
        <>
            <List>
                <Col>
                    
                    {IsInner?.map((e) => {
                        const gradeColor = ItemGrade?.find((i) => i[e.Grade])?.[e.Grade] || "#fff";
                        return <Block data={e} imgBg={gradeColor} />;
                    })}    
                </Col>
                <Col>
                    
                    {IsNotInner?.map((e) => {
                        const gradeColor = ItemGrade?.find((i) => i[e.Grade])?.[e.Grade] || "#fff";
                        return <Block data={e} imgBg={gradeColor} />;
                    })}    
                </Col>
            </List>
        </>
    );
};


const List = styled.div`
    
    width:95%;
    margin-right:auto;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    // flex:1;
    gap:10px;

`

const Col= styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
    
`