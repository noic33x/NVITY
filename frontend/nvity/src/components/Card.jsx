export default function Card(props) {
    if (props.status == true) {
        return(
            <div className="w-[17rem] h-[13rem] bg-card rounded-2xl m-[1rem] flex flex-wrap justify-center items-center text-white">
                <h2 className="w-[16rem]">{props.title}</h2>
                <p className="w-[16rem]">{props.deskription}</p>
                <div className="text-sm w-[16rem] flex justify-between">
                    <button className="w-[5rem] h-[2rem] bg-green rounded-md" onClick={props.changeStatus}>{props.button}</button>
                    <ul>
                        <button  className="w-[3rem] h-[2rem] bg-orange rounded-md" onClick={props.taskEdit}>Edit</button>
                        <button  className="w-[3rem] h-[2rem] bg-red rounded-md mx-[0.5rem]" onClick={props.delete}>Delete</button>
                    </ul>
                </div>
            </div>
        )
    }else{
        return(
            <div className="w-[36rem] h-[25rem] tablet:w-[20rem] tablet:h-[15rem] desktop:w-[17rem] desktop:h-[13rem] bg-card rounded-2xl m-[1rem] flex flex-wrap justify-center items-center text-white">
                <strong><h2 className="w-[34rem] tablet:w-[18rem] desktop:w-[16rem]">{props.title}</h2></strong>
                <p className="w-[34rem] tablet:w-[18rem] desktop:w-[16rem]">{props.deskription}</p>
                <div className="w-[34rem] text-lg tablet:text-sm tablet:w-[18rem] desktop:w-[16rem] flex flex-wrap justify-between">
                    <button className="w-[7rem] h-[3rem] rounded-lg tablet:w-[5rem] tablet:h-[2rem] tablet:rounded-md desktop:w-[5rem] desktop:h-[2rem] bg-red desktop:rounded-md" onClick={props.changeStatus}>{props.button}</button>
                    <ul>
                        <button  className="w-[6rem] h-[3rem] rounded-lg tablet:w-[3rem] tablet:h-[2rem] tablet:rounded-md desktop:w-[3rem] desktop:h-[2rem] bg-orange desktop:rounded-md mx-[0.25rem]" onClick={props.taskEdit}>Edit</button>
                        <button  className="w-[6rem] h-[3rem] rounded-lg tablet:w-[3rem] tablet:h-[2rem] tablet:rounded-md desktop:w-[3rem] desktop:h-[2rem] bg-red desktop:rounded-md mx-[0.25rem]" onClick={props.delete}>Delete</button>
                    </ul>
                </div>
            </div>
        )
    }
}