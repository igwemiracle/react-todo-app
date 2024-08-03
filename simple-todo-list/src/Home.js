import { useState } from "react";

const HomePage = () => {
    // State to manage the new item text
    const [newItem, setNewItem] = useState('');
    // State to manage the list of todo items
    const [items, setItems] = useState([]);

    // Handle the click event to add a new item
    const handleClick = (e) => {
        e.preventDefault();
        if (newItem.trim() !== '') {
            // Add the new item to the list
            setItems([...items, newItem]);
            // Clear the input field
            setNewItem('');
        }
    };

    return (
        <div className="homepage">
            <h2>Simple Todo List</h2>
            <input
                type="text"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter a new item"
            />
            <button onClick={handleClick}>Add item</button>

            {/* Render the list of todo items */}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
