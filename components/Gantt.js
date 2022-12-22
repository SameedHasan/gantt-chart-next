import { BryntumGantt } from '@bryntum/gantt-react';

export default function Gantt({ ganttRef, ...props }) {
  return <BryntumGantt {...props} ref={ganttRef} />;
}
