import { useController } from '@/package/util';
import React from 'react';
import {MainController} from "@src/page/main";
import { ListView } from '@/package/component';

export const Notice = () => {

    const { noticeData,alarmsData, columns } =useController(MainController)


    return (
        <div>
            <ListView
                columns={columns}
                data={noticeData}
                // state={state}
                // setState={setState}
            />
        </div>
    );
};

