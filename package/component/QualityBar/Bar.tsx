//import React from 'react';
import styled from 'styled-components';

export const Bar = ({num}:{num:number}) => {
    let qc = "var(--grade0)";

    var qulityColor = ()=>{
        if (num === 100) {
            qc = "var(--grade4)";
        } else if (num >= 90) {
            qc = "var(--grade3)";
        } else if (num >= 70) {
            qc = "var(--grade2)";
        } else if (num >= 40) {
            qc = "var(--grade1)";
        } else if (num >= 20) {
            qc = "var(--grade0)";
        }

        return qc
    }

    return (
        <BarStyle color={qulityColor()}>
            <div className="bar" style={{width:`${num}%`}}></div>
            <div className="count">{num}</div>
        </BarStyle>
    );
};

const BarStyle = styled.div<{color:string}>`
    width:100%;
    height:10px;
    line-height:1;
    display:flex;    
    align-items:center;
    justify-content:center;
    position:relative;
    background:var(--background-color);
    border-radius:5px;
    border:1px solid var(--background-color);
    box-sizing:border-box;
    overflow:hidden;
    .bar{
        position:absolute;
        left:0;
        height:100%;
        border-radius:5px;
        background:${(props)=>props.color};
    }
    .count{
        position:absolute;
        left:0;
        bottom:0;
        height:100%;
        width:100%;
        z-index:2;
        text-align:center;
        color:#fff;
        font-size:10px;
    }
`