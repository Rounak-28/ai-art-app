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
    <div className="bg-[#171a24] text-white flex flex-col space-y-4 items-center h-screen pt-6">
      <span className="text-2xl">Generate art using AI</span>
      <div className="w-[70vw] h-[500px] flex">
        <div className="flex flex-col justify-center w-[50%] space-y-4">

        <textarea
          className="w-[90%] mx-auto my-4 py-3 h-60 bg-[#171717] outline-none border-[1px] border-[#b8b6b668] px-3 resize-none"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your prompt..."
          />
        <button className="bg-blue-800 w-28 mx-auto py-2 px-4" onClick={handleClick}>
          Generate
        </button>
          </div>
        <div className="w-[50%] border-[1px] border-[#b8b6b668] bg-[#171717] flex justify-center items-center">
          {data?.output ? (
            <Image
              src={data?.output[0]}
              width={1000}
              height={1000}
              className="w-full h-full"
              alt=""
            ></Image>
          )
        :
        <p>Generated Image will come here</p>
        }
        </div>
      </div>
    </div>
  );
};

export default generate;
