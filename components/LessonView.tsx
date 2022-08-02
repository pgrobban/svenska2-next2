import { IfDesktop } from "../helpers/showBasedOnScreen";
import Layout from "./layout/Layout";
import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Icon from "./Icon";
import LessonContentView from "./LessonContentView";
import ExerciseView from "./ExerciseView";
import { isEmpty } from "lodash";
import { Lesson } from "../models/types";

interface Props {
  lesson?: Lesson;
}

enum Section {
  Lesson,
  Exercises,
  FeedbackAndQuestions,
};

const LessonView: React.FC<Props> = ({ lesson }) => {
  const [viewingSection, setViewingSection] = useState(Section.Lesson);
  useEffect(() => { setViewingSection(Section.Lesson) }, [lesson]);

  if (!lesson) {
    return (
      <Layout location="lessons" title="Oh no!">
        <span>
          This lesson link is invalid. If you followed a link to get here,
          please file a bug report in the forums.
        </span>
      </Layout>
    );
  }

  if (isEmpty(lesson.chunks)) {
    return (
      <Layout location="lessons" title="Oh no!">
        <span>This lesson hasn't been written yet :(</span>
      </Layout>
    );
  }

  return (
    <Layout
      location="lessons"
      activeLessonUrlName={lesson.urlName}
      title={lesson.name}
    >
      {viewingSection === Section.Lesson && (
        <LessonContentView lessonChunks={lesson.chunks} />
      )}
      {viewingSection === Section.Exercises && (
        <ExerciseView lessonName={lesson.name} exercises={lesson.exercises} />
      )}

      <BottomNavigation
        value={viewingSection}
        showLabels
        onChange={(_, newSection) => {
          window.scrollTo(0, 0);
          setViewingSection(newSection);
        }}
      >
        <BottomNavigationAction
          label={<a href="#lesson">Lesson</a>}
          icon={<Icon type="help" />}
        />
        <BottomNavigationAction
          label={<a href="#exercises">Exercises</a>}
          icon={<Icon type="exercise" />}
          disabled={isEmpty(lesson.exercises)}
        />
        <BottomNavigationAction
          label={<a href="#feedback">Feedback</a>}
          icon={<Icon type="chat" />}
        />
      </BottomNavigation>

      <IfDesktop>
        <div className="centered w3-margin-top">
          <a href="#top">Back to top</a>
        </div>
      </IfDesktop>
    </Layout>
  );
};

export default LessonView;
