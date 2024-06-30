import {useState, useEffect} from 'react';
import axios from 'axios';
export default function createTask(props) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState(false);
    const [priority, setPriority] = useState(false);
    async function create() {
        const userId = JSON.parse(localStorage.getItem('userId'));
        try {
            const response = await axios.post(props.url, {name: title, description, status, priority, userId});
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheckboxChange = (event) => {
      setPriority(event.target.checked);
    };
  
    return(
        <div className="w-[30rem] h-[30rem] p-[2rem] bg-layer rounded-2xl m-[1rem] flex flex-wrap justify-center text-white absolute shadow-3xl">
            <h1 className="text-2xl">{props.title}</h1>
            <li className="list-none">
                <label htmlFor="title" className="text-xl">Title</label>
                <input type="text" placeholder="Input Your Task Title" id="title" className="w-[25rem] h-[2rem] rounded-lg bg-card my-[0.5rem]" onChange={(e)=> {
                    setTitle(e.target.value)
                }}/>
            </li>
            <li className="list-none">
                <label htmlFor="description" className="text-xl">Description</label>
                <input type="text" placeholder="Input Your Task Description" id="description" className="w-[25rem] h-[10rem] rounded-xl bg-card my-[0.5rem]"  onChange={ (e)=> {
                    setDescription(e.target.value)
                }}/>
            </li>
            <li className='list-none w-[25rem] flex justify-center gap-[1rem] text-xl items-center'>
                <input type="checkbox" id="priority" value="true" className='w-[1.5rem] h-[1.5rem] rounded-md bg-card ' checked={priority} onChange={handleCheckboxChange}/>
                <label htmlFor="priority">Important Task</label>
            </li>
            <button className="w-[10rem] h-[3rem] rounded-xl bg-green my-[0.5rem]" onClick={create}>{props.action}</button>
        </div>
    )
}