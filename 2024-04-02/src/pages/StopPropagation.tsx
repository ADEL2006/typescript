import type { SyntheticEvent } from 'react';

export default function StopPropagation() {
    const onDivClick = (e: SyntheticEvent) => console.log('click event bulles on <div>');
    const onButtonClick = (e: SyntheticEvent) => {
        console.log('mouse click occurrs on <button> and call stopPropagation');
        e.stopPropagaion();
    }
    return (
        <div onClick = {onDivClick}>
            <p>StopPropagation</p>
            <button onClick = {onButtonClick}>Click Me and stop event propagation</button>
        </div>
    )
}