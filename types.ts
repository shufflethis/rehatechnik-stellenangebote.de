export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Freelance' | 'Ausbildung';
  tags: string[];
  postedAt: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export interface SectionContent {
  title: string;
  paragraphs: string[];
  imageSide?: 'left' | 'right' | 'none';
  imageUrl?: string;
  imageAlt?: string;
}