# BsInputField

## 해당 컴포넌트 연결링크

- [StroyBook](https://www.google.com)
- [Pigma-input](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-RESP?node-id=3743-14847&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- 텍스트(사이즈, 컬러, 폰트 웨이트), 라인(컬러,두께,라운드값)
- 아이콘 영역 (사이즈, 컬러, 위치, svg파일)
  - #slotInputSectionLeftArea 선언가능
  - #slotInputSectionRightArea 선언가능
  - #slotSupportMessage 선언가능
- input base 기준 예시 확인

## 컴포넌트 정보

**asdf**asdf

### Props

```Props
export interface Props {
  tag?: string
  isFocus?: boolean
  placeholder?: string
  errorMessage?: string
  confirmMessage?: string
  customStyle?: any
  timeRange?: string
  modelValue: string
}
```

### Emit

| Event             | Return-value | 설명    |
| ----------------- | ------------ | ------- |
| update:modelValue | 입력값       | 데이터3 |
| click:delete      | 데이터5      | 데이터6 |
| input     | 데이터5      | 데이터6 |
| focus     | FocusEvent      |  |
| blur     | BlurEvent      |  |
| keyup     | KeyboardEvent      |  |



### Constant

```/src/constants/BsInputField.ts
asdf
```

### Types

```/src/constants/BsInputField/index.type.ts
asdf
```
