import { Tree, readProjectConfiguration } from '@nx/devkit';

import { PrimitiveComponentGeneratorGeneratorSchema } from './schema';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { primitiveComponentGeneratorGenerator } from './component';

describe('primitive-component-generator generator', () => {
  let tree: Tree;
  const options: PrimitiveComponentGeneratorGeneratorSchema = {
    name: 'test',
    directory: '',
    filePath: '',
    projectName: '',
    projectSourceRoot: '',
    projectRoot: '',
    selector: '',
    fileName: '',
    symbolName: '',
    path: '',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await primitiveComponentGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
