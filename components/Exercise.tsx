import React, { useState } from "react";
import { ExerciseProps } from "../models/types";
import Image from "next/image";

export interface CommonExerciseProps {
  id: string;
  numberInLesson: number;
  title: string;
  ExerciseComponent: React.FC<ExerciseProps>;
  exerciseComponentProps?: any;
  saolRequired?: boolean;
}

const Exercise: React.FC<CommonExerciseProps> = (
  props: CommonExerciseProps
) => {
  const [exerciseCompletionDate, setExerciseCompletionDate] =
    useState<Date | null>(null);
  const {
    numberInLesson,
    title,
    ExerciseComponent,
    exerciseComponentProps,
    saolRequired,
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
          Completed on {exerciseCompletionDate.toISOString().substring(0, 6)}
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
