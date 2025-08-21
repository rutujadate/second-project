import logo from './logo.svg';
import './App.css';

function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let num = [2, 3, 4, 5,6,7,8,9,10]
  return (
    <div>
      {num.map((singleElement) => {
        return <div>{arr.map((arrayElement) => {
          return singleElement * arrayElement + "  "

        })}
        </div>
      })}
    </div>
  );
}

export default App;
