const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi') // g flag 옵션
console.log(str.match(regexp)) // The 는 검색 안됨 (i 옵션 추가 시 보임 대소문자 구별 x)
const regexp = /the/gi
console.log(str.match(regexp)) // the

const regexp2 = /fox/gi
console.log(regexp2.test(str))
// console.log(str.match(regexp2)) 배열로 반환
console.log(str.replace(regexp2, 'AAA')) // fox -> AAA 로


console.log(str.match(/\.$/gim)) // the 와 일치하는지
// 탈출 escape 기호 -> 마침표를 검색하겠다.
// 전체 영역에서 검색 g 
// m 시작부분 끝부분 하나만 있는데, 줄바꿈이 되어있는 부분(형태) 줄 마다 해석하겠다.

console.log(
    str.match(/[fox]/g) // f o x 영어 소문자 포함 문자들을 배열로 반환
    
)
console.log(str.match(/\w/g))
console.log(str.match(/\b/g))
console.log(
    str.match(/.{1,}(?=@)/g) // jgw117
)
console.log(
    str.match(/(?<=@).{1,}/g) // naver.com
)