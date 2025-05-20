// import React from 'react';
// import { Equip,Ark  } from '@/package/util';
import ItemGrade from '@/package/util/code/enum/code.grade'
import { Block } from '@/package/component';
import styled from 'styled-components';

export const SkillView = ({
    dataAvatar,
}:{
    dataAvatar?:any[],
}) => {

    console.log('룬룬',dataAvatar,'ItemGrade',ItemGrade)
    
    return (
        <>
            <List>
                <Col>
                {/* const gradeColor = ItemGrade?.find((i) => i[e.Grade])?.[e.Grade] || "#fff"; */}
                    
                    {dataAvatar?.map((e) => {
                        const gradeColor = ItemGrade[e.Rune?.Grade] || "#fff";
                        //const gradeColor = "var(--grade5)";

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



