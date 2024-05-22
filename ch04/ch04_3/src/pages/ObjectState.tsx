// import type { FormEvent, ChangeEvent } from 'react';
// import { useCallback, useState } from 'react';
// import { Title } from '../components';
// import { Input } from '../theme/daisyui';

// type FormType = {
//     name: string
//     email: string
// }

// export default function ObjectState() {
//     const [form, setForm] = useState<FormType>({name: '', email: ''})
//     const onsubmit = useCallback(
//         (e: FormEvent<HTMLFormElememt>) => {
//             e.preventDefault()
//             alert(JSON.stringify(form, null, 2))
//         },
//         [form]
//     )

//     const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//         setForm(state => ({...state, name: e.target.value}))
//     }, [])
//     const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//         setForm(form => ({...form, email: e.target.value}))
//     }, [])

//     return (
//         <section>
//             <Title>ObjectState</Title>
//             <div className="flex justify-center mt-4">
//                 <form onSubmit={onSubmit}>
//                     <div className="form-control">
//                         <label className="label" htmlFor="name">
//                             <span className="label-text">Username</span>
//                         </label>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     )
// }
export default {};