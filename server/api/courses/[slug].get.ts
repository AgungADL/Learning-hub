import { courses } from "~~/server/courses"
export default defineEventHandler((event) => {
    const slug = getRouterParam(event, 'slug')
    const course = courses.find(item => item.slug === slug)

    if (!course) {
        throw createError({
            status: 404,
            statusText: 'Course Not Found'
        })
    }
    return { course }
})