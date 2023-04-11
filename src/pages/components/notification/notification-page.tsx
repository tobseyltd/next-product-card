import tw from "tailwind-styled-components";
import NotificationItem from "@/components/notification-page/notification-item";
import { useState } from "react";

// Component Function //////////////////////////////////////////////////////////

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([
    {
      activity: "reacted to your recent post",
      notificationSource: "My first tournament today",
      userName: "Marc Webber",
      userPic: "/media/notification-page/avatar-mark-webber.webp",
      read: false,
    },

    {
      activity: "followed you",
      userName: "Angela Gray",
      userPic: "/media/notification-page/avatar-angela-gray.webp",
      read: false,
    },

    {
      activity: "has joined your group",
      notificationSource: "Chess Club",
      userName: "Jacob Thompson",
      userPic: "/media/notification-page/avatar-jacob-thompson.webp",
      read: false,
    },

    {
      activity: "sent you a private message",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few whees now and i'm already having lots of fun and improving my game",
      userName: "Rizky Hasanuddin",
      userPic: "/media/notification-page/avatar-rizky-hasanuddin.webp",
      read: true,
    },

    {
      activity: "commented on your picture",
      media: "/media/notification-page/image-chess.webp",
      userName: "Kimberly Smith",
      userPic: "/media/notification-page/avatar-kimberly-smith.webp",
      read: true,
    },

    {
      activity: "reacted to your recent post",
      notificationSource: "5 end-game strategies to increase your win rate",
      userName: "Nathan Peterson",
      userPic: "/media/notification-page/avatar-nathan-peterson.webp",
      read: true,
    },

    {
      activity: "has left the group",
      notificationSource: "Chess Club",
      userName: "Anna Kim",
      userPic: "/media/notification-page/avatar-anna-kim.webp",
      read: true,
    },
  ]);

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
