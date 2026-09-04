import { courses } from "~~/server/courses"

export default defineEventHandler(async (event) => {
    const slug = getRouterParam(event, 'slug')

    const index = courses.findIndex(item => item.slug === slug)
    if (index === -1) {
        throw createError({
            status: 404,
            statusText: 'Course Not Found'
        })
    }

    courses.splice(index, 1)

    return { message: 'Course deleted successfully' }
})