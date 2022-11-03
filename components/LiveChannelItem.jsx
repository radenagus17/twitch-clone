import Image from "next/image";

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
  return (
    <div className="p-2">
      <Image src={img} alt={profile_img} />
      <div className="flex pt-2">
        <div className="pr-2">
          <Image src={profile_img} alt={profile_img} width="60" height="60" className="rounded-full" quality={75} />
        </div>
        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm text-gray-500">{user}</p>
          <p className="text-sm text-gray-500">{game}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChannelItem;