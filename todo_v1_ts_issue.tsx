import './App.css'
import {useState} from 'react'
import {v1} from 'uuid'
import {TodolistItem} from './TodolistItem'

export type Task = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {
    const [filter, setFilter] = useState<FilterValues>('all')

    const [tasks, setTasks] = useState<Task[]>([
        { id: v1() as string, title: 'HTML&CSS', isDone: true }, //=<<<<<<<<<<После обновления либы иногда пишет некоректны возвращаемый стиль для в1()
        { id: v1()  as string, title: 'JS', isDone: true },
        { id: v1()  as string, title: 'ReactJS', isDone: false }
    ])

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        const newState = tasks.map(t => t.id == taskId ? { ...t, isDone } : t)
        setTasks(newState)
    }

    const deleteTask = (taskId: string) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    const changeFilter = (filter: FilterValues) => {
        setFilter(filter)
    }

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }

    const createTask = (title: string) => {
        const newTask = {id: v1()  as string, title, isDone: false}
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    return (
        <div className="app">
            <TodolistItem title="What to learn"
                          tasks={filteredTasks}
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}
                          createTask={createTask}
                          changeTaskStatus={changeTaskStatus}/>
        </div>
    )
}