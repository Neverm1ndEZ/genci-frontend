import CourseCategory from "@/components/CourseCategory/CourseCategory"
import { useAllCategories } from "utils/query/AllCategoriesQuery"

const AllCategories = () => {

  const {data:allCategories} = useAllCategories()
  console.log(allCategories)
  return (
    <div>
        <CourseCategory/>
    </div>
  )
}

export default AllCategories

