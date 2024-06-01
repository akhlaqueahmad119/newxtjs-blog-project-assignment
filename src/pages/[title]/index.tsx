import { useRouter } from "next/router";
import React from "react";
import styles from "./BlogPost.module.scss";

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div>
      <div className={styles.container}>
        <h1>{title?.toString().replace(/-/g, " ")}</h1>
        <p>
          This is the blog post content for{" "}
          {title?.toString().replace(/-/g, " ")}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
