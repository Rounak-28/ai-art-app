import Image from "next/image";

const PostCard = ({ img }: any) => {
  return (
    <div className="py-2 rounded-lg">
      <Image src={`/images/${img}.png`} width={400} height={400} alt="" className="rounded-lg" />
    </div>
  );
};

export default PostCard;
