
// interface typeGrade {
//     "고대"?:string,
//     "유물"?:string,
//     "전설"?:string,
//     "영웅"?:string,
//     "희귀"?:string,
//     "고급"?:string,
//     "일반"?:string
// }

// const ItemGrade:typeGrade[] = [
//     {"고대":"var(--grade6)"},
//     {"유물":"var(--grade5)"},
//     {"전설":"var(--grade4)"},
//     {"영웅":"var(--grade3)"},
//     {"희귀":"var(--grade2)"},
//     {"고급":"var(--grade1)"},
//     {"일반":"var(--grade0)"},
// ]

const ItemGrade: Record<string, string> = {
    "고대": "var(--grade6)",
    "유물": "var(--grade5)",
    "전설": "var(--grade4)",
    "영웅": "var(--grade3)",
    "희귀": "var(--grade2)",
    "고급": "var(--grade1)",
    "일반": "var(--grade0)",
};

export default ItemGrade