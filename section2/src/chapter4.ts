type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이형준",
    nickname: "leeceo97",
    birth: "1997.02.11",
    bio: "안녕하세요",
    location: "서울시",
};

let user2: User = {
    id: 2,
    name: "이형준",
    nickname: "leeceo97",
    birth: "1997.02.11",
    bio: "안녕하세여",
    location: "광교",
};

// type User;  불가능
// 아래의 경우 함수 내부에서는 같은 이름의 타입 지정 가능
function test() {
    type User = string;
};

export {};