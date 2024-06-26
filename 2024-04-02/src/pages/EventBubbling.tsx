import type { SyntheticEvent } from 'react';

export default function EventBubbling() {
    const onDivClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles, currentTarget } = e;
        console.log('click event bubble on <div>', isTrusted, target, bubbles, currentTarget);
    }
    const onButtonClick = (e: SyntheticEvent) => {
        const { isTrusted, target, bubbles, currentTarget } = e;
        console.log('click event starts at <button>', isTrusted, target, bubbles)
    }
    return (
        <div>
            <p>EventBubbling</p>
            <button onClick={onButtonClick}>Click Me</button>
        </div>
    )
}