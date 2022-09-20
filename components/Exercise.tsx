import React, { Component, ComponentProps, useState } from "react";
import Image from "next/image";
import TypingTheAlphabet, {
  TypingTheAlphabetProps,
} from "./exercises/TypingTheAlphabet";
import WhichLetter, { WhichLetterProps } from "./exercises/WhichLetter";
import WriteWhatYouHear, {
  WriteWhatYouHearProps,
} from "./exercises/WriteWhatYouHear";

interface CommonExerciseProps {
  id: string;
  numberInLesson: number;
  title: string;
  saolRequired?: boolean;
}

interface TypingTheAlphabetExerciseProps extends CommonExerciseProps {
  ExerciseComponent: typeof TypingTheAlphabet;
  exerciseComponentProps: Omit<TypingTheAlphabetProps, "onMarkAsCompleted">;
}

interface WhichLetterExerciseProps extends CommonExerciseProps {
  ExerciseComponent: typeof WhichLetter;
  exerciseComponentProps: Omit<WhichLetterProps, "onMarkAsCompleted">;
}

interface WriteWhatYouHearExerciseProps extends CommonExerciseProps {
  ExerciseComponent: typeof WriteWhatYouHear;
  exerciseComponentProps: Omit<WriteWhatYouHearProps, "onMarkAsCompleted">;
}

export type ExerciseProps =
  | TypingTheAlphabetExerciseProps
  | WhichLetterExerciseProps
  | WriteWhatYouHearExerciseProps;

const Exercise: React.FC<ExerciseProps> = (props) => {
  const [exerciseCompletionDate, setExerciseCompletionDate] =
    useState<Date | null>(null);

  const {
    numberInLesson,
    title,
    ExerciseComponent,
    saolRequired,
    exerciseComponentProps,
  } = props;

  return (
    <div
      className="w3-padding-small"
      style={exerciseCompletionDate ? { border: "1px solid green" } : {}}
    >
      {saolRequired && (
        <Image
          src="/images/saol.png"
          alt="SAOL"
          width={75}
          className="w3-right"
        />
      )}
      <h3>
        Exercise {numberInLesson}:
        <br />
        {title}
      </h3>
      {exerciseCompletionDate && (
        <small>
          Completed on {exerciseCompletionDate.toISOString().substring(0, 10)}
        </small>
      )}

      <ExerciseComponent
        onMarkAsCompleted={
          !exerciseCompletionDate
            ? () => setExerciseCompletionDate(new Date())
            : () => {}
        }
        {...exerciseComponentProps}
      />
    </div>
  );
};

export default Exercise;
