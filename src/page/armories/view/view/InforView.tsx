// import React from 'react';
import { Equip,Ark  } from '@/package/util';
import ItemGrade from '@/package/util/code/enum/code.grade'
import { Block } from '@/package/component';
import styled from 'styled-components';


export const InforView = ({
    dataEquip,
    // dataArkPassive
}:{
    dataEquip?:Equip[],
    dataArkPassive?:Ark
}) => {
    const Eq  = ['무기','투구','상의','하의','장갑','어깨']
    const EqList = dataEquip?.filter(e =>Eq.find(i=>i===e.Type ))
    const Acc = ['귀걸이','반지','팔찌','어빌리티 스톤']
    const AccList = dataEquip?.filter(e =>Acc.find(i=>i===e.Type ))
    

    return (
        <>
            <List>
                <Col>
                    {/* {EqList?.map((e=><Block data={e} imgBg={e.Grade==="고대"? "var(--grade5)":"var(--grade4)"}/> )) } */}
                    {EqList?.map((e) => {
                        const gradeColor = ItemGrade[e.Grade] || "#fff";
                        return <Block data={e} imgBg={gradeColor} />;
                    })}   
                </Col>
                <Col>
                    {/* {AccList?.map((e=><Block data={e} imgBg={e.Grade==="고대"? "var(--grade5)":"var(--grade4)"}/> )) }          */}
                    {AccList?.map((e) => {
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
// const ArkView = styled.div`
//     display:flex;
//     align-items:flex-start;
//     flex:1;
//     justify-content:space-between;
//     width:100%;
//     margin-top:20px;
//     dl{
        
//         display:flex;
//         flex-direction:column;
//         gap:4px;
//     }
// `