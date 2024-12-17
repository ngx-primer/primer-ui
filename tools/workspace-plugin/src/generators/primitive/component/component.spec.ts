import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { primitiveComponentGeneratorGenerator } from './component';
import { PrimitiveComponentGeneratorGeneratorSchema } from './schema';

describe('primitive-component-generator generator', () => {
  let tree: Tree;
  const options: PrimitiveComponentGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await primitiveComponentGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
