// interface Patient {
//     name: string;
//     head: { [key: string]: { symp: string } };
//     body: { [key: string]: { symp: string } };
// }

// function fetchbody(): Patient[] {
//     const patient: Patient[] = [
//         {
//             name: "양원준",
//             head: {
//                 "eye": { symp: "충혈" },
//                 "nose": { symp: "막힘" }
//             },
//             body: {
//                 "stomach": { symp: "매스꺼움" }
//             }
//         },
//         {
//             name: "박준범",
//             head: {
//                 "mental": { symp: "이상함" }
//             },
//             body: {
//                 "ankle": { symp: "병신" }
//             }
//         }
//     ];

//     return patient;
// }

// function stringifyPatient(patient: Patient): string {
//     let result = `${patient.name}:\n`;
//     result += "  head:\n";
//     for (const key in patient.head) {
//         result += `    ${key}: ${JSON.stringify(patient.head[key])}\n`;
//     }
//     result += "  body:\n";
//     for (const key in patient.body) {
//         result += `    ${key}: ${JSON.stringify(patient.body[key])}\n`;
//     }
//     return result;
// }

// const list: Patient[] = fetchbody();
// list.forEach(patient => console.log(stringifyPatient(patient)));


interface Schedule {
    monday: Day_Schedule;
    tuesday: Day_Schedule;
    wednesday: Day_Schedule;
    thursday: Day_Schedule;
    friday: Day_Schedule;
    saturday: Day_Schedule;
    sunday: Day_Schedule;
}

interface Day_Schedule {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
    sixth: string;
    seventh: string;
    eighth: string;
    ninth: string;
    tenth: string;
    eleventh: string;
}

function createSchedule(): Schedule[] {
    const schedule: Schedule[] = [
        {
            monday: {
                first: "일어나기",
                second: "아침 식사",
                third: "출근",
                fourth: "점심",
                fifth: "출근",
                sixth: "휴식",
                seventh: "저녁",
                eighth: "휴식",
                ninth: "잠",
                tenth: "",
                eleventh: ""
            },
            tuesday: {
                first: "일어나기",
                second: "아침 식사",
                third: "출근",
                fourth: "점심",
                fifth: "출근",
                sixth: "운동",
                seventh: "저녁",
                eighth: "독서",
                ninth: "잠",
                tenth: "",
                eleventh: ""
            },
            wednesday: {
                first: "일어나기",
                second: "아침 식사",
                third: "출근",
                fourth: "점심",
                fifth: "출근",
                sixth: "등산",
                seventh: "저녁",
                eighth: "영화 보기",
                ninth: "잠",
                tenth: "",
                eleventh: ""
            },
            thursday: {
                first: "일어나기",
                second: "아침 식사",
                third: "출근",
                fourth: "점심",
                fifth: "출근",
                sixth: "댄스 수업",
                seventh: "저녁",
                eighth: "음악 감상",
                ninth: "잠",
                tenth: "",
                eleventh: ""
            },
            friday: {
                first: "일어나기",
                second: "아침 식사",
                third: "출근",
                fourth: "점심",
                fifth: "출근",
                sixth: "그림 그리기",
                seventh: "저녁",
                eighth: "게임",
                ninth: "잠",
                tenth: "",
                eleventh: ""
            },
            saturday: {
                first: "일어나기",
                second: "아침 식사",
                third: "운동",
                fourth: "점심",
                fifth: "장보기",
                sixth: "청소",
                seventh: "저녁",
                eighth: "친구 만나기",
                ninth: "잠",
                tenth: "",
                eleventh: ""
            },
            sunday: {
                first: "일어나기",
                second: "아침 식사",
                third: "휴식",
                fourth: "점심",
                fifth: "가족과 함께 시간 보내기",
                sixth: "책 읽기",
                seventh: "저녁",
                eighth: "다음 주 계획 세우기",
                ninth: "잠",
                tenth: "",
                eleventh: ""
            }
        }
    ];

    return schedule;
}

function stringifySchedule(schedule: Schedule): string {
    let result = "";
    for (const key in schedule) {
        if (key in schedule) {
            result += `${key}:\n`;
            const daySchedule = schedule[key as keyof Schedule];
            for (const subKey in daySchedule) {
                const value = daySchedule[subKey as keyof Day_Schedule];
                const strValue = typeof value === 'string' ? value : JSON.stringify(value);
                result += `  ${subKey}: ${strValue}\n`;
            }
        }
    }
    return result;
}

const schedules: Schedule[] = createSchedule();
schedules.forEach(schedule => console.log(stringifySchedule(schedule)));

