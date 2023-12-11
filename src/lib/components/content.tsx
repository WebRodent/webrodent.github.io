import React from "react";
type ContentCardProps = {
    title: string;
    contents: string[];
  };
  
const ContentCard: React.FC<ContentCardProps> = ({ title, contents }) => (
    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start content-card bg-gray shadow-md p-6 rounded-lg">
        <div className="flex-1">
            <h2 className="text-3xl font-bold text-white-500">{title}</h2>
            {contents.map((item, index) => (
                <p key={index} className="mt-4 mb-6 text-blue-200 text-lg leading-relaxed">
                    {item}
                </p>
            ))}
        </div>
    </div>
);

export default ContentCard;