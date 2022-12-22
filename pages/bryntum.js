import Head from 'next/head';
import { GanttInstance } from '../components/GanttInstance';
import '@bryntum/gantt/gantt.stockholm.css';

export default function BryntumGanttPage() {
  return (
    <div className="container">
      <Head>
        <title>
          Creating a Gantt chart with React using Next.js and Bryntum
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GanttInstance></GanttInstance>
      <style jsx>{`
        .container {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
