
export function createEnums<T extends string>(arr: Array<T>):  {[K in T]: K} {
  return arr.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null))
}

/**
 * Extract enum type value
 */
export type ExtractEnumType<Type> = Type extends object 
? keyof Type | Type[keyof Type]
: Type;

/**
 * Accordion Type Options.
 */
export const accordionTypeOptions = createEnums([
  "Single",
  "Multiple"
]);

/**
 * Accoridon Orientation Options.
 */
export const accordionOrientationOption = createEnums([
  "Horizontal",
  "Vertical",
])

export type AccordionTypeOption = keyof typeof accordionTypeOptions;
export type AccordionOrientationOption = keyof typeof accordionOrientationOption

/**
 * Accoridon config
 */
export interface AccordionConfigInterface {
  /**
   * The default type of the accordion
   * @default 'single'
   */
  type: ExtractEnumType<AccordionTypeOption>;
  /**
   * Whether the accordion is collapsible
   * @default false
   */
  collapsible: boolean;
  /**
   * The default orientation of the accordion
   * @default 'vertical'
   */
  orientation: ExtractEnumType<AccordionOrientationOption>;
}

/**
 * Factory function to create custom config.
 * @param config The config applied for curent accordion instance.
 * @returns 
 */
export function defineAccordionConfig<T>(config: Partial<T>): T {
  return {
    ...config
  } as T
}

/**
 * Define accordion config based on givern interface.
 */
export const defaulAccordionConfig: AccordionConfigInterface = {
  type: "Multiple",
  collapsible: true,
  orientation: "Horizontal"
}

export const data: AccordionOrientationOption = "Horizontal"