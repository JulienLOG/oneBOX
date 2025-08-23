export const __task__ = (content = null) => ({
    id: crypto.randomUUID(),
    content: content,
    done: false,
    edit: false,
});