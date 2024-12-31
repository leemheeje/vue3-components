import {styled, css} from '@vue-styled-components/core'

export const Wrapper = styled.span``
export const InputInnerSectionArea = styled('div', {
  class: String
})`
  display: flex;
  align-item: center;
  #background: ${(props) => (props.class?.includes('is-disabled') ? 'red' : 'blue')};
`
export const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
export const InputSectionRightArea = styled.div`
  margin-left: auto;
  margin-right: 0;
`

export const InputValueResetButton = styled.button`
  width: 30px;
  height: 30px;
  background: black;
`

export const InputOuterSectionArea = styled.div`
  ${(props) => {
    console.log('coor???', props.theme.primaryColor)

    return `
    background: ${props.theme.primaryColor};
    `
  }}
`
// export const InputOuterSectionArea = styled.div`
//   background: ${(props) => props.theme.primaryColor};
// `

// input외부 텍스트 스타일
const textStyle = css`
  background: red;
`
export const InputTextMasseage = styled.div`
  ${textStyle}
`
export const InputErrorMasseage = styled.div``
export const InputConfirmMasseage = styled.div``
