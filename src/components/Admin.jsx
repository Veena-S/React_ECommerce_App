import axios from 'axios';
import React, { useState } from 'react';

export default function Admin({ setNewItem }) {
  const [item, setItem] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.0);

  const addItem = (item, description, price) => {
    const data = {
      name: item,
      description,
      price,
    };
    axios.post('/addItem', data)
      .then((response) => {
        console.log(response.data);
        setNewItem();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="col-sm">
      <div className="add-item">
        <input
          type="text"
          placeholder="item-name"
          value={item}
          onChange={(event) => {
            setItem(event.target.value);
          }}
        />
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <button type="button" onClick={() => addItem(item, description, price)}>Add Item</button>
      </div>
    </div>
  );
}
