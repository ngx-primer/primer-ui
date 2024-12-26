// Base content item with constrained properties
type BaseContentItem<T extends string = string> = {
  type: T; // Mandatory type property constrained by string literals
  id?: string; // Optional unique identifier
  metadata?: Record<string, unknown>; // Metadata for additional information
};

// Content types extending the constrained base type
type TextContent = BaseContentItem<'text'> & {
  data: string; // Text content
};

type ListContent = BaseContentItem<'list'> & {
  data: string[]; // Array of list items
};

type LinkData = {
  href: string; // The URL of the link
  label: string; // Display text for the link
};

type LinkContent = BaseContentItem<'link'> & {
  data: {
    format: 'paragraph' | 'multiline' | 'list' | 'embedded'; // Format of the link content
    content:
      | string // For paragraph links or paragraphs with embedded links
      | LinkData[] // For lists or multiple standalone links
      | { text: string; links: LinkData[] }; // For embedded links within text
  };
};

type CodeContent = BaseContentItem<'code'> & {
  data: {
    language: string; // Programming language for syntax highlighting
    code: string; // Code snippet
  };
};

type ApiContent = BaseContentItem<'api'> & {
  data: {
    method: string; // HTTP method (GET, POST, etc.)
    description: string; // API description
    parameters?: { name: string; type: string; description: string }[]; // API parameters
    returns?: { type: string; description: string }; // Return type information
  };
};

// Unified content item type with extensibility
type ContentItem =
  | TextContent
  | ListContent
  | LinkContent
  | CodeContent
  | ApiContent
  | (BaseContentItem<string> & Record<string, unknown>); // Allows additional types with custom props

type ContentSection = {
  title: string; // Section title
  items: ContentItem[]; // List of content items
  metadata?: Record<string, unknown>; // Section-specific metadata
};

export type PageContent = {
  title?: string; // Optional page title
  sections: ContentSection[]; // List of sections
  metadata?: Record<string, unknown>; // Page-wide metadata
};
