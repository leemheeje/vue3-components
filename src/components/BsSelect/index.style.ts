import {styled} from '@vue-styled-components/core'
import {
  Wrapper,
  InputInnerSectionArea,
  InputSelect,
  InputSectionRightArea as _InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsInputField/index.style'
import {
  DESIGNCONFIG_ICON_MAP,
  _toGetBackgroundSVG,
  _toCSSUnit,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR
} from '@/themes/DesignConfig'

const InputSectionRightArea = styled(_InputSectionRightArea)`
  .ic-select-arrow {
    width: ${_toCSSUnit('16px')};
    height: ${_toCSSUnit('16px')};
    display: block;
    background: no-repeat center center
      ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_arrow_down_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['Gray/Darkgray_04']]
      )};
    background-size: 100%;
  }
`

export {
  Wrapper,
  InputInnerSectionArea,
  InputSelect,
  InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
}
