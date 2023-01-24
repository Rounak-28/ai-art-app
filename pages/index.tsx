import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
 

  return (
    <div className="min-h-screen bg-[#15191e]">
      <main className="columns-4 gap-4 py-2 px-4">
        <PostCard img={1}/>
        <PostCard img={2}/>
        <PostCard img={3}/>
        <PostCard img={4}/>
        <PostCard img={5}/>
        <PostCard img={6}/>
        <PostCard img={7}/>
        <PostCard img={8}/>
        <PostCard img={9}/>
        <PostCard img={10}/>
        <PostCard img={11}/>
        <PostCard img={12}/>
      </main>
    </div>
  );
}
