import React from "react"
import { useParams } from "react-router-dom"
import CatalogTemplate from "../components/core/Catalog/CatalogTemplate"
import { getCatalogData } from "../data/catalogData"

function CatalogPage() {
  const { catalogName } = useParams<{ catalogName: string }>()
  const data = getCatalogData(catalogName || "")

  if (!data) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-richblack-5 mb-4">
            Page Not Found
          </h1>
          <p className="text-richblack-300 mb-8">
            The catalog page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block bg-yellow-25 text-richblack-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all"
          >
            Go Home
          </a>
        </div>
      </div>
    )
  }

  return <CatalogTemplate data={data} catalogName={catalogName || ""} />
}

export default CatalogPage
