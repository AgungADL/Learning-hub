export interface Course {
    slug: string,
    name: string,
    description: string
    descriptionPreview: string,
}

export const useCourses = () => {
    const { data, pending, error } = useFetch<{ courses: Course[] }>('/api/courses');
    const courses = computed(() => data.value?.courses || []);

    const getCourse = (slug: string) => {
        return courses.value.find(course => course.slug === slug)
    }

    return { courses, pending, error, getCourse }
}