import React from 'react';
import styled from 'styled-components';

export const CharacterView = ({data}:{data?:any}) => {

    return (
        <CharacterViewStyle>
            <div className="characterImg">
                <img src={data?.CharacterImage} alt="" />    
            </div>          
            <div className="characterInfo">
                <ul>
                    <li>서버 : {data?.ServerName}</li>
                    <li>원정대 레벨 : {data?.ExpeditionLevel}</li>
                    <li>아이템 레벨 : {data?.ItemAvgLevel}</li>
                    <li>길드 : {data?.GuildName? data?.GuildName+`<`+data?.GuildMemberGrade+`>` : '길드가 없습니다.'} </li>
                    <li>pvp : {data?.PvpGradeName}</li>
                    
                </ul>
            </div>
        </CharacterViewStyle>
    );
};

const CharacterViewStyle = styled.div`
    width:100%;
    //background:rgb(22,24,29);
    position:relative;
    height:100%;
    .character{
        &Img{
            min-width:300px;
            min-height:500px;
            width:100%;
            height:100%;
            background:rgb(22,24,29);
            border-radius:10px;
            overflow:hidden;
            box-sizing:border-box;
            mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0) 100%);
            display:flex;
            align-items:center;
            justify-content:center;
            img{
                width:100%;
                margin-bottom:100px;
                // mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0) 90%);
            }
        }
        &Info{
            position:absolute;
            bottom:5%;
            left:20px;
            // width:90%;
            width:calc(100% - 40px);
            padding:10px;
            box-sizing:border-box;
            background:var(--white-color);
            border-radius:10px;
            ul{
                li{
                    line-height:1.4;
                }
            }
        }    
    }

`
