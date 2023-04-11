import tw from "tailwind-styled-components";
import NotificationItem from "./notification-item";
import { useState } from "react";
import data from "./data";

// Component Function //////////////////////////////////////////////////////////

export default function NotificationPage() {
  const [notifications, setNotifications] = useState(data);

  const [count, setCount] = useState(0);

  const handleMarkReadClick = () => {
    setNotifications(
      notifications.map((notification) =>
        !notification.read ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <>
      <NotificationSection>
        <NotificationContainer>
          <NotificationHeader>
            <div className="items-center flex">
              <NotificationSpan>Notifications</NotificationSpan>
              <CountSpan>{count}</CountSpan>
            </div>

            <MarkReadSpan onClick={handleMarkReadClick}>
              Mark all as read
            </MarkReadSpan>
          </NotificationHeader>

          {notifications.map((notification) => (
            <NotificationItem
              key={notification.userName}
              activity={notification.activity}
              media={notification.media}
              notificationSource={notification.notificationSource}
              privateMessage={notification.privateMessage}
              userName={notification.userName}
              userPic={notification.userPic}
              read={notification.read}
            />
          ))}
        </NotificationContainer>
      </NotificationSection>
    </>
  );
}

// Styled Tailwind Components /////////////////////////////////////////////////////

const NotificationSection = tw.section`
    w-screen
    h-screen
    md:flex
    place-content-center
    md:px-32
    md:py-8
    bg-cream
`;

const NotificationContainer = tw.div`
    md:w-6/12 
    h-max
    grid
    grid-col-1
    p-10 
    bg-white 
    rounded-lg
`;

const NotificationHeader = tw.div`
    md:w-full
    inline-flex
    items-center 
    justify-between
    my-5
`;

const NotificationSpan = tw.span`
    text-2xl 
    font-bold 
    mr-3
`;

const CountSpan = tw.span`
    bg-blue-700 
    py-1 
    px-3 
    rounded-lg 
    text-white
    text-sm
`;

const MarkReadSpan = tw.span`
    float-right
    hover:cursor-pointer
    hover:bg-light-grayish-blue 
`;
