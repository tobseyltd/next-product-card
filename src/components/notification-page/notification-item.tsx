import { Image } from "@nextui-org/react";
import tw from "tailwind-styled-components";

interface Props {
  activity: string;
  media?: string | undefined;
  notificationSource?: string | undefined;
  privateMessage?: string | undefined;
  read: boolean;
  userName: string;
  userPic: string;
}

// Component Function //////////////////////////////////////////////////////////

const NotificationItem = ({
  activity,
  media,
  notificationSource,
  privateMessage,
  read,
  userName,
  userPic,
}: Props) => {
  return (
    <>
      <ItemContainer $read={read}>
        {/*User Image*/}
        <div className="mr-5">
          <Image src={userPic} width={50} height={50} alt="" />
        </div>

        {/*Username & Activity*/}
        <div className="w-full">
          <UserName>{userName}</UserName>
          <Activity>{activity}</Activity>

          {/* Link to Notification Source */}
          <NotificationSource $notification={notificationSource}>
            {notificationSource}
          </NotificationSource>

          {!read && <NotificationDot>&#x2022;</NotificationDot>}

          {/* Media Comment Image */}
          {media !== undefined && (
            <MediaBox>
              <Image src={media} width={30} height={30} alt="" />
            </MediaBox>
          )}

          {/* Time Stamp */}
          <div>
            <TimeStamp>1min ago</TimeStamp>
          </div>

          {/* Private Message Box */}
          {privateMessage !== undefined && (
            <PrivateMessageBox>
              <p className="leading-5">{privateMessage}</p>
            </PrivateMessageBox>
          )}
        </div>
      </ItemContainer>
    </>
  );
};

export default NotificationItem;

// Styled Tailwind Components /////////////////////////////////////////////////////

const ItemContainer = tw.div<ReadingProps>`
    ${(as) => !as.$read && "bg-light-grayish-blue"}
    h-max 
    flex 
    flex-row   
    rounded-lg
    mb-3
    p-3
`;

const UserName = tw.span`
    font-bold 
    mr-2
    hover:text-cool-blue/100
    hover:cursor-pointer
`;

const Activity = tw.span`
    text-black/60 
    mr-2
`;

const NotificationSource = tw.span<NotificationSourceProps>`
    ${(as) => as.$notification === undefined && "hidden"}
    font-bold 
    mr-2 
    text-black/50
    hover:text-cool-blue/100
    hover:cursor-pointer
`;

const TimeStamp = tw.span`
    text-black/50
`;

const NotificationDot = tw.span`
    text-2xl
    text-orange
`;

const PrivateMessageBox = tw.div`
    mt-3 
    p-5
    box-content 
    border-black/20 
    border 
    rounded-lg
    hover:bg-light-grayish-blue
    hover:border-white
    hover:cursor-pointer
`;

const MediaBox = tw.div`
    mt-2    
    float-right 
    hover:cursor-pointer
`;

// Conponent Interfaces ///////////////////////////////////////////////////////////////

interface ReadingProps {
  $read: boolean;
}

interface NotificationSourceProps {
  $notification: string | undefined;
}
