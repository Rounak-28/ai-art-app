import { getProviders, signIn, useSession } from "next-auth/react";
import Router from "next/router";

export default function SignIn({ providers }: any) {
  const { data: session } = useSession();

  if (session) {
    Router.push("/");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[40vw] h-[40vh] border-2 border-emerald-500 flex flex-col justify-center items-center">
        {Object.values(providers).map((provider: any) => (
          <div
            key={provider.name}
            className="w-full h-full flex justify-center items-center"
          >
            <button
              className="w-[70%] h-14 bg-red-500"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
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
