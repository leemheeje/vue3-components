# BsIcon

## 해당 컴포넌트 연결링크

- [StroyBook](https://www.google.com)
- [Pigma-input](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-RESP?node-id=3835-30708&m=dev)

## 컴포넌트 디자인커스텀 목록

- 디자이너의 커스텀범위 없음
- 아이콘 너비/높이/색상 조정 가능

### Props

```Props
import iconMapGroup from '@/themes/common/iconMapGroup'
export interface Props {
  type: keyof typeof iconMapGroup
  color?: string
  width?: string
  height?: string
}
```

### Emit

- Emit 연결 없음

