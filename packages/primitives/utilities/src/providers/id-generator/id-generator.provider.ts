import { InjectionToken, Provider, forwardRef, inject } from "@angular/core";

import { NgxPrimerIdGeneratorDirective } from "../../directives/id-generator/id-generator.directive";

/**
 * Configuration options for the ID Generator.
 * @typedef {Object} IdGeneratorConfig
 * @property {string} prefix The prefix to be used for generated IDs.
 */
export type IdGeneratorConfig = {
  prefix: string
}

/**
 * Injection token to provide and inject the `NgxPrimerIdGeneratorDirective`.
 * This is used for accessing the directive's instance in the Angular dependency injection system.
 */
export const NgxPrimerIdGeneratorDirectiveToken = new InjectionToken<NgxPrimerIdGeneratorDirective>('NgxPrimerIdGeneratorDirectiveToken');

/**
 * Factory function that provides the `NgxPrimerIdGeneratorDirective` based on the given configuration.
 * 
 * @param {Partial<IdGeneratorConfig>} config Partial configuration for the ID Generator.
 * @returns {Provider} Angular provider that injects the `NgxPrimerIdGeneratorDirective`.
 * 
 * This function ensures that the `NgxPrimerIdGeneratorDirective` is provided with merged configuration values.
 * It combines the default configuration of the directive with any provided `config` parameters.
 */
function provideIdGenerator(config: Partial<IdGeneratorConfig>): Provider { 
  return {
    provide: NgxPrimerIdGeneratorDirectiveToken,
    useFactory: () => {
      // Inject the instance of the directive
      const ngxPrimerDirective = inject<NgxPrimerIdGeneratorDirective>(forwardRef(() => NgxPrimerIdGeneratorDirective));
      
      // Resolve the current configuration of the directive
      const resolvedConfig = ngxPrimerDirective.config;
      
      // Merge the default configuration with the provided config
      ngxPrimerDirective.config = {
        ...resolvedConfig,
        ...config
      }
      
      // Return the directive instance with the updated configuration
      return ngxPrimerDirective;
    },
    deps: [
      NgxPrimerIdGeneratorDirective // Dependency for the directive
    ]
  }
}

/**
 * Function to inject the `NgxPrimerIdGeneratorDirective` instance from the Angular DI system.
 * This function provides access to the ID generator's instance, which can be used to generate IDs.
 * 
 * @returns {NgxPrimerIdGeneratorDirective | null} The injected `NgxPrimerIdGeneratorDirective` instance, or `null` if not provided.
 */
function injectIdGenerator() { 
  return inject(NgxPrimerIdGeneratorDirectiveToken, {
    self: true, // Ensure we are injecting the directive itself
    optional: true, // Make this injection optional
    host: true, // Look for the directive on the host element
  })
}

/**
 * Custom hook that provides methods to both inject and provide the `NgxPrimerIdGeneratorDirective`.
 * 
 * @returns {Object} Object containing the `provideIdGenerator` and `injectIdGenerator` methods.
 */
export const useIdGenerator = () => ({
  provideIdGenerator, 
  injectIdGenerator
})
