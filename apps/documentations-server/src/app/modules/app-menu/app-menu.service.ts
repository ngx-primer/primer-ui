import { Injectable } from '@nestjs/common'; // Adjust path as needed
export interface MenuItem {
  path: string;
  title: string;
  children?: MenuItem[];
}
@Injectable()
export class AppMenuService {
  private menus: MenuItem[] = [
    {
      path: 'app-docs',
      title: 'App Docs',
      children: [
        {
          path: 'overview',
          title: 'Overview',
          children: [
            { path: 'introduction', title: 'Introduction' },
            { path: 'overview', title: 'Overview' },
            { path: 'core-concept', title: 'Core Concept' },
            { path: 'design-resources', title: 'Design Resources' },
            { path: 'roadmap', title: 'Roadmap' },
            { path: 'changelog', title: 'Changelog' },
            { path: 'license', title: 'License' },
            { path: 'faq', title: 'FAQ' },
            { path: 'contributing', title: 'Contributing' },
            { path: 'code-of-conduct', title: 'Code of Conduct' },
            { path: 'support', title: 'Support' },
            { path: 'sponsor', title: 'Sponsor' },
            { path: 'security', title: 'Security' },
            { path: 'contact', title: 'Contact' },
            { path: 'team', title: 'Team' },
          ],
        },
        {
          path: 'guides',
          title: 'Guides',
          children: [
            { path: 'installation', title: 'Installation' },
            { path: 'getting-started', title: 'Getting Started' },
            { path: 'configuration', title: 'Configuration' },
            { path: 'Accessibility', title: 'Accessibility' },
            { path: 'basic-usage', title: 'Basic Usage' },
            { path: 'advanced-usage', title: 'Advanced Usage' },
            { path: 'best-practices', title: 'Best Practices' },
            { path: 'theming', title: 'Theming' },
            { path: 'internationalization', title: 'Internationalization' },
            { path: 'third-party-library', title: 'Third Party Library' },
            { path: 'module-authors', title: 'Module Authors' },
            { path: 'testing', title: 'Testing' },
            { path: 'migration', title: 'Migration' },
            { path: 'performance', title: 'Performance' },
            { path: 'lazy-loading', title: 'Lazy Loading' },
            { path: 'server-side-rendering', title: 'Server Side Rendering' },
            { path: 'troubleshooting', title: 'Troubleshooting' },
          ],
        },
        {
          path: 'api-reference',
          title: 'Api-Reference',
          children: [],
        },
      ],
    },
  ];

  getMenus(): MenuItem[] {
    return this.menus;
  }

  getMenuByPath(path: string): MenuItem | undefined {
    return this.menus.find((menu) => menu.path === path);
  }

  getChildByPath(menuPath: string, childPath: string): MenuItem | undefined {
    const menu = this.getMenuByPath(menuPath);
    return menu?.children?.find((child) => child.path === childPath);
  }

  addChildToMenu(menuPath: string, child: MenuItem): MenuItem[] | undefined {
    const menu = this.getMenuByPath(menuPath);
    if (menu && menu.children) {
      menu.children.push(child);
      return menu.children;
    }
    return undefined;
  }

  updateChildInMenu(
    menuPath: string,
    childPath: string,
    updatedChild: Partial<MenuItem>,
  ): MenuItem | undefined {
    const menu = this.getMenuByPath(menuPath);
    const childIndex = menu?.children?.findIndex(
      (child) => child.path === childPath,
    );

    if (menu && menu.children && childIndex !== undefined && childIndex >= 0) {
      menu.children[childIndex] = {
        ...menu.children[childIndex],
        ...updatedChild,
      };
      return menu.children[childIndex];
    }
    return undefined;
  }
}
