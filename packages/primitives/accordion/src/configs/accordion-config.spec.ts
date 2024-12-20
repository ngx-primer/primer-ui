import { NgxPrimerAccordionConfig, NgxPrimerAccordionOrientation, NgxPrimerAccordionType, defaultAccordionConfig, injectAccordionConfig, provideAccordionConfig } from './accordion-config';

import { NgxPrimerAccordionConfigToken } from '../tokens/accordion-config.token';
import { TestBed } from '@angular/core/testing';

describe('AccordionConfig', () => {
  let config: NgxPrimerAccordionConfig;

  beforeEach(() => {
    config = defaultAccordionConfig();
  });

  it('should have default config values', () => {
    expect(config.type).toBe(NgxPrimerAccordionType.Multiple);
    expect(config.collapsible).toBe(true);
    expect(config.orientation).toBe(NgxPrimerAccordionOrientation.Vertical);
    expect(config.theme.builtIn).toBe(true);
  });

  it('should update config using callback function', () => {
    config.updateConfig(() => ({
      type: NgxPrimerAccordionType.Single,
      collapsible: false,
    }));
    expect(config.type).toBe(NgxPrimerAccordionType.Single);
    expect(config.collapsible).toBe(false);
  });

  it('should update config using partial config', () => {
    config.updateConfig({
      orientation: NgxPrimerAccordionOrientation.Horizontal,
    });
    expect(config.orientation).toBe(NgxPrimerAccordionOrientation.Horizontal);
  });

  it('should reset config to default values', () => {
    const newConfig: NgxPrimerAccordionConfig = {
      ...config,
      type: NgxPrimerAccordionType.Single,
      collapsible: false,
      orientation: NgxPrimerAccordionOrientation.Horizontal,
      theme: { builtIn: false },
      updateConfig: config.updateConfig,
      resetConfig: config.resetConfig,
    };
    newConfig.resetConfig(newConfig);
    expect(newConfig.type).toBe(NgxPrimerAccordionType.Multiple);
    expect(newConfig.collapsible).toBe(true);
    expect(newConfig.orientation).toBe(NgxPrimerAccordionOrientation.Vertical);
    expect(newConfig.theme.builtIn).toBe(true);
  });

  it('should provide custom config', () => {
    TestBed.configureTestingModule({
      providers: [provideAccordionConfig({
        type: NgxPrimerAccordionType.Single,
        collapsible: false,
      })],
    });
    const injectedConfig = TestBed.inject(NgxPrimerAccordionConfigToken);
    expect(injectedConfig.type).toBe(NgxPrimerAccordionType.Single);
    expect(injectedConfig.collapsible).toBe(false);
  });

  it('should inject default config if no custom config is provided', () => {
    TestBed.configureTestingModule({
      providers: [provideAccordionConfig({})],
    });
    const injectedConfig = TestBed.inject(NgxPrimerAccordionConfigToken);
    expect(injectedConfig.type).toBe(NgxPrimerAccordionType.Multiple);
    expect(injectedConfig.collapsible).toBe(true);
    expect(injectedConfig.orientation).toBe(NgxPrimerAccordionOrientation.Vertical);
    expect(injectedConfig.theme.builtIn).toBe(true);
  });
});