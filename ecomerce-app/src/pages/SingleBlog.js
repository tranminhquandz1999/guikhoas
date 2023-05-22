import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
              <div>
                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              </div>
              <p>
                You'jre only as good as your last collection, which is an BSS
                ace heen Wien eine mEpease sr eee Cena really pulls at their
                heart. I have a fantastic relationship Preece mentee rttio mre
                sites Pes cet ct eis coat RUS eels eee ea ae ce eae re asec
                Seoereere eer (ts You'jre only as good as your last collection,
                which is an BSS ace heen Wien eine mEpease sr eee Cena really
                pulls at their heart. I have a fantastic relationship Preece
                mentee rttio mre sites Pes cet ct eis coat RUS eels eee ea ae ce
                eae re asec) Seoereere eer ts
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
