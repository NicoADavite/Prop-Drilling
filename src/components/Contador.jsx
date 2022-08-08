import DisplayCount from "./DisplayCount";
import PlusButton from "./PlusButton";

const Contador = ({count, setCount}) => {
  return (
    <div>
        <DisplayCount count={count}/>
        <PlusButton count={count} setCount={setCount}/>
    </div>
  )
}

export default Contador