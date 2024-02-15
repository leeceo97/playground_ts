// object

// let user: object = {
//     id: 1,
//     name: "이형준",
// };

// user.id

// let user: {
//     id: number;
//     name: string;
// } = {
//     id: 1,
//     name: "이형준",
// };

// 선택적 프로퍼티
// 리터럴 타입으로 선업했음에도 object 선언시 포함안되도 상관x 형식은 ?를 붙여준다.
// let user: {
//     id?: number;
//     name: string;
// } = {
//     name: "이형준"
// };

// readonly 프로퍼티
// 읽기전용으로만 가능하게 하여 처음 초기화 할때 이후 수정 불가

let user: {
    id?: number;
    readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
  } = {
    id: 1,
    name: "이형준",
  };
  
//   user.name = "dskfd"; // 오류 발생