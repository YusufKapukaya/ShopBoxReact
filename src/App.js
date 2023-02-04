import { useState } from 'react';
import Card from './components/card/Card';
import './App.css';

function App() {


  const [product, setProduct] = useState([{
    id: 1,
    title: "APPLE MacBook M2",
    image: "https://picsum.photos/id/0/5000/3333",
    info: "256 GB SSD 16 GB RAM",
    piece: 1,
  },
  {
    id: 2,
    title: "APPLE Iphone 14",
    image: "https://picsum.photos/id/1/5000/3333",
    info: "14 Pro Max 256 GB SDD",
    piece: 1,
  },
  {
    id: 3,
    title: "APPLE Watch",
    image: "https://picsum.photos/id/2/5000/3333",
    info: "Schwarz Armband eine tolle Uhr",
    piece: 1,
  },
  {

    id: 5,
    title: "APPLE TV",
    image: "https://picsum.photos/id/3/5000/3333",
    info: "Viele schöne tolle Filmen und Serien",
    piece: 1,
  },
  ]);

  const [box, setBox] = useState([]);
  return (
    <div className="App">
      <h1>REACT SHOPPEN BOX PROJEKT</h1>
      <h2>Die Waren</h2>
      <div className='elements'>
        {product.map((element, index) => {
          return (
            <Card className="card" onClick={() => {
              const arr = [...box];
              if (
                arr.findIndex((ind) => {
                  return element.id === ind.id;
                }) === -1
              ) {
                arr.push(element);
                setBox(arr);
              } else {
                arr.map((item) => {
                  if (item.id === element.id) {
                    return (element.piece++);
                  }
                  setBox(arr);
                });
              }
              console.log(box);

            }} key={index} title={element.title} info={element.info} image={element.image} />
          );
        })}
      </div>
      <div className='korb'>
        <h2>Ihr Korb</h2>
        <ul className='korb'>
          {box.map((element,index)=>{
            return <li>{element.title+"----->"+element.info+" Stück:  "}<b style={{fontSize:"24px",color:"yellow"}}>{element.piece}</b></li>
          })
          }
        </ul>
        {
          box.length>0 ?( <button onClick={()=>{
            setBox([]);
          }}>
          Waren Entfernen</button>) : (<h2>Einakuf Korb ist leer.</h2>)
        }
      </div>
    </div>
  );
}

export default App;
