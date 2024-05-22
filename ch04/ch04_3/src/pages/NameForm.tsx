import React, { useCallback } from "react";
type NameFormProps = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

function NameForm({ name, setName }: NameFormProps) {
    const onNameChange = useCallback((newName: string) => { setName(newName) }, [setName])

    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault()
        alert(`hello ${name}!!`)
    }, [name])

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => onNameChange(e.target.value)} className="ml-4 input input-primary input-sm" />
            </label>
            <button type="submit" className="ml-4 btn btn-primary btn-sm">Submit</button>
        </form>
    )
}
export default NameForm;