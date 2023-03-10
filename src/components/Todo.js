// IMPORTS -
import React, { useState } from "react";
import "../styles/Todo.css";
import todoImg from "../images/todo.png";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import { Input, Button } from "@chakra-ui/react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //   ADD HANDLER -
  const addHandler = (e) => {
    e.preventDefault();

    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  //   DELETE HANDLER -
  const deleteHandler = (idx) => {
    const updated__items = items.filter((item, id) => {
      return id !== idx;
    });
    setItems(updated__items);
  };

  //   REMOVE HANDLER -
  const removeAll = () => {
    setItems([]);
  };

  return (
    <div className="container-fluid wrapper">
      <div className="row row-wrapper">
        <div className="col-md col-wrapper">
          <div className="figure">
            <figure>
              <img src={todoImg} alt="todo" />
            </figure>
          </div>

          <div className="header">
            <h4>
              {" "}
              <AutoTyping
                active // <boolean>
                textRef="Todo list - welcome" // <string>
                writeSpeed={150} // <number>
                deleteSpeed={150} // <number>
                delayToWrite={1000} // <number>
                delayToDelete={2000} // <number>
              />
              <BlinkCursor
                active // <boolean>
                blinkSpeed={500} // <number>
              />
            </h4>
          </div>

          <div className="add__items">
            <Input
              placeholder="Add tasks"
              className="shadow-sm"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <Button
              colorScheme={"blue"}
              className="text-white"
              _hover={false}
              onClick={addHandler}
            >
              <i class="fas fa-plus"></i>
            </Button>
          </div>

          <div className="show__items">
            {items.map((item, idx) => {
              return (
                <div className="each__item shadow-sm" key={idx}>
                  <h5>{item}</h5>
                  <div className="overflow-hidden">
                    <Button
                      colorScheme={"red"}
                      className="text-white"
                      _hover={false}
                      onClick={() => deleteHandler(idx)}
                    >
                      <i class="fas fa-trash"></i>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="remove__btn">
            {items.length > 0 && (
              <Button colorScheme="red" onClick={removeAll}>
                Remove All
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
