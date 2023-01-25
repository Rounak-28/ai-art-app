import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn({ providers }: any) {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#15191e] text-white">
      <div className="w-[30vw] h-[500px] bg-black border-2">
        <div className="top w-full h-[150px] flex flex-col justify-center items-center border-b-2 space-y-3">
          <div className="logo w-10 sm:w-20 md:w-40 flex justify-center items-center text-2xl">
            LOGO
          </div>
          <p>Sign in to continue</p>
        </div>
        <div className="flex flex-col w-full h-[350px] justify-center items-center space-y-7">
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name} className="w-full flex">
              <button
               className="bg-red-400 w-[80%] h-14 mx-auto"
                onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
