import { useEffect, useState } from "react";
import PostCard from './PostCard';
import { getPosts } from './Services';

function Exercise() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (err) {
                console.error("[Component] Gagal menampilkan data:", err.message);
                setError("Gagal memuat data post. Silakan coba lagi nanti.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                    Post Cards
                </h1>
                {loading && (
                    <p className="text-center text-gray-500">Memuat data post...</p>
                )}
                {error && (
                    <p className="text-center text-red-600">{error}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {posts.map((post) => (
                        <PostCard key={post.id} title={post.title} body={post.body} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Exercise
