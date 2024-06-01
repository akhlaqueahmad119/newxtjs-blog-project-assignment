import React from "react";
import styles from "./BlogCard.module.scss";
import {
  IoImageOutline,
  IoPlayOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { BlogData } from "@/models/dataType";
import { useRouter } from "next/router";

const BlogCard: React.FC<BlogData> = ({
  image,
  title,
  author,
  date,
  shares,
  description,
  video,
  profileImage,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    const formattedTitle = title.toLowerCase().replace(/ /g, "-");
    router.push(`/${formattedTitle}`);
  };
  return (
    <div className={styles.blogCard} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.badges}>
          <span className={styles.badge}>Aenean Eleifend</span>
          <span className={styles.badge}>Aliquam</span>
        </div>
        <div className={styles.icon}>
          {video ? <IoPlayOutline /> : <IoImageOutline />}
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.meta}>
        <img src={profileImage} alt={author} className={styles.authorImage} />
        <span className={styles.authorName}>{author}</span>
        <div className={styles.dateShare}>
          <span className={styles.date}>{date}</span>
          <span className={styles.shares}>
            <IoShareSocialOutline /> • {shares} shares
          </span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <a href="#" className={styles.viewPost}>
        View Post
      </a>
    </div>
  );
};

export default BlogCard;
