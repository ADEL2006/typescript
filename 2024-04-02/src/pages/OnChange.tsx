import type { ChangeEvent } from "react";

export default function DispatchEvent() {
    // const onCallDispatchEvent = () => {
    //     console.log('onCallDispatchEvent')
    //     document.getElementById('root')?.dispatchEvent(new Event('click', { bubbles: true }));
    // }
    // const onCallClick = () => {
    //     console.log('onCallClick');
    //     document.getElementById('root')?.click();
    // }
    // return (
    //     <div>
    //         <p>DispatchEvent</p>
    //         <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
    //         <button onClick={onCallClick}>call click</button>
    //     </div>
    // )

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('onChangeValue', e.target.value);
    }
    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        console.log('onChangeFiles', e.target.checked);
    }
    const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        console.log('onChangeFiles', e.target.files);
    }

    return (
        <div>
            <p>OnChange</p>
            <input type="text" onChange={onChangeValue} placeholder="type some text" defaultValue="Hello" />
            <input type="checkbox" onChange={onChangeChecked} defaultChecked />
            <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
        </div>
    )
}