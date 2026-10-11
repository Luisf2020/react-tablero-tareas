import { useCallback, useMemo, useState } from 'react';

let seq = 0;

export function useTasks(iniciales = []) {
  const [tasks, setTasks] = useState(iniciales);

  const add = useCallback((title) => {
    const limpio = String(title || '').trim();
    if (!limpio) return null;
    const task = { id: ++seq, title: limpio, done: false };
    setTasks((prev) => [task, ...prev]);
    return task;
  }, []);

  const toggle = useCallback((id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }, []);

  const remove = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const pending = useMemo(() => tasks.filter((t) => !t.done).length, [tasks]);

  return { tasks, add, toggle, remove, pending };
}
