import { useQuery } from 'react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchCourseTestimonials = async (courseId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/testimonial/${courseId}`
    );
    console.log('Fetch Course Testimonials Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Course Testimonials:', error);
    throw new Error('Error fetching Course Testimonials');
  }
};

export function useCourseTestimonials(courseId) {
  return useQuery(['testimonial', courseId], () =>
    fetchCourseTestimonials(courseId)
  );
}
