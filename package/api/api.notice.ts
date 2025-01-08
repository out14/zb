import axios from 'axios'

class NoticeApi{
    async noticeList(){
        //const res = await axios.get('/notice?type=')
        const res = await axios.get('/news/notices')

        return res?.data.data
    }

    async eventList(){
        const res = await axios.get('/news/events')

        return res?.data
    }


}

const noticeApi = new NoticeApi();

export default noticeApi




