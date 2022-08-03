import LessonView from "../../components/LessonView";
import { useRouter } from "next/router";
import courses from "../../models/courses";
import { getLessonByUrlName } from "../../helpers/utils";

const L: React.FC = () => {
  const router = useRouter();
  const { lessonUrlName } = router.query;

  if (typeof lessonUrlName !== "string") {
    return null;
  }

  const lesson = getLessonByUrlName(courses, lessonUrlName);
  return <LessonView lesson={lesson} />;
};

export default L;
