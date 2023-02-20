// export default function Btn(){

//   const clickHandler = () => console.log('clicked' + (setCount + 1) + count)

//   return(
//     <button
//       onClick={clickHandler}
//     > click </button>
//   )
// }

export default function Btn() {
  const clickHandler = () => console.log("clicked");

  return <button onMouseOver={clickHandler}> click </button>;
}
