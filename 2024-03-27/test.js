function fetchbody() {
    var patient = [
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
            head: {
                "mental": { symp: "이상함" }
            },
            body: {
                "ankle": { symp: "병신" }
            }
        }
    ];
    return patient;
}
function stringifyPatient(patient) {
    var result = "".concat(patient.name, ":\n");
    result += "  head:\n";
    for (var key in patient.head) {
        result += "    ".concat(key, ": ").concat(JSON.stringify(patient.head[key]), "\n");
    }
    result += "  body:\n";
    for (var key in patient.body) {
        result += "    ".concat(key, ": ").concat(JSON.stringify(patient.body[key]), "\n");
    }
    return result;
}
var list = fetchbody();
list.forEach(function (patient) { return console.log(stringifyPatient(patient)); });
