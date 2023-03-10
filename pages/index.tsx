import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import Head from "next/head";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="min-h-screen bg-[#15191e] text-white">
      <main className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-2 px-4">
        <PostCard img={1} />
        <PostCard img={2} />
        <PostCard img={3} />
        <PostCard img={4} />
        <PostCard img={5} />
        <PostCard img={6} />
        <PostCard img={7} />
        <PostCard img={8} />
        <PostCard img={9} />
        <PostCard img={10} />
        <PostCard img={11} />
        <PostCard img={12} />
      </main>
    </div>
  );
}
