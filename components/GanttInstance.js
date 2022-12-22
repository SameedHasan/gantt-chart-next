import dynamic from 'next/dynamic';
import { ganttConfig } from '../ganttConfig.js';

const Gantt = dynamic(() => import('./Gantt.js'), {
  ssr: false,
  loading: () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <p>Loading...</p>
      </div>
    );
  },
});

const GanttInstance = () => {
  return (
    <>
      <Gantt
        {...ganttConfig}
        // other props
      />
    </>
  );
};

export { GanttInstance };
