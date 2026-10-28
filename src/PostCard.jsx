import { useState } from "react";

function PostCard(props) {
    const { title, body } = props;
    const [clicked, setClicked] = useState(false);

    return (
        <div
            className={`${clicked ? "bg-blue-100" : "bg-white"} p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer`}
            onClick={() => setClicked(true)}
        >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{body}</p>
        </div>
    );
}

export default PostCard
