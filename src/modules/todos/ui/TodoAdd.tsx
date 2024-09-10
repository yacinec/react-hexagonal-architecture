import { useTodoContext } from '@/context/TodoContext';
import { useState } from 'react'

export default function TodoAdd() {
    const [newTodoName, setNewTodoName] = useState<string>("");
    const { addTodo } = useTodoContext();

    const handleAddTodo = () => {
      addTodo(newTodoName);
      setNewTodoName('');
    };

    return (
        <div>
            <input type="text" value={newTodoName} onChange={(e) => setNewTodoName(e.target.value)} />
            <button onClick={handleAddTodo}>Add new task</button>
        </div>
    )
}
