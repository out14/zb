import { useState} from 'react';
import {useController} from "@package/util";
import {ArmoriesViewController} from "../controller/ArmoriesViewController";
import { InforView, CharacterView, AvatarView, SkillView } from '.';
import styled from 'styled-components';
import { Button } from '@/package/component';
import { Card } from '@package/component/Card/Card';
import ItemGrade from '@/package/util/code/enum/code.grade';
// import { filter } from '../../../../../node_modules/rxjs/src/internal/operators/filter';


export const ArmoriesView = () => {

    const { id,allData,}=useController(ArmoriesViewController)
    
    return ( 
        allData?<IsData allData={allData} id={id}/>
        :<NoneData/>
    );
};

const IsData =({allData,id}:{allData:any, id:any})=>{

    const [ tab, setTab ]=useState('장비')
    const HandleTab = (e:string) =>{
        setTab(e)
    }
    const ArkTab = [ '깨달음','진화','도약' ]
    const dataArkPassive = allData?.ArkPassive

    console.log('?',ItemGrade)

    return (
        <div>


            
            <ViewWrap>
                <div className='avatarSec'>
                    <CharacterView data={allData?.ArmoryProfile ?? undefined}/>
                </div>
                <div className='infoSec'>
                    <div className="infoSec--tab">
                        <Button.InShadow 
                            style={{padding:'5px 10px'}}
                            onClick={()=>HandleTab('장비')}
                            color='var(--primary-color)'
                        >
                            <p style={{
                                color:tab==='장비'?'var(--primary-color)':'var(--txt-colorA)'
                            }}>장비</p>
                        </Button.InShadow >
                        <Button.InShadow  
                            style={{padding:'5px 10px'}}
                            onClick={()=>HandleTab('아바타')}
                        >
                            <p style={{
                                color:tab==='아바타'?'var(--primary-color)':'var(--txt-colorA)'
                            }}>
                            아바타</p>
                        </Button.InShadow>
                        <Button.InShadow  
                            style={{padding:'5px 10px'}}
                            onClick={()=>HandleTab('스킬')}
                        >
                            <p style={{
                                color:tab==='스킬'?'var(--primary-color)':'var(--txt-colorA)'
                            }}>
                            스킬</p>
                        </Button.InShadow>
                    </div>
                    <div className="infoSec--id">{id}</div>
                    {tab==='장비'&&
                        <InforView dataEquip={allData?.ArmoryEquipment ?? undefined}/>
                    }
                    {tab==='아바타'&&
                        <AvatarView dataAvatar={allData?.ArmoryAvatars}/>
                    }
                    {tab==='스킬'&&
                        <SkillView dataAvatar={allData?.ArmorySkills.filter((i:{Level:number})=>i.Level >1)}/>
                    }
                </div>
            </ViewWrap>
            <MoreInfo>
                <div>
                    <div>보석 &nbsp;
                        <strong  
                            dangerouslySetInnerHTML={{__html:allData?.ArmoryGem.Effects.Description}}
                        ></strong>
                    </div>
                    <div className="moreInfo--gem">
                        <ul className="moreInfo--gem--list">
                            {allData?.ArmoryGem?.Gems ? 
                                allData?.ArmoryGem?.Gems.map((e: { Icon: string; Grade: string; Level: number; Slot: number }) => {
                                // Gem의 등급 색상 가져오기
                                const gradeColor = ItemGrade?.find((i) => i[e.Grade])?.[e.Grade] || "#fff";

                                // Slot에 해당하는 Skill 정보 찾기
                                const skillInfo = allData?.ArmoryGem?.Effects?.Skills?.find((i) => i.GemSlot === e.Slot);

                                    return (
                                        <li key={e.Slot}>
                                            <div className="gem--box" style={{ background: gradeColor }}>
                                                <img src={e.Icon} alt="" />
                                                <div className="gem--level">{e.Level}</div>
                                            </div>
                                            <div className="gem--pop">
                                                <Card>
                                                    <div className="gem--pop--inner">
                                                        <div className="gem--pop--inner--img">
                                                            {skillInfo && <img src={skillInfo.Icon} alt={skillInfo.Name} />}
                                                        </div>
                                                        <div className="gem--pop--inner--txt">
                                                            {skillInfo ? (
                                                                <>
                                                                    <h3>{skillInfo.Name}</h3>
                                                                    <p>{skillInfo.Option}</p>
                                                                    <p>{skillInfo.Description}</p>
                                                                </>
                                                            ) : (
                                                                <p>Skill information not available.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Card>
                                            </div>
                                        </li>
                                    );
                                })
                                :  <Card.Wrap>
                                        <Card> 
                                            <div style={{padding:'0 20px'}}>보석을 착용하지 않았습니다.</div>
                                        </Card>
                                   </Card.Wrap>
                             }
                        </ul>
                    </div>
                </div>
            </MoreInfo>
            <MoreInfo>
                <div className="moreInfo--stats">
                    <div>스텟</div>
                    <Card>
                        <div className="moreInfo--card">
                            {allData?.ArmoryProfile?.Stats?.map((e:{Type:string,Value:number})=>
                                <dl>
                                    <dt>{e.Type}</dt>
                                    <dd>{e.Value}</dd>    
                                </dl>
                            )}
                        </div>  
                    </Card>
                    <Card>
                        <div className="moreInfo--card">
                            {allData?.ArmoryProfile?.Tendencies?.map((e:{Type:string,Point:number})=>
                                    <dl>
                                        <dt>{e.Type}</dt>
                                        <dd>{e.Point}</dd>    
                                    </dl>
                            )}
                        </div>
                    </Card>
                </div> 
                <div className="moreInfo--engraving">
                    <div>각인</div>
                    <Card>
                        <div className="moreInfo--card">
                            {allData?.ArmoryEngraving?.ArkPassiveEffects?.map((e:{Grade:number,Name:string,Level:number})=>
                                <dl>
                                    <dt style={{background:ItemGrade.find((i) => i[e.Grade])?.[e.Grade] || "#fff"}}>{e.Level}</dt>
                                    <dd> {e.Name}</dd>
                                </dl>
                            )}
                        </div>
                    </Card>
                </div>
                <div className='moreInfo--ark'>
                    <div>아크 패시브</div>
                    <Card>
                        <div className="moreInfo--card">
                            <ul className='moreInfo--ark--point'>
                                {allData?.ArkPassive.Points.map((e:{Name:string,Value:number})=>
                                    <li>
                                        <h3>{e.Name}</h3>
                                        <p>{e.Value}</p>
                                    </li>    
                                )}
                            </ul>
                        </div>
                    </Card>
                    <Card>
                        {allData?.ArkPassive.IsArkPassive&&
                            <div className="moreInfo--card">
                                {ArkTab.map((w)=>
                                    <dl>
                                        <dt>{w}</dt>
                                        {dataArkPassive?.Effects.filter((e)=>e.Name===w).map((i,index)=>
                                            {
                                                const realizeData = dataArkPassive?.Effects.filter((e)=>e.Name===w)[index].Description ||'';

                                                const removeElement = (html: string, targetText: string) => {
                                                    const parser = new DOMParser();
                                                    const doc = parser.parseFromString(html, 'text/html');
                                                    const fontElements = doc.querySelectorAll('font');
                                            
                                                    fontElements.forEach((el) => {
                                                        if (el.textContent === targetText) {
                                                            el.remove(); // "깨달음"에 해당하는 font 태그 제거
                                                        }
                                                    });
                                            
                                                    return doc.body.innerHTML;
                                                };
                                            
                                                const cleanedHTML = removeElement(realizeData, w);

                                                return  <dd> 
                                                    <div className="arkIcon">
                                                        <img src={i.Icon} alt="" />
                                                    </div> 
                                                    <div className="arkTxt" dangerouslySetInnerHTML={{__html:cleanedHTML}}></div>    
                                                </dd>  
                                            }
                                        )}
                                    </dl>    
                                )}
                            </div>
                        }   
                    </Card>
                </div>
            </MoreInfo>        
        </div>


    )

}

const NoneData =()=>{

    return(
        <div>존재하지않은 캐릭터 명입니다,</div>
    )
}

const ViewWrap= styled.div`
    position:relative;
    width:100%;
    background:var(--white-color);
    border-radius:10px;
    .avatarSec{
        width:40%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
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
        height:100%;
        min-height:500px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        margin-left:auto;
        padding:20px;
        box-sizing:border-box;
        // top:50%;
        // transform:translateY(-50%);
    }
`

const MoreInfo = styled.div`
    display:flex;
    gap:20px;
    margin-top:20px;
    .moreInfo{
        &--card{ 
            padding:0 20px; 
            display:flex;
            flex-direction:column;
            gap:5px;
        }
        &--gem{
            &--list{
                display:flex;
                align-items:flex-start;
                justify-content:flex-start;
                gap:4px;
                margin-top:10px;
                li{
                    width:60px;
                    height:60px;
                    border-radius:10px;
                    background:var(--white-color);
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    position:relative;
                    &:hover{
                        .gem--pop{ display:block; }
                    }
                    .gem{
                        &--box{
                            position:relative;
                            width:54px;
                            height:54px;
                            border-radius:7px;
                            cursor:pointer;
                            &::after{
                                content:'';
                                width:100%;
                                height:100%;
                                background: linear-gradient(45deg,rgba(0,0,0,0.4), rgba(255,255,255,0.2));
                                display:block;
                                position:absolute;
                                left:0;
                                top:0;
                                border-radius:7px;
                            }
                            img{
                                width:90%;
                                position:absolute;
                                z-index:2;
                                left:5%;
                                top:5%;
                            }
                        }
                        &--level{
                            position:absolute;
                            width:16px;
                            height:16px;
                            font-size:14px;
                            left:-5px;
                            top:-5px;
                            background:var(--white-color);
                            color:var(--text-colorA);
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            vertical-align:baseline;
                            border-radius:2px;
                        }    
                        &--pop{
                            display:none;
                            position:absolute;
                            left:0;
                            top:-150px;
                            width:250px;
                            // width:inner-contents;
                            z-index:4;
                            &--inner{
                                padding: 0 20px;
                                &--img{
                                    border-radius:10px;
                                    overflow:hidden;
                                    width:50px;
                                    height:50px;
                                    margin-bottom:10px;
                                    img{ 
                                        width:100% 
                                    }
                                }
                                &--txt{
                                    display:flex;
                                    flex-direction:column;
                                    gap:4px;
                                }
                            }
                        }
                    }
                }
            }
        }
        &--stats{
            flex-grow:1;
            display:flex;
            flex-direction:column;
            gap:10px;
            dl{
                display:flex;
                align-items:flex-start;
                justify-content:space-between;
            }
        }
        &--engraving{
            flex-grow:1;
            display:flex;
            flex-direction:column;
            gap:10px;
            dl{
                display:flex;
                align-items:center;
                justify-content:flex-start;
                gap:4px;
                dt{
                    border-radius:50%;
                    width:16px;
                    height:16px;
                    font-size:12px;
                    color:#fff;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    line-height:16px;
                }
            }
        
        }
        &--ark{
            flex-grow:2;
            display:flex;
            flex-direction:column;
            gap:10px;
            .moreInfo--card{ gap:30px; }
            dl{
                display:flex;
                flex-direction:column;
                gap:4px;
                dt{
                    margin-bottom:4px;
                }
                dd{
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    gap:8px;
                    .arkIcon{
                        width:20px;
                        height:20px;
                        border-radius:50%;
                        overflow:hidden;
                        img{
                            width:100%;
                        }
                    }
                    .arkTxt{
                        font-size:14px;
                        line-height:1;
                        vertical-align:baseline;
                    }
                }
            }
            &--point{
                display:flex;
                align-items:flex-start;
                justify-content:space-between;
                li{
                    h3{ 
                        text-align:center; 
                        font-weight:400;
                        margin-bottom:5px;
                    }
                    p{ 
                        text-align:center; 
                    }
                    &:nth-child(1){
                        h3{ color:#F1D594; }
                    }
                    &:nth-child(2){
                        h3{ color:#83E9FF; }
                    }
                    &:nth-child(3){
                        h3{ color:#C2EA55; }
                    }
                }
            }   
        }
        
    }

`
