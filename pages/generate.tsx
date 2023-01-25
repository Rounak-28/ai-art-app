import Image from "next/image";
import { useState } from "react";

const generate = () => {
  const [text, setText]: any = useState();
  const [data, setData]: any = useState();

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const handleClick = async () => {
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: text,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      console.log(prediction.detail);
      return;
    }
    setData(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch(`/api/predictions/${prediction?.id}`);
      prediction = await response.json();
      if (response.status !== 200) {
        console.log(prediction.detail);
        return;
      }
      console.log(prediction);
      setData(prediction);
    }
  };
  return (
    <div className="bg-[#171a24] text-white flex flex-col space-y-4 justify-center items-center h-screen">
      <input
        type="text"
        className="w-96 h-20 bg-[#110f1a] outline-none border-[1px] border-[#b8b6b668]"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-800 py-2 px-4" onClick={handleClick}>
        try
      </button>
      <div className="w-[500px] h-[500px] border-[1px] border-[#b8b6b668] bg-[#111317]">
        {data?.output && (
          <Image src={data?.output[0]} width={100} height={100} alt=""></Image>
        )}
      </div>
    </div>
  );
};

export default generate;
