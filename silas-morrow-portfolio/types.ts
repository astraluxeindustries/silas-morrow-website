export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'code' | 'refresh-cw' | 'server';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}