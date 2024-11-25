/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const TokenPrefix: string[] = [] as const;
export const TokenNamespace = ['base', 'pattern', 'functional'] as const;
export const TokenPattern = ['control', 'button', 'overlay', 'text'] as const;
export const TokenProperty = ['color', 'background', 'font', 'spacing', 'border', 'radius'] as const;
export const TokenVariant = ['primary', 'secondary', 'danger', 'success', 'light', 'dark'] as const;
export const TokenScale = ['small', 'medium', 'large', 'xlarge'] as const;

export type TokenPrefixType = typeof TokenPrefix[number];
export type TokenNamespaceType = typeof TokenNamespace[number];
export type TokenPropertyType = typeof TokenProperty[number];
export type TokenVariantType = typeof TokenVariant[number];
export type TokenScaleType = typeof TokenScale[number];

export class Token<
  Prefix extends TokenPrefixType = TokenPrefixType,
  Namespace extends TokenNamespaceType = TokenNamespaceType,
  Property extends TokenPropertyType = TokenPropertyType,
  Variant extends TokenVariantType | undefined = undefined,
  Scale extends TokenScaleType | undefined = undefined
> {
  // Token properties
  name: string;  // Name will be composed based on the semantic structure
  value: string;  // CSS value (e.g., #fff, 16px)
  prefix: Prefix;
  namespace: Namespace;
  property: Property;
  variant?: Variant;
  scale?: Scale;

  // Constructor with type-safe parameters
  constructor(
    prefix?: Prefix,
    namespace?: Namespace,
    property?: Property,
    value?: string,
    variant?: Variant,
    scale?: Scale
  ) {
    this.prefix = prefix!;
    this.namespace = namespace!;
    this.property = property!;
    this.value = value!;
    this.variant = variant;
    this.scale = scale;
    this.name = this.generateTokenName();
  }

  // Generates the semantic token name based on the structure: prefix-namespace-base-patterns-variant-property
  generateTokenName(): string {
    const nameParts = [
      this.prefix,         // e.g., 'brand', 'global'
      this.namespace,      // e.g., 'base', 'pattern', 'functional'
      this.property,       // e.g., 'color', 'background', etc.
      this.variant,        // e.g., 'primary', 'secondary' (if any)
      this.scale            // e.g., 'small', 'large' (if any)
    ]
      .filter(Boolean)      // Remove undefined values
      .join('-');          // Join with a hyphen

    return nameParts;
  }

  // Optionally return a CSS variable for the generated token
  generateCSSVariable(): string {
    return `--${this.generateTokenName()}: ${this.value};`;
  }
}