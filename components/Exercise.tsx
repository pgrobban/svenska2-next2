import React, { useState } from "react";
import { ExerciseComponentType } from "../models/types";
import Image from "next/image";

type pickOutGenericType<T> = T extends ExerciseComponentType<infer P> ? P : never;

export interface CommonExerciseProps<P extends object> {
  id: string;
  numberInLesson: number;
  title: string;
  saolRequired?: boolean;
  ExerciseComponent: ExerciseComponentType<P>;
  exerciseComponentProps: pickOutGenericType<CommonExerciseProps<P>["ExerciseComponent"]>;
}

const Exercise = <P extends object = {}>(props: CommonExerciseProps<P>) => {
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
