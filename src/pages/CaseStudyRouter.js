import { useParams } from "react-router-dom";
import CampusHireCaseStudy from "./CampusHireCaseStudy";
import CommunityAppCaseStudy from "./CommunityAppCaseStudy";
import GamingStoreCaseStudy from "./GamingStoreCaseStudy";

export default function CaseStudyRouter() {
  const { slug } = useParams();

  if (slug === "campushire") {
    return <CampusHireCaseStudy />;
  }
  else if (slug === "communityapp") {
    return <CommunityAppCaseStudy />;
  }
  else if (slug === "gamingstore") {
    return <GamingStoreCaseStudy />;
  }
  return (
    <div className="p-20 text-xl">
      Case Study Not Found
    </div>
  );
}