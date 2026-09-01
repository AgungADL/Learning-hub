import { courses } from "~~/server/courses"

export default defineEventHandler(() => {
    return { courses }
})