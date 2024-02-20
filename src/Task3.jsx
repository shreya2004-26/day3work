import React, { useState } from "react";
import "./task3.css";
const Task3 = () => {
  const [task, setTask] = useState("");
  const [listItem, setListItem] = useState([]);
  const taskAddFunc = () => {
    setListItem([...listItem, task]); //Spread operator is used to break list items as individual items, after that add 'task' to the 'listItem' and then store them in the array
    console.log(listItem);
    setTask("");

    // const newArr = listItem.push(task);
    // setListItem(newArr);
  };
  console.log(`listItem is ${listItem}`);
  const taskDeleteFunc = (idx) => {
    // idx is passed to identify todo uniquely
    const newArr = listItem.filter((curr, index) => {
      return index != idx;
    });
    setListItem(newArr);
    // console.log(newArr);
  };

  return (
    <>
      <div className="t3MainContainer">
        <div className="t3Container">
          <p>ToDo List</p>
          <div className="t3Container1">
            <input
              type="text"
              placeholder="Enter todo item"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <i
              onClick={taskAddFunc}
              className="fa-solid fa-plus"
              style={{
                backgroundColor: "#876bab",
                padding: "8px",
                borderRadius: "100%",
                color: "whitesmoke",
                cursor: "pointer",
              }}
            ></i>
          </div>
          <div className="t3Container2">
            {listItem.map((curr, index) => {
              console.log(curr, index);

              return (
                <div className="todo" key={index}>
                  <i
                    onClick={() => taskDeleteFunc(index)}
                    className="fa-solid fa-xmark"
                    style={{
                      backgroundColor: "#876bab",
                      padding: "2px",
                      borderRadius: "100%",
                      color: "whitesmoke",
                      cursor: "pointer",
                    }}
                  ></i>
                  {/* {console.log(index)} */}

                  <h5>{curr}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task3;
