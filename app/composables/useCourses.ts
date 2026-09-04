export interface Course {
    slug: string,
    name: string,
    description: string
    descriptionPreview: string,
}

export interface CourseResponse {
    message: string,
    course: Course
}

export const useCourses = () => {
    const { data, pending, error } = useFetch<{ courses: Course[] }>('/api/courses', {
        key: 'courses'
    });
    const courses = computed(() => data.value?.courses || []);

    const getCourse = async (slug: string) => {
        const data = await $fetch<{ course: Course }>(`/api/courses/${slug}`)
        return data.course
    }

    return { courses, pending, error, getCourse }
}