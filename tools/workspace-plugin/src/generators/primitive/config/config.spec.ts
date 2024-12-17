import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { primitiveConfigGeneratorGenerator } from './config';
import { PrimitiveConfigGeneratorGeneratorSchema } from './schema';

describe('primitive-config-generator generator', () => {
  let tree: Tree;
  const options: PrimitiveConfigGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await primitiveConfigGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
