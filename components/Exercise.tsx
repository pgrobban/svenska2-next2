import React, { ComponentProps, useState } from "react";
import { ExerciseComponentType } from "../models/types";
import Image from "next/image";
export interface CommonExerciseProps<ExerciseComponentType> {
  id: string;
  numberInLesson: number;
  title: string;
  saolRequired?: boolean;
  ExerciseComponent: ExerciseComponentType;
  exerciseComponentProps: ComponentProps<ExerciseComponentType>;
}

const Exercise = (props: CommonExerciseProps<ExerciseComponentType<P>>) => {
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
