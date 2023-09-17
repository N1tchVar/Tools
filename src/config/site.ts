import {
IconArrowsLeftRight,
IconColorPicker,
IconPhoto,
IconFileDescription,
IconKeyboard,
IconKey,
TablerIconsProps,
IconFile
} from '@tabler/icons-react'

export type Tool = {
    label: string
    link: string
    color: string
    icon: React.ComponentType<TablerIconsProps>;
    keywords: string[]
}

type Site = {
    title: string
    name: string
    keywords: string[]
    titleTemplate: string
    description: string
    tools: Array<{
      label: string
      links: Tool[]
    }>
}

export const site: Site = {
    title: 'Tools | N1tch',
    name: 'N1tch',
    keywords: ['N1tch', 'Tools', 'Web Tools'],
    titleTemplate: '- Tools | N1tch',
    description: 'A collection of tools created by N1tch.',
    tools: [
      {
        label: 'Document',
        links: [
          {
            label: 'PDF Viewer',
            link: '/document/pdf-viewer',
            keywords: ['pdf', 'Viewer', 'document'],
            color: '#fa5252',
            icon: IconFileDescription
          }
        ]
      }
    ]
}
