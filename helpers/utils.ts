import { cloneDeep, sampleSize } from "lodash";
import { find } from "lodash";
import { Lesson, Course, CorrectIncorrectMark, Bite } from "../models/types";

export const SITE_NAME = "Robban's Swedish Corner";

export const LETTERS_OF_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";

export const VOWELS = "AEIOUYÅÄÖ";

export const CONSONANTS = "BCDFGHJKLMNPQRSTVWXZ";

export const SWEDISH_DAY_ORDINALS = [
  "första",
  "andra",
  "tredje",
  "fjärde",
  "femte",
  "sjätte",
  "sjunde",
  "åttonde",
  "nionde",
  "tionde",
  "elfte",
  "tolfte",
  "trettonde",
  "fjortonde",
  "femtonde",
  "sextonde",
  "sjuttonde",
  "artonde",
  "nittonde",
  "tjugonde",
  "tjugoförsta",
  "tjugoandra",
  "tjugotredje",
  "tjugofjärde",
  "tjugofemte",
  "tjugosjätte",
  "tjugosjunde",
  "tjugoåttonde",
  "tjugonionde",
  "trettionde",
  "trettioförsta",
];

export const SWEDISH_MONTHS = [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december",
];

export const SWEDISH_WEEK_DAYS = [
  "måndag",
  "tisdag",
  "onsdag",
  "torsdag",
  "fredag",
  "lördag",
  "söndag",
];

export const getCourseNameByLessonUrlName = (
  courses: Course[],
  lessonUrlName: string
): Course | undefined => {
  const foundCourse = find(courses, {
    lessons: [{ urlName: lessonUrlName }],
  }) as Course;
  return foundCourse;
};

export const getLessonByUrlName = (
  courses: Course[],
  urlName: string
): Lesson | undefined => {
  const foundCourse = getCourseNameByLessonUrlName(courses, urlName);
  const foundLesson = find(foundCourse?.lessons, { urlName });
  return foundLesson;
};

export const getCourseByUrlName = (
  courses: Course[],
  urlName: string
): Course | undefined => {
  const foundCourse = find(courses, { urlName }) as Course;
  return foundCourse;
};

export const getBiteByUrlName = (
  bites: Bite[],
  urlName: string
): Bite | undefined => {
  const foundBite = find(bites, { urlName });
  return foundBite;
};

export const getBorderColorByMark = (
  correctIncorrectMark: CorrectIncorrectMark | null
) => {
  switch (correctIncorrectMark) {
    case "correct":
      return "green";
    case "incorrect":
      return "red";
    default:
      return "none";
  }
};

export const generateRandomWords = (
  words: string[],
  numberOfWords: number
): string[] => sampleSize(words, numberOfWords);

export const getEmptyStringsArray = (numberOfWords: number) =>
  new Array(numberOfWords).fill("");

export const getEmptyStringsArrayWithFirstValueSet = (
  numberOfWords: number,
  firstValue: string
) => {
  const arr = getEmptyStringsArray(numberOfWords);
  arr[0] = firstValue;
  return arr;
};

export const getNullArray = (numberOfWords: number) =>
  new Array(numberOfWords).fill(null);

export const trimInputs = (inputs: string[]) =>
  inputs.map((input) => input.trim());

export const normalizeInputs = (inputs: string[]) =>
  trimInputs(inputs).map((input) => input.toUpperCase());

export const sortByCaseInsensitiveSwedishLocale = (words: string[]) =>
  cloneDeep(words).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase(), "se")
  );

export const getSwedishDateTodayAsText = () => {
  const currentDate = new Date();
  return `${SWEDISH_DAY_ORDINALS[currentDate.getDate() - 1]} ${
    SWEDISH_MONTHS[currentDate.getMonth()]
  }`;
};

const addAlternateSwedishOrdinal = (ordinal: string) =>
  ordinal
    .replace("första", "första (förste)")
    .replace("andra", "andra (andre)");

export const getSwedishDateTodayAsTextAlternate = () => {
  const currentDate = new Date();
  let dayOrdinal = SWEDISH_DAY_ORDINALS[currentDate.getDate() - 1];
  dayOrdinal = addAlternateSwedishOrdinal(dayOrdinal);
  let monthOrdinal = SWEDISH_DAY_ORDINALS[currentDate.getMonth()];
  monthOrdinal = addAlternateSwedishOrdinal(monthOrdinal);
  return `${dayOrdinal} i ${monthOrdinal}`;
};

export const getSwedishDayOfWeekToday = () => {
  const currentDate = new Date();
  return SWEDISH_WEEK_DAYS[currentDate.getDay()];
};

export const getSwedishOrdinalDayToday = () => {
  const currentDate = new Date();
  const ordinalDay = SWEDISH_DAY_ORDINALS[currentDate.getDate() - 1];
  return addAlternateSwedishOrdinal(ordinalDay);
};

export const LESSONS_PATH = "/lesson";
export const COURSES_PATH = "/course";
export const BITES_PATH = "/bite";

export const isVowel = (letter: string) => letter && VOWELS.includes(letter);
export const isConsonant = (letter: string) =>
  letter && CONSONANTS.includes(letter);
