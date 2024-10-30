import { NumberLiteralType } from "typescript";

export interface HeadersInterface {
   text: string;
}

export interface CardInterface {
   image: string | any;
   playIcon?: string;
   starIcon?: string;
   buttonIcon?: string;
   numOfStar?: string | number;
   numlesson?: string | number;
   tutorName?: string;
   subject?: string;
   lessonLabel ?: string;
   lessonPrice ?: string | number;
   href: string;
}

export interface ButtonInterface {
   text: string;
   buttonIcon: string;
   href: string;
}
