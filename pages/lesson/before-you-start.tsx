import Layout from "../../components/layout/Layout";
import LessonContentView from "../../components/LessonContentView";
import beforeYouStartLessonChunks from "../../models/lessons/BeforeYouStart";

const BeforeYouStartView: React.FC = () => (
  <Layout
    location="lessons"
    activeLessonUrlName={"before-you-start"}
    title={"Before you start"}
  >
    <LessonContentView lessonChunks={beforeYouStartLessonChunks} />
  </Layout>
);

export default BeforeYouStartView;
