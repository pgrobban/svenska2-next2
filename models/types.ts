import React, { ComponentType, ReactElement, ReactNode } from "react";
import Exercise from "../components/Exercise";
import TypingTheAlphabet from "../components/exercises/TypingTheAlphabet";
import WriteSentences from "../components/exercises/WriteSentences";

export interface Course {
  name: string;
  lessons: Lesson[];
  urlName: string;
}

export interface Lesson {
  name: string;
  urlName: string;
  description: string;
  chunks: ReactElement[];
  exercises: typeof Exercise[];
  viewProps?: {
    hideBottomNavigation?: boolean;
  };
}

export interface ExerciseComponentProps {
  onMarkAsCompleted: () => void;
}

export type ExerciseComponentType<Props extends ExerciseComponentProps> =
  React.FC<Props>;

export enum WordClass {
  Noun = "N",
  Verb = "V",
  Adjective = "Adj",
  Adverb = "Adv",
  Pronoun = "Pro",
  Preposition = "Pre",
  Interjection = "I",
  Conjunction = "C",
  Numeral = "Nu",
  Phrase = "Phr",
}

export interface Word {
  swedish: string;
  dictionaryForm?: string;
  audioFileName: string;
  payAttentionToPronunciation?: string;
  english: string;
  wordClass: WordClass;
  moreInfoComponent?: ReactNode;
  subWords?: Word[];
}

export type CorrectIncorrectMark = "correct" | "incorrect";

export interface ShowBasedOnScreenProps {
  inline?: boolean;
  children: ReactNode;
}

export type Bite = Omit<Lesson, "description">;
