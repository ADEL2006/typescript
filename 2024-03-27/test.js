// interface Patient {
//     name: string;
//     head: { [key: string]: { symp: string } };
//     body: { [key: string]: { symp: string } };
// }
function createSchedule() {
    var schedule = [
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
function stringifySchedule(schedule) {
    var result = "";
    for (var key in schedule) {
        if (key in schedule) {
            result += "".concat(key, ":\n");
            var daySchedule = schedule[key];
            for (var subKey in daySchedule) {
                var value = daySchedule[subKey];
                var strValue = typeof value === 'string' ? value : JSON.stringify(value);
                result += "  ".concat(subKey, ": ").concat(strValue, "\n");
            }
        }
    }
    return result;
}
var schedules = createSchedule();
schedules.forEach(function (schedule) { return console.log(stringifySchedule(schedule)); });
