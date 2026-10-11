import { useState } from 'react';
import { useTasks } from './useTasks.js';

export default function App() {
  const { tasks, add, toggle, remove, pending } = useTasks([]);
  const [texto, setTexto] = useState('');

  function enviar(e) {
    e.preventDefault();
    if (add(texto)) setTexto('');
  }

  return (
    <main className="board">
      <h1>Tablero de tareas</h1>
      <p className="meta">{pending} pendientes de {tasks.length}</p>

      <form onSubmit={enviar}>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Nueva tarea" />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span>{t.title}</span>
            </label>
            <button type="button" onClick={() => remove(t.id)} aria-label={`Eliminar ${t.title}`}>
              x
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
