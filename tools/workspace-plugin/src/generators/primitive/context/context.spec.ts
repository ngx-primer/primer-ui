import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { primitiveContextGeneratorGenerator } from './context';
import { PrimitiveContextGeneratorGeneratorSchema } from './schema';

describe('primitive-context-generator generator', () => {
  let tree: Tree;
  const options: PrimitiveContextGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await primitiveContextGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
