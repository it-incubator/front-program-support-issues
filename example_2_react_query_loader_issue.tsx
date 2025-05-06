type Props = {
    todolist: DomainTodolist
}

export const Tasks = ({ todolist }: Props) => {
    const { id, filter, entityStatus } = todolist

    const [page, setPage] = useState(1)

    const { data: tasks, isLoading, isFetching, status } = useGetTasksQuery({ todolistId: id, params: { page } })

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoading) { //<= при первой отрисовке не будет срабатывать
            dispatch(setTasksLoading(isFetching))// <= все остальные отрисовки показываем крутилку
        }
    }, [isFetching, isLoading, dispatch])

    console.log({ isLoading, isFetching, status })

    let filteredForTasks = tasks?.items

    if (filter === "active") {
        filteredForTasks = filteredForTasks?.filter((el) => el.status === TaskStatus.New)
    }
    if (filter === "completed") {
        filteredForTasks = filteredForTasks?.filter((el) => el.status === TaskStatus.Completed)
    }

    if (isLoading) {
        return <TasksSkeleton />
    }

    return (
        <div>
            {isFetching && <LinearProgress />}
            {filteredForTasks?.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <>
                    <List>
                        {filteredForTasks?.map((task) => (
                            <TaskItem
                                disabled={task.entityStatus === "loading"}
                                key={task.id}
                                task={task}
                                todolistId={id}
                                entityStatus={entityStatus}
                            />
                        ))}
                    </List>
                    <TasksPagination page={page} setPage={setPage} totalCount={tasks?.totalCount || 0} />
                </>
            )}
        </div>
    )
}