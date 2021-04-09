import Head from 'next/head';
import { NextPage } from 'next';
import Nav from '../components/nav';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Nav />
      <div className="py-40">
      <h1 className="text-5xl text-center text-accent-1">
        Next.JS + Tailwind Css
      </h1>
      </div>
    </div>
  );
}

export default IndexPage; 