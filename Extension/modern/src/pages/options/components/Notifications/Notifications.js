import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import rootStore from '../../stores';
import { Notification } from './Notification';

import './notifications.pcss';

export const Notifications = observer(() => {
    const { uiStore } = useContext(rootStore);

    const { notifications } = uiStore;

    if (notifications.length === 0) {
        return;
    }

    // eslint-disable-next-line consistent-return
    return (
        <div className="notifications">
            {notifications.map((notification) => {
                const { id, description, title } = notification;
                return (
                    <Notification
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                    />
                );
            })}
        </div>
    );
});
