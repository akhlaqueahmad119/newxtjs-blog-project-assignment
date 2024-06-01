import { SocialMediaData } from "@/models/dataType";
import styles from "./SocialMediaBanner.module.scss";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const SocialMediaBanner = ({ data }: { data: SocialMediaData[] }) => {
  return (
    <div className={styles.socialMediaBanner}>
      {data.map((item, index) => (
        <div className={styles.socialMediaItem}>
          {item.name === "Instagram" && <RiInstagramFill />}
          {item.name === "Facebook" && <RiFacebookFill />}
          {item.name === "Twitter" && <RiTwitterFill />}
          {item.name === "Youtube" && <RiYoutubeFill />}
          <p>{item.followers}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaBanner;
