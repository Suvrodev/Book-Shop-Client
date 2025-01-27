import { useTitle } from "../../component/hook/useTitle";
import LoadingPage from "../../component/LoadingPage/LoadingPage";
import { useGetAllAboutQuery } from "../../Redux/api/features/About/aboutManagementApi";

const AboutUS = () => {
  useTitle("About Us");
  const { data, isLoading } = useGetAllAboutQuery(undefined);
  const about = data?.data[0]?.data;
  console.log("data: ", about);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </div>
  );
};

export default AboutUS;
