import { ListView } from '@/package/component';
import { useController } from '@/package/util';
import React from 'react';
import { EventController } from '@src/page/event/controller/EventController';

export const Event = () => {

    const { eventData, columns} = useController( EventController )

    return (
        <div>
            <ListView
                columns={columns}
                data={eventData}
                // state={state}
                // setState={setState}
            />
        </div>
    );
};

