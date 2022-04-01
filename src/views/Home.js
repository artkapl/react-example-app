// const [text, setText] = useState("Hello World");
// erster Wert von array ist state, 2. ist Funktion, die state setzen kann

// async functions müssen immerhalb von useEffect() verwendet werden
// const [fruits, setFruits] = useState([]);

import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navigation from "../components/Navigation";
import api from "../api";
import Page from "../components/Page";

function Home() {
  const [text, setText] = useState("Hello World");
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFromApi = async () => {
      const data = await api();

      setFruits((oldFruits) => [...oldFruits, ...data]);
    };

    fetchFromApi();
  }, []);
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="fruitName">Fruit Name</Form.Label>
          <Form.Control
            id="fruitName"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button
            onClick={() => {
              setFruits((oldFruits) => [...oldFruits, { name: text }]);
            }}
          >
            Create New Fruit
          </Button>
        </Form.Group>
      </Form>
      {fruits.map((fruit) => {
        return <div key={fruit.name}>{fruit.name}</div>;
      })}
    </>
  );
}

export default Home;
