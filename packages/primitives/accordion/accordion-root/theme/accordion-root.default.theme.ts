import { cva } from 'class-variance-authority';

// Define the variants for the accordion component
export const accordion = cva('w-full max-w-[24rem] rounded-lg border transition-all', {
  variants: {
    state: {
      expanded: 'bg-white shadow-lg',
      collapsed: 'bg-gray-100 shadow-sm',
    },
    disabled: {
      true: 'opacity-60 pointer-events-none cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    state: 'collapsed',
    disabled: false,
  },
});

export const accordionItem = cva('overflow-hidden transition-all', {
  variants: {
    state: {
      expanded: 'max-h-[200px] p-4 opacity-100',
      collapsed: 'max-h-0 p-0 opacity-0',
    },
  },
  defaultVariants: {
    state: 'collapsed',
  },
});
