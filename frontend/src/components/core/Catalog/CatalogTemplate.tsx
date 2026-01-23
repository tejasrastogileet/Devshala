import React, { useState } from "react"
import Footer from "../../common/Footer"
import RatingStars from "../../common/RatingStars"
import { CatalogCourse, CatalogPageData } from "../../../data/catalogData"

interface CatalogTemplateProps {
  data: CatalogPageData
  catalogName: string
}

const CatalogTemplate: React.FC<CatalogTemplateProps> = ({ data, catalogName }) => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      {/* Hero Section */}
      <div className="box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent">
          <p className="text-sm text-richblack-300">
            Home / Catalog /{" "}
            <span className="text-yellow-25">{data.pageTitle}</span>
          </p>
          <p className="text-3xl text-richblack-5">{data.pageTitle}</p>
          <p className="text-lg text-richblack-200">{data.subheading}</p>
          <p className="max-w-[870px] text-richblack-200">{data.description}</p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="text-3xl font-bold text-richblack-5 mb-8">
          Courses to get you started
        </div>

        {/* Tabs */}
        <div className="my-4 flex border-b border-b-richblack-600 text-sm">
          <p
            className={`px-4 py-2 cursor-pointer transition-all ${
              activeTab === 1
                ? "border-b-2 border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Most Popular
          </p>
          <p
            className={`px-4 py-2 cursor-pointer transition-all ${
              activeTab === 2
                ? "border-b-2 border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            }`}
            onClick={() => setActiveTab(2)}
          >
            New
          </p>
        </div>

        {/* Course Grid */}
        <div className="py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {data.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

interface CourseCardProps {
  course: CatalogCourse
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-richblack-800 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
      {/* Image Container */}
      <div className="relative h-[200px] w-full overflow-hidden bg-richblack-700">
        <img
          src={course.thumbnail || "https://via.placeholder.com/400x300"}
          alt={course.courseName}
          className="h-full w-full object-cover"
        />
        {course.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <span className="text-xl font-bold text-white bg-red-600 px-4 py-2 rounded-lg">
              COMING SOON
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 px-4 py-4">
        <h3 className="text-lg font-semibold text-richblack-5 line-clamp-2">
          {course.courseName}
        </h3>

        <p className="text-sm text-richblack-200">{course.instructor}</p>

        {/* Rating Section */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-5 font-semibold">{course.rating || 0}</span>
          <RatingStars Review_Count={course.rating || 0} Star_Size={20} />
          <span className="text-sm text-richblack-400">
            ({course.ratingCount} {course.ratingCount === 1 ? "rating" : "ratings"})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t border-richblack-700">
          <span className="text-xl font-bold text-richblack-5">
            {typeof course.price === "number"
              ? `Rs. ${course.price}`
              : course.price}
          </span>
          <button
            disabled={course.comingSoon}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              course.comingSoon
                ? "bg-richblack-700 text-richblack-300 cursor-not-allowed"
                : "bg-yellow-25 text-richblack-900 hover:bg-yellow-50"
            }`}
          >
            {course.comingSoon ? "Coming Soon" : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CatalogTemplate
