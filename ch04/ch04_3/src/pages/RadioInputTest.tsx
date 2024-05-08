import { useMemo } from 'react';
import { Title, Subtitle } from '../components';
import * as D from '../data';

export default function RadioInputTest() {
    const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), [])
    const radioInputs = useMemo(() => jobTitles.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer label">
            <input type="radio" name="jobs" className="mr-4 radio-primary" defaultValue={value} />
            <span className="label-text">{value}</span>
        </label>
    )), [jobTitles])

    return (
        <section className="mt-4">
            <Title>RadioInputTest</Title>
            <div className="flex flex-col justify-center mt-4">
                <Subtitle>What is your job?</Subtitle>
                <Subtitle className="mt-4">Selected Job: </Subtitle>
                <div className="flex justify-center p-4 mt-4">
                    <div className="flex flex-col mt-4">{radioInputs}</div>
                </div>
            </div>
        </section>
    )
}