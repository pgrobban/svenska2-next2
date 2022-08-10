import React, { useState } from "react";
import { ExerciseComponentType } from "../models/types";
import Image from "next/image";

export interface CommonExerciseProps<C extends ExerciseComponentType> {
  id: string;
  numberInLesson: number;
  title: string;
  saolRequired?: boolean;
  ExerciseComponent: C;
  exerciseComponentProps?: Omit<React.ComponentProps<C>, "onMarkAsCompleted">;
}

const Exercise = <C extends ExerciseComponentType>(
  props: CommonExerciseProps<C>
) => {
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

      {/* @ts-ignore */}
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
