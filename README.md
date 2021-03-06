# PseudoSignUp
회원가입 폼 홈페이지입니다.   
회원가입의 절차만을 간략히 나타낸 홈페이지이며, 실제로 정보가 저장되거나 전송되지 않습니다.
# 사용한 요소
- `<form>` 태그 내 `<input>` 태그의 `required`, `minlength`, `maxlegnth` 속성을 통한 필수 입력 범위 설정
- `<form>` 태그의 `onsubmit`의 `return`값(`true` 또는 `false`)을 통해 `POST`를 결정
- 비밀번호와 확인PW가 서로 일치하지 않을 때 모달 창을 띄움
- `SHA-256`을 통한 패스워드 암호화
- `CSS`에서 `transition` 속성을 이용한 매끄러운 변경 표시