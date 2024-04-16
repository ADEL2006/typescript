import React from 'react';

const ItemList: React.FC = () => {
    const handleItemClick = (e: React.MouseEvent<HTMLUListElement>) => {
        const { isTrusted, target, bubbles, currentTarget } = e;
        console.log((e.target as HTMLLIElement).textContent + 'clicked!');
        console.log('click event starts at <li>', isTrusted, target, bubbles, currentTarget);
    }
    return (
        <ul id="itemList" onClick={handleItemClick}>
            <li>아이템 1</li>
            <li>아이템 2</li>
            <li>아이템 3</li>
        </ul>
    )
}

export default ItemList;