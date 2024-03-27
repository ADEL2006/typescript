interface Patient {
    name: string;
    head: { [key: string]: { symp: string } };
    body: { [key: string]: { symp: string } };
}

function fetchbody(): Patient[] {
    const patient: Patient[] = [
        {
            name: "양원준",
            head: {
                "eye": { symp: "충혈" },
                "nose": { symp: "막힘" }
            },
            body: {
                "stomach": { symp: "매스꺼움" }
            }
        },
        {
            name: "박준범",
            head:{ 
                "mental": { symp: "이상함"}
            },
            body: {
                "ankle": { symp: "병신"}
            }
        }
    ];

    return patient;
}

function stringifyPatient(patient: Patient): string {
    let result = `${patient.name}:\n`;
    result += "  head:\n";
    for (const key in patient.head) {
        result += `    ${key}: ${JSON.stringify(patient.head[key])}\n`;
    }
    result += "  body:\n";
    for (const key in patient.body) {
        result += `    ${key}: ${JSON.stringify(patient.body[key])}\n`;
    }
    return result;
}

const list: Patient[] = fetchbody();
list.forEach(patient => console.log(stringifyPatient(patient)));
