export interface BaseAngularComponentSchema {
  path: string;
  name?: string;
  displayBlock?: boolean;
  inlineStyle?: boolean;
  inlineTemplate?: boolean;
  standalone?: boolean;
  viewEncapsulation?: 'Emulated' | 'None' | 'ShadowDom';
  changeDetection?: 'Default' | 'OnPush';
  style?: 'css' | 'scss' | 'sass' | 'less' | 'none';
  skipTests?: boolean;
  type?: string;
  skipImport?: boolean;
  selector?: string;
  module?: string;
  skipSelector?: boolean;
  export?: boolean;
  exportDefault?: boolean;
  prefix?: string;
  skipFormat?: boolean;
}

export interface NormalizedComponentSchema extends BaseAngularComponentSchema {
  directory: string;
  filePath: string;
  projectName: string;
  projectSourceRoot: string;
  projectRoot: string;
  selector: string;

  fileName: string;
  symbolName: string;
}
export interface PrimitiveComponentGeneratorGeneratorSchema
  extends NormalizedComponentSchema {
  name: string;
}
