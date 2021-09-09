import React from "react";
import { Form, Input, Button, Divider, Layout } from 'antd';
import Header from './Header';
import Sidebar from './Sidebar';

    function Todo({ todo}) {
    return (
        <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
        {todo.text}
        <div>
        </div>
        </div>
    );
    }

        function TodoForm({ addTodo }) {
        const [value, setValue] = React.useState("");
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            addTodo(value);
            setValue("");
        };

        return (
            <form onSubmit={handleSubmit}  style={{ textAlign: "center"}} >
            <Input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                style={{ width: 800 }}
            />
            </form>
        );
        }


        function Tested() {
        const [todos, setTodos] = React.useState(['']);
        const addTodo = text => {
            const newTodos = [...todos, { text }];
            setTodos(newTodos);
        };
        const removeTodo = index => {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
        };
  return (
      <>
        <Header/>
        <Layout>
            <Sidebar/>
            <Layout>
            <div className="app">
               <h1 style={{ textAlign: 'center' }} >To Do App</h1>
               <div className="todo-list">
                       <Form className="todoapp" style={{ textAlign: 'center' }}> 
                        {todos.map((todo, index) => (
                          <Todo
                            key={index}
                            index={index}
                            todo={todo}
                           />
                        ))}
                        </Form>
                       <TodoForm addTodo={addTodo} />
                       <Button onClick ={removeTodo} style={{ marginLeft : 265  }}>
                          Delete task
                       </Button>
              </div>
          </div>
          </Layout>
    </Layout>
    </>
  );
}

export default Tested;