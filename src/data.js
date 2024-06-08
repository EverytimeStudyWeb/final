let restaurant = [
  {
    img: process.env.PUBLIC_URL + "/images/red.png",
    name: "지하 학생식당",
  },
  {
    img: process.env.PUBLIC_URL + "/images/building.png",
    name: "E동 학생식당",
  },
  {
    img: process.env.PUBLIC_URL + "/images/black.png",
    name: "종합 학생식당",
  },
];

// let restaurant = [
//   {
//     img: URL("../public/images/red.png"),
//     name: "지하 학생식당",
//   },
//   {
//     img: URL(),
//     name: "E동 학생식당",
//   },
//   {
//     img: URL(),
//     name: "종합 학생식당",
//   },
// ];

let lunch = [
  {
    month: "27",
    day: "월",
    content: [
      "숯불간장불고기",
      "콩나물국",
      "고로케&케찹",
      "파채무침",
      "배추김치",
      "오이샐러드",
    ],
  },
  {
    month: "28",
    day: "화",
    content: ["소세지카레덮밥", "미역국", "두부강정", "깍두기", "양배추샐러드"],
  },
  {
    month: "29",
    day: "수",
    content: [
      "치킨마요덮밥",
      "장국",
      "어묵볶음",
      "무말랭이무침",
      "열무김치",
      "가래떡맛탕",
    ],
  },
  {
    month: "30",
    day: " 목",
    content: ["잔치국수", "흰쌀밥", "깐풍가지", "돈가스", "배추김치", "오복지"],
  },
  {
    month: "31",
    day: "금",
    content: [
      "등촌샤브칼국수",
      "물만두&초간장",
      "고구마맛탕",
      "간장고추지",
      "배추김치",
      "요구르트",
    ],
  },
];

let dinner = [
  {
    month: "27",
    day: "월",
    content: [
      "돈육고추장볶음",
      "콩나물무침",
      "들깨무채국",
      "비엔나구이",
      "브로콜리",
      "포기김치",
    ],
  },
  {
    month: "28",
    day: "화",
    content: [
      "어니언치킨",
      "미소국",
      "볶음우동",
      "도토리묵무침",
      "양배추샐러드",
      "깍두기",
    ],
  },
  {
    month: "29",
    day: "수",
    content: [
      "나물비빔밥",
      "김치찌개",
      "고구마맛탕",
      "오복지",
      "열무김치",
      "요구르트",
    ],
  },
  {
    month: "30",
    day: " 목",
    content: [
      "설렁탕&소면",
      "메밀전병",
      "알감자조림",
      "고추쌈장무침",
      "깍두기",
      "사과샐러드",
    ],
  },
  {
    month: "31",
    day: "금",
    content: [
      "미트스파게티",
      "양송이스프",
      "치킨텐더샐러드",
      "피클",
      "깍두기",
      "마늘바게트",
    ],
  },
];

export { restaurant, lunch, dinner };
