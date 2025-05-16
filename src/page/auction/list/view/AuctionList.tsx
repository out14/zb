import {useController} from "@package/util";
import {AuctionListController} from "../controller/AuctionListController";
// import styled from "styled-components";


interface item{
    title:string,
    content:string,
    children?:item[]|null
}

export const AuctionList = () => {

    const {  } = useController(AuctionListController)

    const list:item[] = [ 
        {
            title:'제목1',
            content:'내용1',
            children:[
                {
                    title:'제목1-서브1',
                    content:'내용1-서브1',
                },
                {
                    title:'제목1-서브2',
                    content:'내용1-서브2',
                }
            ]
        },
        {
            title:'제목2',
            content:'내용2',
            children:[
                {
                    title:'제목2-서브1',
                    content:'내용2-서브1',
                },  
                {
                    title:'제목2-서브2',
                    content:'내용2-서브2',
                },                
                {
                    title:'제목2-서브3',
                    content:'내용2-서브3',
                },                
            ]
        }, 
        {
            title:'제목3',
            content:'내용3',
            children:null
        }, 
    ];

    

    return (
        <div>
            <MakeList data={list}/>
        </div>
    );
};

function MakeList({data}:{data:item[]}){

    console.log(data)
    return  ( 
       <div></div>
    )
}

