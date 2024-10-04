
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
 * Accoridon config
 */
export interface SlotConfigInterface {
}

/**
 * Factory function to create custom config.
 * @param config The config applied for curent Slot instance.
 * @returns 
 */
export function defineSlotConfig<T>(config: Partial<T>): T {
  return {
    ...config
  } as T
}

/**
 * Define Slot config based on givern interface.
 */
export const defaulSlotConfig: SlotConfigInterface = {
}