import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/material";
import { Word, WordClass } from "../models/types";
import Icon from "./Icon";
import { styled } from "@mui/material/styles";

const getKeyByValue = (obj: any, value: any) =>
  Object.keys(obj).find((key) => obj[key] === value);

interface WordCardProps {
  word: Word;
}

const Root = styled("div")({
  minWidth: 275,
});

const Pos = styled("div")({
  marginBottom: 12,
});

const WordCard: React.FC<WordCardProps> = ({ word }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Root>
      <Card variant={"outlined"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {word.swedish}
            {word.dictionaryForm && (
              <>
                <br />
                DF: {word.dictionaryForm}
              </>
            )}
          </Typography>
          <Pos>
            <Typography color="textSecondary">
              {getKeyByValue(WordClass, word.wordClass)?.toLowerCase()}
            </Typography>
          </Pos>
          <Typography variant="body2" component="p">
            {word.english}
          </Typography>
        </CardContent>
        {word.moreInfoComponent === "See grammar point" && (
          <div className="w3-padding">See GP</div>
        )}
        {word.moreInfoComponent &&
          word.moreInfoComponent !== "See grammar point" && (
            <CardActions>
              <Button size="small" onClick={() => setExpanded(!expanded)}>
                See more
                <Icon type={expanded ? "collapse" : "expand"} />
              </Button>
            </CardActions>
          )}
        {expanded && <div className="w3-padding">{word.moreInfoComponent}</div>}
      </Card>
    </Root>
  );
};

export default WordCard;
