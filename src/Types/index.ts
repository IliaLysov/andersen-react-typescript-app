interface Reducers {
    setUser?: (name: string) => void,
    deleteTask?: (number: number) => void,
    changeStatus?: (index: number) => void,
    addTask?: (name: string) => void,
    editTask?: (index: number, task: string) => void
}

export interface TaskObject {
    task: string,
    status: boolean
}

export interface AboutPageProps {
    name: string,
    tasks: [TaskObject],
    date: string
}

export interface TodoPageProps {
    tasks: [TaskObject],
}

export interface AuthPageProps {
    name: string
}

export interface ItemProps extends Reducers {
    taskObj: TaskObject,
    index: number
}

export interface InputProps extends Reducers {
    defaultValue?: string,
    placeholder?: string,
    type: 'add' | 'edit' | 'user',
    index?: number,
    name: string
}

export interface HeaderProps {
    name: string,
    tasks: [TaskObject]
}