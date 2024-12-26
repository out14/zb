import React from 'react';
import { Equip } from '@/package/util';
import { Block } from '@/package/component';
import styled from 'styled-components';

export const InforView = ({data}:{data?:Equip[]}) => {

    const Eq  = ['무기','투구','상의','하의','장갑','어깨']
    const EqList = data?.filter(e =>Eq.find(i=>i===e.type ))
    const Acc = ['귀걸이','반지','팔찌','어빌리티 스톤']
    const AccList = data?.filter(e =>Acc.find(i=>i===e.type ))

    return (
        <List>
            <Col>
                {EqList?.map((e=><Block data={e} /> )) }         
            </Col>
            <Col>
                {AccList?.map((e=><Block data={e} /> )) }         
            </Col>  
        </List>
    );
};


const List = styled.div`
    
    width:95%;
    margin-right:auto;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex:1;
    gap:10px;

`

const Col= styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
    
`