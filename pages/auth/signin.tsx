import { getProviders, signIn, useSession } from "next-auth/react";
import Router from "next/router";

export default function SignIn({ providers }: any) {
  const { data: session } = useSession();

  if (session) {
    Router.push("/");
  }

  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
