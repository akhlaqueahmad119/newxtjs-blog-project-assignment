import BlogCard from "@/components/blogCard";
import HeroBanner from "@/components/heroBanner";
import { BlogData, SocialMediaData } from "@/models/dataType";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import SocialMediaBanner from "@/components/socialMediaBanner";
import axios from "axios";
import ScrollToTopButton from "@/components/scrollToTopButton";
import Hero from "@/components/hero";
import TopDestinations from "@/components/topDestinations";

export default function Page() {
  const [blogData, setBlogData] = useState<BlogData[]>([]);
  const [socialMediaData, setSocialMediaData] = useState<SocialMediaData[]>([]);
  const [start, setStart] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const initialCount = 6;
  const subsequentCount = 3;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `/api/blogData?start=${start}&count=${
            start === 0 ? initialCount : subsequentCount
          }`
        );
        const data = response.data;
        if (
          data.length < (start === 0 ? initialCount : subsequentCount) ||
          start + data.length >= 12
        ) {
          setAllLoaded(true);
        }
        setBlogData((prevData) => [...prevData, ...data]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [start]);

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

  const loadMore = () => {
    setStart(
      (prevStart) => prevStart + (start === 0 ? initialCount : subsequentCount)
    );
  };

  return (
    <div className="page">
      <HeroBanner />
      {socialMediaData?.length > 0 && (
        <SocialMediaBanner data={socialMediaData} />
      )}

      <div className={styles.blogList}>
        {blogData.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
        <div className={styles.loadMoreButton}>
          {!allLoaded && <button onClick={loadMore}>Load More</button>}
        </div>
        <Hero />
        <ScrollToTopButton />
        <TopDestinations />
      </div>
    </div>
  );
}
