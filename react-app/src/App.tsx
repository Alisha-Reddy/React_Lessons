// import ListGroup from "./ListGroup";

// function App() {
//   const list = ["Alisha", "Maneesh", "Avinash", "Anjali"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }
//   return (
//     <div>
//       <ListGroup list={list} heading="Names" onSelectItem={handleSelectItem} />
//     </div>
//   );
// }
import Alert from "./Alert"

function App() {
  return (
    <div><Alert children="Hello World!" /></div>
  );
}


export default App;
