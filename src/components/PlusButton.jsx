const PlusButton = ({count, setCount}) => {

  const handleClick = ( ) => {

    setCount(count + 1);

    localStorage.setItem("count", (count + 1));
  }

  return (
    <button onClick={ handleClick }>Sumar 1</button>
  )
}

export default PlusButton