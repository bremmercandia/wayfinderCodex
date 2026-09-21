/**
 * Global surface exposed by the Wowhead Tooltips widget
 * (https://wowhead.com/widgets/power.js).
 */
export {};

declare global {
  interface WowheadPower {
    /** Re-scans the DOM and wires tooltips for every `data-wowhead` element. */
    refreshLinks: () => void;
    hideTooltip?: () => void;
  }

  interface Window {
    $WowheadPower?: WowheadPower;
    whTooltips?: {
      colorLinks?: boolean;
      iconizeLinks?: boolean;
      renameLinks?: boolean;
    };
  }
}