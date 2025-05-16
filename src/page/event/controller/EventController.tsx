import noticeApi from '@/package/api/api.notice';
import { IColumn } from '@/package/component/ListView/ListView.type';
import { dateFormat } from '@/package/util';
import { useSuspenseQuery } from '@tanstack/react-query';

export const EventController = () => {

    const {data:eventData }=useSuspenseQuery({
        queryFn: async ()=> await noticeApi.eventList() ?? 'error' ,
        queryKey:["type"]
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

    return {
        eventData,
        columns

    }
};
