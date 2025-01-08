import { useSuspenseQuery, useQuery } from '@tanstack/react-query';
import noticeApi from "@package/api/api.notice";
import {contentApi} from "@package/api";
import {useContext} from "react";
import {ModalContext} from "@package/util";
import {ModalContent} from "@src/page/main";



export const MainController = () => {

    const { confirm,newModal,closeModal } = useContext(ModalContext);

    const {data:eventData }=useSuspenseQuery({
        queryFn: async ()=> await noticeApi.eventList() ?? 'error' ,
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
        // cadData,
        // cgrData,
        calendarData,
        copySchedule,
        handleModal
    };
};

