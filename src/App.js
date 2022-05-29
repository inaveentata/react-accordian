import React from "react";

import "./App.scss";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const data = [
  {
    id: 1,
    question: "Do I have to allow the user of coockies?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ullam facere amet fugiat possimus quos provident eius aut illo accusantium.",
  },
  {
    id: 2,
    question: "How do I change my page password?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ullam facere amet fugiat possimus quos provident eius aut illo accusantium.",
  },
  {
    id: 3,
    question: "How do I reset my password?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ullam facere amet fugiat possimus quos provident eius aut illo accusantium.",
  },
  {
    id: 4,
    question: "Is there any login limit for this page?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ullam facere amet fugiat possimus quos provident eius aut illo accusantium.",
  },
  {
    id: 5,
    question: "Do I recieve reset password link to my email?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ullam facere amet fugiat possimus quos provident eius aut illo accusantium.",
  },
];

function App() {
  return (
    <main>
      <div>
        <p className="title">Q {`&`} A about login</p>
        <div>
          {data.map((item) => (
            <Article key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}

const Article = ({ id, question, answer }) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <article>
      <div>
        <h4>{question}</h4>
        {toggle && <p>{answer}</p>}
      </div>
      <div className="div">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <AiOutlineMinusSquare></AiOutlineMinusSquare>
          ) : (
            <AiOutlinePlusSquare />
          )}
        </button>
      </div>
    </article>
  );
};

export default App;
