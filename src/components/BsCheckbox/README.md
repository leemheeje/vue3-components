# BsCheckbox

## 해당 컴포넌트 연결링크

- [StroyBook](https://www.google.com)
- [Pigma-input](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-RESP?node-id=2882-11040&t=hZ9UF7CwAVQZrtIe-0)

## 컴포넌트 디자인커스텀 목록

- 텍스트(사이즈, 컬러, 폰트 웨이트), 라인(컬러,두께,라운드값)
- 아이콘 영역 (사이즈, 컬러, 위치, svg파일)
- Disabled 버튼 경우 Enabled 기준 오퍼시티 -50%로 조절

## 컴포넌트 설명

**BsRadio와 스타일을 함께사용**
피그마 **Checkbox**섹션의 Form checkbox -> 테마1,테마2,테마3
피그마 **Radio button**섹션의 Form Radio button -> 테마1,테마2 / Button 
피그마 **Toggle**섹션의 Form Toggle Button, case
위 Radio/Checkbox 같이 공유
**↑↑↑↑체크/라디오 디자인공유 가능한 테마만 묶어서 같이 사용**

피그마 **Toggle**섹션만 Form Toggle Switch **Checkbox** 전용 테마로 사용

### Props

```Props
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'
export interface Props {
  id?: string
  name?: string
  modelValue?: boolean
  checked?: boolean
  disabled?: boolean
  useTheme6CheckIcon?: boolean
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
}


```

### Emit

| Event             | Return-value | 설명    |
| ----------------- | ------------ | ------- |
| update:modelValue | boolean       |  |
| change     | javascript event      |  |

