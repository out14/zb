import React from 'react';
import styled from 'styled-components';

export const AvatarView = ({data}:{data?:any}) => {

    console.log(data,'ㅔㅔㅔ')

    return (
        <AvatarViewStyle>
            <div className="avatarImg">
                <img src={data?.CharacterImage} alt="" />    
            </div>          
            <div className="avatarInfo">
                <ul>
                    <li>서버 : {data?.ServerName}</li>
                    <li>원정대 레벨 : {data?.ExpeditionLevel}</li>
                    <li>아이템 레벨 : {data?.ItemAvgLevel}</li>
                    <li>길드 : {data?.GuildName} &lt; {data?.GuildMemberGrade} &gt; </li>
                    <li>pvp : {data?.PvpGradeName}</li>
                    
                </ul>
            </div>
        </AvatarViewStyle>
    );
};

const AvatarViewStyle = styled.div`
    width:100%;
    //background:rgb(22,24,29);
    background:var(--white-color);
    border-radius:10px;
    position:relative;
    .avatar{
        &Img{
            width:400px;
            min-height:500px;
            height:100%;
            background:rgb(22,24,29);
            border-radius:10px;
            overflow:hidden;
            box-sizing:border-box;
            mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0) 100%);
            img{
                width:100%;
                // mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0) 90%);
            }
        }
        &Info{
            position:absolute;
            bottom:5%;
            left:20px;
            // width:90%;
            width:35%;
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
