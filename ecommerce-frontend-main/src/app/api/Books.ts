export const fetchBooks = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/books`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Error al obtener libros');
    }

    return await response.json();
}