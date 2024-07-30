import React, { useEffect, useState } from "react";

const LeftSideBar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5420/category")
            .then((res) => res.json())
            .then((data) => setCategory(data))
            .catch((err) => console.log(err));
    }, []);
    console.log(category);

    return (
        <div>
            <h3 className="fw-bold">All Category</h3>
            <div className="mt-4">
                {category.length === 0 ? (
                    <h3 className="text-center fs-5">No Category Found</h3>
                ) : (
                    category.map((singleCategory) => (
                        <button
                            style={{
                                textAlign: "justify",
                                paddingLeft: "60px",
                            }}
                            key={singleCategory.id}
                            className="fw-bold border-0 fs-4 w-100 mb-2 bg-secondary bg-gradient py-2 text-white rounded-1"
                        >
                            {singleCategory.name}
                        </button>
                    ))
                )}
            </div>
        </div>
    );
};

export default LeftSideBar;
