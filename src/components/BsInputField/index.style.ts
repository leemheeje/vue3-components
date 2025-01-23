import {styled, css} from '@vue-styled-components/core'
import DesignConfig, {_toCss, _toEm} from '@/themes/DesignConfig'

const designTypography = DesignConfig.typography as Record<string, any>
const designColor = DesignConfig.color as Record<string, any>
const IS_DISABLED = 'is-disabled'
export const Wrapper = styled.span``
export const InputInnerSectionArea = styled('div', {
  class: String
})`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.class?.includes(IS_DISABLED) ? designColor['Gray/Lightgray_03'] : designColor['Gray/White']};
  border: ${_toEm('1px')} solid ${designColor['Gray/Lightgray_02']};
  border-radius: ${_toEm('4px')};
  padding: 0 ${_toEm('16px')};
  overflow: hidden;
`
export const InputField = styled.input`
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  width: 100%;
  background: transparent;
  height: ${_toEm('48px')};
  ${css`
    ${_toCss(designTypography['Body1/Regular'])}
  `} &::placeholder {
    color: ${designColor['Gray/Darkgray_06']};
  }
  &:focus {
    outline: none;
  }
`
export const InputSectionRightArea: Record<string, any> = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  gap: ${_toEm('8px')};
`

export const InputValueResetButton = styled.button`
  width: 30px;
  height: 30px;
  background: black;
`

export const InputOuterSectionArea = styled.div`
  background: ${(props) => props.theme.primaryColor};
`

// input외부 텍스트 스타일
const textStyle = css``
export const InputTextMasseage = styled.div`
  ${textStyle}
`
export const InputErrorMasseage = styled.div``
export const InputConfirmMasseage = styled.div``
