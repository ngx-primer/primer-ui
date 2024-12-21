import { cva, type VariantProps } from 'class-variance-authority';

// Define the accordion root theme variant
export const accordionRootThemeVariant = cva('accordion-root-base h-full', {
  variants: {
    // Theme mode variants
    variant: {
      light: `
        border-[1px] rounded-lg
        bg-[rgb(255,255,255)] border-[rgb(229,231,235)]
        shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]
      `,
      dark: `
        border-[1px] rounded-lg
        bg-[rgb(24,24,27)] border-[rgb(63,63,70)]
        shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]
      `,
    },
    // Size variants
    size: {
      sm: 'max-w-[16rem]',
      md: 'max-w-[24rem]',
      lg: 'max-w-[32rem]',
    },
    // Border Radius (optional customization)
    borderRadius: {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'light',
    size: 'md',
    borderRadius: 'md',
  },
});

// Define the type for props based on the variants
export type AccordionRootThemeVariant = VariantProps<
  typeof accordionRootThemeVariant
>;
