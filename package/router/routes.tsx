
// import {GuildList, GuildListController} from "@src/page/guild";
// import {AuctionList} from "@src/page/auction/list/view/AuctionList";
// import {AuctionListController} from "@src/page/auction/list/controller/AuctionListController";
import {Main,MainController} from "@src/page/main";
import {ArmoriesList, ArmoriesListController} from "@src/page/armories/list";
import {ArmoriesView, ArmoriesViewController} from "@src/page/armories/view";
import { Event, EventController } from '@src/page/event';
// import {IRouter} from "./RouterController";

export const routes=[
    {
        path: '/',
        title: '메인',
        element: <Main/>,
        controller: MainController,
        hideInMenu:true
    },
    {
        path: 'armories',
        title: '전투정보',
        element: <ArmoriesList/>,
        controller: ArmoriesListController,
        children:[
            {
                path: ':id',
                title: '전투정보 상세',
                hideInMenu:true,
                element: <ArmoriesView/>,
                controller: ArmoriesViewController,
            }
        ]
    },
    // {
    //     path: 'auction',
    //     title: '메뉴2',
    //     element: <AuctionList/>,
    //     controller: AuctionListController,
    //     /*children:[
    //         {
    //             path: 'list',
    //             title: '경매 리스트',
    //             element: <AuctionList/>,
    //             controller: AuctionListController,
    //         },
    //     ]*/
    // },
    {
        path: 'event',
        title: '이벤트',
        element: <Event/>,
        controller: EventController,
        /*children:[
            {
                path: 'list',
                title: '관리 목록',
                element: <GuildList/>,
                controller: GuildListController,
            }
        ]*/
    }
]



