import React from "react";
import AudioButton from "../AudioButton";
import { Button } from "@mui/material";
import { ExerciseComponentType } from "../../models/types";

interface TongueTwister {
  header: string;
  recordingFileNameSlow: string;
  recordingFileNameFast: string;
  label: string;
}

export interface ReadTongueTwistersProps {
  tongueTwisters: TongueTwister[];
}

const ReadTongueTwisters: ExerciseComponentType<ReadTongueTwistersProps> = (props) => {
  const { tongueTwisters, onMarkAsCompleted } = props;

  return (
    <>
      <h5>Instructions &amp; passing criteria</h5>

      <p>
        Read the following tongue twisters and then try to pronounce them. You
        can then listen to the recordings in natural or slow speed.
      </p>
      <p>
        When you&apos;re done, you can mark the exercise as completed by
        yourself using the button at the bottom.
      </p>

      {tongueTwisters.map((tongueTwister, index) => (
        <div key={index}>
          <h6>{tongueTwister.header}</h6>
          <p>{tongueTwister.label}</p>
          <p>
            <AudioButton
              fileName={tongueTwister.recordingFileNameFast}
              label={"Natural speed"}
            />
            <AudioButton
              fileName={tongueTwister.recordingFileNameSlow}
              label={"Slow speed"}
            />
          </p>
        </div>
      ))}
      <p>&nbsp;</p>
      <div className="w3-margin centered">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onMarkAsCompleted()}
        >
          Mark as completed
        </Button>
      </div>
    </>
  );
};

export default ReadTongueTwisters;
