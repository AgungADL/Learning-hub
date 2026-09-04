import { courses } from "~~/server/courses"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const slug = getRouterParam(event, 'slug')
    
    const currentCourse = courses.find(item => item.slug === slug)
    if (!currentCourse) {
        throw createError({
            status: 404,
            statusText: 'Course Not Found'
        })
    }

    const newSlug = body.name.replace(/\s+/g, '-').toLowerCase()
    const filteredCourses = courses.filter(item => item.slug !== slug)
    const existCourse = filteredCourses.find(item => item.slug === newSlug)
    if (existCourse) {
        throw createError({
            status: 409,
            statusText: 'Course is already exist'
        })
    }

    currentCourse.slug = newSlug
    currentCourse.name = body.name
    currentCourse.description = body.description
    currentCourse.descriptionPreview = body.descriptionPreview

    return { message: 'Course updated successfully', course: currentCourse }
})