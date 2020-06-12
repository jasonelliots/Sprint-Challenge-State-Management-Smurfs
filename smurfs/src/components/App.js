import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

//components
import { SmurfForm } from "./SmurfForm";
import { SmurfList } from "./SmurfList";

//contexts
import { formContext } from "../contexts/formContext";
import { listContext } from "../contexts/listContext";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [formValues, setFormValues] = useState({name: '', height: '', age: ''});
  const [refresh, setRefresh] = useState(true)


  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]); 

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // let newSmurf = {
    //   name: formValues.name,
    //   age: formValues.age,
    //   height: formValues.height,
    // };

    axios
      .post("http://localhost:3333/smurfs", formValues)
      .then((res) => {
        console.log(res);
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues({
          name: "",
          age: "",
          height: "",
        });
        setRefresh(!refresh); 
      });
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Context</h1>

      <listContext.Provider value={{ smurfs }}>
        <SmurfList />
      </listContext.Provider>

      <formContext.Provider
        value={{ onChange, onSubmit, formValues, setFormValues }}
      >
        <SmurfForm />
      </formContext.Provider>
    </div>
  );
};

export default App;
