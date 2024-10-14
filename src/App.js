// import { useState } from "react";

// const messagess = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App(){
//    const [step, setStep]= useState(1);
//    const [isOpen, setIsOpen] = useState(true)

//   function handlePrevious(){
//     if(step>1) setStep(step -1)
//   }

//   function handleNext(){
//     if (step<3)setStep(step +1);
//   }

//   return(
//     <div>
//       <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
//    {isOpen && (
//     <div className="steps">
//       <div className="numbers">
//           <div className={step>=1 ? 'active':''}>1</div>
//           <div className={step>=2 ? 'active':''}>2</div>
//           <div className={step>=3 ? 'active':''}>3</div>
//       </div>
//       <p className="message">step {step}: {messagess[step-1]}
//         {/*test.name*/}
//       </p>

//       <div className="buttons">
//         <button
//         style={{backgroundColor: '#7950f2', color:'#fff'}}
//         onClick={()=>handlePrevious()}
//         >Previous</button>

//         <button style={{backgroundColor: '#7950f2', color:'#fff'}}
//         onClick={()=>handleNext()}
//         >Next</button>
//       </div>
//     </div>)}
//     </div>
//   );
// }

import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const date = new Date("October 14 2024");
  date.setDate(date.getDate() + count);
  return (
    <div style={{textAlign:"center"}}>
      <div>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was`}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
