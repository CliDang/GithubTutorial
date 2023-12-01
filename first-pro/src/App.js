import "./App.css";
import ChiTieuItem from "./components/ChiTieuItem";

function App() {
  const expense = [
    {
      id: "0",
      title: "Bốn cây súng",
      cost: "$400",
      date: new Date(2023, 10, 30),
    },
    {
      id: "1",
      title: "Năm cây súng",
      cost: "$500",
      date: new Date(2023, 10, 29),
    },
    {
      id: "2",
      title: "Sáu cây súng",
      cost: "$600",
      date: new Date(2023, 10, 22),
    },
  ];

  return (
    <div className="App">
        <ChiTieuItem
          title={expense[0].title}
          cost={expense[0].cost}
          date={expense[0].date}
        ></ChiTieuItem>
        <ChiTieuItem
          title={expense[1].title}
          cost={expense[1].cost}
          date={expense[1].date}
        ></ChiTieuItem>
        <ChiTieuItem
          title={expense[2].title}
          cost={expense[2].cost}
          date={expense[2].date}
        ></ChiTieuItem>
    </div>
  );
}

export default App;
