//import React from 'react';
//import { TypeGrade  } from '@/package/util';
import ItemGrade from '@/package/util/code/enum/code.grade'
import { Block } from '@/package/component';
import styled from 'styled-components';
// import { typeGrade } from '@/package/util/type/type';

export const AvatarView = ({
    dataAvatar,
}:{
    dataAvatar?:{
        Grade: string, 
        Icon: string,
        IsInner: boolean,
        IsSet: boolean,
        Name: string,
        Tooltip: string,
        Type: string
    }[]
}) => {
    const Order = ['무기 아바타','머리 아바타','상의 아바타','하의 아바타','얼굴1 아바타','얼굴2 아바타','악기 아바타','이동 효과']
    const DataSort = dataAvatar?.sort((a, b) => {
        const indexA = Order.indexOf(a.Type);
        const indexB = Order.indexOf(b.Type);
        return indexA - indexB;
      });
    const IsInner = DataSort?.filter((e)=>e.IsInner)
    const IsNotInner = DataSort?.filter((e)=>!e.IsInner)

    console.log("이이잉??",dataAvatar )
    
    return (
        <>
            <List>
                <Col>
                    
                    {IsInner?.map((e) => {
                        // const gradeColor = ItemGrade?.find((i:string) => i[e.Grade])?.[e.Grade] || "#fff";
                        const gradeColor = ItemGrade[e.Grade] || "#fff";
                        
                        return <Block data={e} imgBg={gradeColor} />;
                    })}    
                </Col>
                <Col>
                    
                    {IsNotInner?.map((e) => {
                        //const gradeColor = ItemGrade?.find((i:string) => i[e.Grade])?.[e.Grade] || "#fff";
                        const gradeColor = ItemGrade[e.Grade] || "#fff";
                        
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