import { styled } from '@vue-styled-components/core'

export const Wrapper = styled.span``
export const InputSectionArea = styled('div', {
  class: String,
})`
  padding: 0 8px;
  border-radius: 4px;
  background: ${props => (props.class?.includes('is-disabled') ? 'red' : 'blue')};
`
