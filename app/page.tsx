import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Winners Baptist Church, Bariga - Home',
  description:
    'Winners Baptist Church, Bariga - Join us Sundays at 8:00 AM at Miracle Square. A bible believing church committed to raising a godly generation.',
};

export default function Home() {
  return <HomeClient />;
}
