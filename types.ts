
export enum Tab {
  HOME = 'HOME',
  PRINCIPLES = 'PRINCIPLES',
  SCHOOLS = 'SCHOOLS',
  LESSONS = 'LESSONS',
  PURPOSE = 'PURPOSE',
  EXPERIENCE = 'EXPERIENCE',
  CONTACT = 'CONTACT'
}

export interface Principle {
  id: number;
  title: string;
  content: string;
}

export interface ProcessStep {
  step: string;
  description: string;
  example: string;
}

export interface School {
  id: string;
  name: string; // e.g., Khí
  class: string; // e.g., Giúp đỡ
  icon: any;
  color: string;
  description: string;
  lessons: {
    tooMuch: string;
    tooLittle: string;
    balanced: string;
  };
  classProcess: {
    title: string;
    steps: ProcessStep[];
  };
  modalTheme: {
    border: string;
    bg: string;
    titleColor: string;
    iconColor: string;
  };
}

export interface LifeItem {
  id: number;
  name: string;
  description: string;
  challenge?: string; // For lessons
  fulfillment?: string; // For purposes
  icon?: any;
  details?: {
    symptoms: string[];
    advice: string;
    gift: string;
  };
}

export enum FingerName {
  THUMB = 'Ngón Cái',
  INDEX = 'Ngón Trỏ',
  MIDDLE = 'Ngón Giữa',
  RING = 'Ngón Áp Út',
  LITTLE = 'Ngón Út'
}

export enum HandSide {
  LEFT = 'Tay Trái',
  RIGHT = 'Tay Phải'
}

export interface FingerMap {
  side: HandSide;
  finger: FingerName;
  lesson: string;
  purpose: string;
}
