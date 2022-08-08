const PlusButton = ({count, setCount}) => {
  return (
    <button onClick={ () => { setCount(count + 1) }}>Sumar 1</button>
  )
}

export default PlusButton