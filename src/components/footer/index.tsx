import React, { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import { SocialMediaData } from "@/models/dataType";
import axios from "axios";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer: React.FC = () => {
  const [socialMediaData, setSocialMediaData] = useState<SocialMediaData[]>([]);

  useEffect(() => {
    const fetchSocialMediaData = async () => {
      try {
        const response = await axios.get("/api/socialMediaData");
        setSocialMediaData(response.data);
      } catch (error) {
        console.error("Error fetching social media data:", error);
      }
    };

    fetchSocialMediaData();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Designed & Developed by <strong>XP DESIGN</strong>
        </p>
        <div className={styles.socialMedia}>
          {socialMediaData.map((item, index) => (
            <div className={styles.socialIcon}>
              {item.name === "Instagram" && <RiInstagramFill />}
              {item.name === "Facebook" && <RiFacebookFill />}
              {item.name === "Twitter" && <RiTwitterFill />}
              {item.name === "Youtube" && <RiYoutubeFill />}
              <span>{item.followers}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
