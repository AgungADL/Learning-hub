import { courses } from "~~/server/courses"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const slug = body.name.replace(/\s+/g, '-').toLowerCase()

    const existCourse = courses.find(item => item.slug === slug)
    if (existCourse) {
        throw createError({
            status: 409,
            statusText: 'Course is already exist'
        })
    }

    const newCourse = {
        ...body,
        slug: slug
    }

    courses.push(newCourse)

    return { message: 'Course created successfully', course: newCourse }
})