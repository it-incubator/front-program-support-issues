

....
const todolists = useSelector(todolistsSelector)
const tasks = useSelector(tasksSelector)

const dispatch = useAppDispatch()

useEffect(()=>{
    todolistsApi.getTodolists().then(res=>{
            dispatch(getTodolists({todolists: res.data}))
        todolists.forEach(todolist=>{  //<<<<<< не будет работать потому что на момент запроса юз эффект хранит старое состояние тудулистов которое []
                dispatch(getTasks(todolist.id))
            })
        }
    )
},[])
....