import * as React from "react";
import type { GetServerSidePropsResult } from "next";

interface Props {
  title: string;
}

function HomePage({ title }: Props): React.ReactNode {
  return <div>{title}</div>;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  return {
    props: {
      title: "christofer.dev",
    },
  };
}

export default HomePage;
