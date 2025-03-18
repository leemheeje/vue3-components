import {styled} from '@vue-styled-components/core'
import {_toCSSUnit} from '@/themes/DesignConfig'

export const Wrapper = styled('div', {})`
  /* margin: 50px 10px;
  padding: 10px;
  background: #eee; */

  /* default var */
  --vc-shadow-lg: 0px 2px 4px 0px #00000005, 0px 6px 12px 0px #0000000a, 0px 12px 38px 0px #0000000f;

  /* theme */
  &[data-theme='test'] {
    --test: red;
  }

  .vc-popover-content-wrapper {
    --popover-horizontal-content-offset: 16px;
    --popover-vertical-content-offset: 16px;
    --popover-caret-horizontal-offset: 18px;
    --popover-caret-vertical-offset: 8px;
  }

  .vc-popover-content {
    border: 0;
  }

  .vc-popover-caret {
    display: none;
  }

  /* color custom */
  .vc-custom {
    --vc-accent-50: #f0f9ff;
    --vc-accent-100: #e0f2fe;
    --vc-accent-200: #bae6fd;
    --vc-accent-300: #7dd3fc;
    --vc-accent-400: #38bdf8;
    /* --vc-accent-500: #0ea5e9; */
    --vc-accent-500: #2196f3;
    /* --vc-accent-600: #0284c7; */
    --vc-accent-600: #2196f3;
    --vc-accent-700: #0369a1;
    --vc-accent-800: #075985;
    --vc-accent-900: #0c4a6e;
  }

  /* default replace */
  /* .vc-blue {
    --vc-accent-50: #eff6ff;
    --vc-accent-100: #dbeafe;
    --vc-accent-200: #bfdbfe;
    --vc-accent-300: #93c5fd;
    --vc-accent-400: #60a5fa;
    --vc-accent-500: #3b82f6;
    --vc-accent-600: #2563eb;
    --vc-accent-700: #1d4ed8;
    --vc-accent-800: #1e40af;
    --vc-accent-900: #1e3a8a;
} */

  .test-vc-light {
    /* Base */
    --vc-color: var(--vc-gray-900);
    --vc-bg: var(--vc-white);
    --vc-border: var(--vc-gray-300);
    --vc-hover-bg: hsla(211, 25%, 84%, 0.3);
    --vc-focus-ring: 0 0 0 2px rgb(59, 131, 246, 0.4);
    /* Calendar header */
    --vc-header-arrow-color: var(--vc-gray-500);
    --vc-header-arrow-hover-bg: var(--vc-gray-200);
    --vc-header-title-color: var(--vc-gray-900);
    /* Calendar weekdays */
    --vc-weekday-color: var(--vc-gray-500);
    /* Calendar weeknumbers */
    --vc-weeknumber-color: var(--vc-gray-400);
    /* Calendar nav */
    --vc-nav-hover-bg: var(--vc-gray-200);
    --vc-nav-title-color: var(--vc-gray-900);
    --vc-nav-item-hover-box-shadow: none;
    --vc-nav-item-active-color: var(--vc-white);
    --vc-nav-item-active-bg: var(--vc-accent-500);
    --vc-nav-item-active-box-shadow: var(--vc-shadow);
    --vc-nav-item-current-color: var(--vc-accent-600);
    /* Calendar day popover */
    --vc-day-popover-container-color: var(--vc-white);
    --vc-day-popover-container-bg: var(--vc-gray-800);
    --vc-day-popover-container-border: var(--vc-gray-700);
    --vc-day-popover-header-color: var(--vc-gray-700);
    /* Popover content */
    --vc-popover-content-color: var(--vc-gray-900);
    --vc-popover-content-bg: var(--vc-gray-50);
    --vc-popover-content-border: var(--vc-gray-300);
    /* Time picker */
    --vc-time-picker-border: var(--vc-gray-300);
    --vc-time-weekday-color: var(--vc-gray-700);
    --vc-time-month-color: var(--vc-accent-600);
    --vc-time-day-color: var(--vc-accent-600);
    --vc-time-year-color: var(--vc-gray-500);
    /* Time select group */
    --vc-time-select-group-bg: var(--vc-gray-50);
    --vc-time-select-group-border: var(--vc-gray-300);
    --vc-time-select-group-icon-color: var(--vc-accent-500);
    /* Base select */
    --vc-select-color: var(--vc-gray-900);
    --vc-select-bg: var(--vc-gray-100);
    --vc-select-hover-bg: var(--vc-gray-200);
    /* Calendar day */
    --vc-day-content-hover-bg: var(--vc-hover-bg);
    --vc-day-content-disabled-color: var(--vc-gray-400);
    /* Calendar attributes */
    &.vc-attr,
    & .vc-attr {
      --vc-content-color: var(--vc-accent-600);
      --vc-highlight-outline-bg: var(--vc-white);
      --vc-highlight-outline-border: var(--vc-accent-600);
      --vc-highlight-outline-content-color: var(--vc-accent-700);
      --vc-highlight-light-bg: var(--vc-accent-200);
      --vc-highlight-light-content-color: var(--vc-accent-900);
      --vc-highlight-solid-bg: var(--vc-accent-600);
      --vc-highlight-solid-content-color: var(--vc-white);
      --vc-dot-bg: var(--vc-accent-600);
      --vc-bar-bg: var(--vc-accent-600);
    }
  }

  .vc-pane {
    min-width: ${_toCSSUnit('354px')};
  }

  .vc-header {
    height: auto;
    margin-top: 16px;
    padding: 11px 21px;
    .vc-title,
    .vc-arrow {
      background-color: transparent;
    }
    .vc-title {
      font-size: 18px;
    }
    .vc-arrow {
      color: #646464;
    }
  }
  .vc-weeks {
    padding: 16px;
    .vc-week {
      padding: 10px 0;
    }
  }

  .vc-container {
    color: #212121;
    .is-today.in-month {
      color: var(--vc-accent-600);
      font-weight: var(--vc-font-medium);
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: calc(50% - 2px);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--vc-accent-600);
      }
    }
    .vc-highlight {
      width: 32px;
      height: 32px;
    }
    .vc-highlight.vc-highlight-base-middle {
      width: 100%;
    }
    .vc-highlight-content-light {
      font-weight: var(--vc-font-medium);
      color: var(--vc-accent-600);
    }
    .vc-highlight-bg-light {
      background-color: var(--vc-accent-100);
    }
    .vc-weekdays {
      padding-bottom: 10px;
    }
    .vc-weekday {
      padding-top: 6px;
      padding-bottom: 6px;
      color: #999;
    }
    .vc-weekday-1 {
      color: #fa2828;
    }
    .vc-weekday-7 {
      color: #49a9f5;
    }
    .weekday-1 {
      color: #fa2828;
    }
  }

  .vc-nav-title,
  .vc-nav-arrow,
  .vc-nav-item:not(.is-active) {
    background-color: transparent;
  }
`

export const BsDatepickerInput = styled('div', {})`
  display: flex;
  box-sizing: border-box;
  max-width: ${_toCSSUnit('356px')};
  padding: ${_toCSSUnit('12px')} ${_toCSSUnit('15px')};
  border: 1px solid #e1e1e1;
  border-radius: ${_toCSSUnit('4px')};
  &:focus-within {
    border-color: #2196f3;
  }
  > input {
    flex: 1;
    border: 0;
    background-color: transparent;
    outline: 0;
    color: #212121;
    font-size: var(--vc-text-sm);
  }
  > button {
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
  }
`

export const BsDatepickerFooter = styled('div', {})`
  display: flex;
  padding: 0 16px 16px 16px;
  > button {
    flex: 1;
    border: 0;
    padding: 16px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    background-color: #2196f3;
    color: #fff;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  }
`
