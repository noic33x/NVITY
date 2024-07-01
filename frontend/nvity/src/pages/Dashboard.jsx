import { useEffect, useState, } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Card from '../components/Card';
import CreateTask from '../components/CreateTask';
export default function Dashboard() {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [ids, setIds] = useState(false);
    useEffect(()=> {
        const loadTasks = async () => {
            const token = JSON.parse(localStorage.getItem('token'));
            const userId = JSON.parse(localStorage.getItem('userId'));

            if (!token) {
                alert('Login to Access this Page');
                location.href="/#/login";
              return;
            }
            try {
              const response = await axios.post(`http://localhost:3000/task`, {token, userId});
              setTasks(response.data);
            } catch (error) {
              console.error(error);
            }
          };
          loadTasks();
    }, [])
    async function deleteTask(id) {
        try {
            const response = await axios.post(`http://localhost:3000/task/delete/${id}`);
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    async function completeTask(id) {
        try {
            const response = await axios.post(`http://localhost:3000/task/completed/${id}`);
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    async function uncompleteTask(id) {
        try {
            const response = await axios.post(`http://localhost:3000/task/uncompleted/${id}`);
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    function showCreateTask() {
        setShow(true)
    }
    function editId(id) {
        setIds(id);
    }
    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
            return;
          }
          setEdit(true)
    }, [ids])
    return(
        <div className='w-screen h-screen bg-body flex justify-center flex-wrap desktop:flex desktop:justify-center desktop:items-center'>
            <Nav nav={[0,1,1,1]} />
            <div className='w-[38rem] h-[80vh] tablet:w-[45rem] tablet:h-[70vh] bg-layer rounded-xl flex flex-wrap desktop:m-[2rem] desktop:bg-layer desktop:w-[59rem] desktop:h-[90vh] desktop:rounded-2xl desktop:flex desktop:flex-wrap overflow-y-auto'>
                {tasks.map(tasks => {
                    if (tasks.status === true) {
                        return <Card key={tasks._id} title={tasks.name} deskription={tasks.description} button="Complete" changeStatus={()=> uncompleteTask(tasks._id)} delete={()=> deleteTask(tasks._id)} status={tasks.status} taskEdit={()=> editId(tasks._id)}/>
                    }else{
                        return <Card key={tasks._id} title={tasks.name} deskription={tasks.description} button="Uncomplete" changeStatus={()=> completeTask(tasks._id)}  delete={()=> deleteTask(tasks._id)} status={tasks.status} taskEdit={()=> editId(tasks._id)}/>
                    }
                })}
                <div className="w-[36rem] h-[25rem] tablet:w-[19.9rem] tablet:h-[14.9rem] desktop:w-[16.9rem] desktop:h-[12.9rem] bg-layer rounded-2xl m-[1rem] flex flex-wrap justify-center items-center text-center text-white border-4 border-[#181818]" onClick={showCreateTask}>
                    <h2 className='hidden tablet:text-4xl tablet:block desktop:text-4xl desktop:block mx-[5px]'>+</h2>
                    <h2 className='relative top-[3px] text-2xl tablet:text-lg desktop:text-lg'>Create New Task</h2>
                </div>
            </div>
            {show
            ? <CreateTask url='http://localhost:3000/task/add' title="Create New Task" action="Create"/> : <div></div>}
            {edit
            ?<CreateTask url={`http://localhost:3000/task/edit/${ids}`} title="Edit Task" action="Edit"/> : <div></div>}
        </div>
    )
}