import { useSuspenseQuery, useQuery } from '@tanstack/react-query';
import noticeApi from "@package/api/api.notice";
import {contentApi} from "@package/api";
import {useContext} from "react";
import {dateFormat, ModalContext} from "@package/util";
import {ModalContent} from "@src/page/main";
import { IColumn } from '@/package/component';



export const MainController = () => {

    const { confirm,newModal,closeModal } = useContext(ModalContext);

    const {data:eventData }=useSuspenseQuery({
        queryFn: async ()=> await noticeApi.eventList() ?? 'error' ,
        queryKey:["type"]
    })

    const {data:noticeData }=useSuspenseQuery({
        queryFn: async ()=> await noticeApi.noticeList() ?? 'error' ,
        queryKey:["type"]
    })

    const {data:alarmsData }=useSuspenseQuery({
        queryFn: async ()=> await noticeApi.alarmsList() ?? 'error' ,
        queryKey:["type"]
    })

    // const { data:cadData } =useQuery({
    //     queryFn: async ()=> await contentApi.cad() ??'error',
    //     queryKey:["cad"]
    // })

    // const { data:cgrData } =useQuery({
    //     queryFn: async ()=> await contentApi.cgr() ??'error',
    //     queryKey:["cgr"]
    // })

    const {data:calendarData}=useSuspenseQuery({
        queryFn:async ()=> await contentApi.calendar() ??'error',
        queryKey:["calendar"]
    })

    const columns: IColumn<any>[] = [
        {
            key:'Title',
            title:'제목',
            render:(e)=> <a href={e.Link}>{e.Title}</a>,
        },
        {
            key:'StartDate',
            title:'이벤트 기간',
            width:240,
            render:(e)=> <div>
                {dateFormat(e.StartDate)} ~ {dateFormat(e.EndDate)}</div>

        }
       
    ]


    const handleModal = async (data:T) =>{
        await newModal({
            props:{
                // title:data.Name,
                // content:data.Description,
                title:data.name,
                content:<ModalContent data={data}/>,
                onClose:()=>closeModal(),
                onOk:()=>confirm()
            }
        })
    }

    // const copySchedule = JSON.parse(JSON.stringify([...calendarData])) as ICategory[]
    const copySchedule = JSON.parse(JSON.stringify([...calendarData]))?.map( (e)=>({
        ...e,
        StartDay:e?.StartTimes? e?.StartTimes[0] : ''
    } ))

    return {
        eventData,
        noticeData,
        alarmsData,
        // cadData,
        // cgrData,
        calendarData,
        copySchedule,
        handleModal,
        columns
    };
};

