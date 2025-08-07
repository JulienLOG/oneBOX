export const taskModel = (content = null) => ({
    id: crypto.randomUUID(),
    content: content,
    done: false,
    edit: false,
});