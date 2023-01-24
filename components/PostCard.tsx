import Image from "next/image";
import { BsHeart } from "react-icons/bs";

const PostCard = ({ img }: any) => {
  return (
    <div className="py-2 rounded-lg w-fit mx-auto cursor-pointer relative group">
      <Image
        src={`/images/${img}.png`}
        width={400}
        height={400}
        alt=""
        className="rounded-lg hover:brightness-[.30]"
      />
      <div className="top w-full absolute top-0 p-4 hidden group-hover:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="avatar w-9 h-9 bg-blue-700 rounded-sm cursor-pointer"></div>
            <span className="font-semibold">RNK Kumbh</span>
          </div>
          <BsHeart className="text-2xl" />
        </div>
      </div>
      <p className="prompt absolute bottom-0 p-4 hidden group-hover:block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        corporis nesciunt maxime! Ab dictaus.
      </p>
    </div>
  );
};

export default PostCard;
